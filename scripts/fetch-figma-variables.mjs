import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const token = process.env.FIGMA_PERSONAL_ACCESS_TOKEN || process.env.FIGMA_TOKEN;
const fileKey = process.env.FIGMA_FILE_KEY;

if (!token || !fileKey) {
  console.log('⚠️ Figma API credentials (FIGMA_PERSONAL_ACCESS_TOKEN & FIGMA_FILE_KEY) not present.');
  console.log('ℹ️ Skipping live API fetch and using existing tokens.json.');
  process.exit(0);
}

function rgbaToHex(r, g, b, a = 1) {
  const toHex = (n) => Math.round(n * 255).toString(16).padStart(2, '0').toUpperCase();
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  return a < 1 ? `${hex}${toHex(a)}` : hex;
}

async function fetchFigmaVariables() {
  console.log(`📡 Querying Figma REST API for file: ${fileKey}...`);
  const response = await fetch(`https://api.figma.com/v1/files/${fileKey}/variables/local`, {
    headers: {
      'X-Figma-Token': token,
    },
  });

  if (!response.ok) {
    throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const { meta } = data;
  if (!meta) throw new Error('Invalid response structure from Figma API');

  const { variableCollections, variables } = meta;
  console.log(`✅ Fetched ${Object.keys(variables).length} variables across ${Object.keys(variableCollections).length} collections from Figma!`);

  // Build variable ID to name lookup
  const varIdToName = {};
  Object.values(variables).forEach((v) => {
    varIdToName[v.id] = v.name;
  });

  const parsedTokens = {
    Primitive: {},
    Semantic: {},
    Component: {},
  };

  Object.values(variables).forEach((v) => {
    const name = v.name; // e.g. "neutral/50" or "surface/base"
    const collectionId = v.variableCollectionId;
    const collection = variableCollections[collectionId];
    const collectionName = collection ? collection.name : 'Primitive';

    let tierKey = 'Primitive';
    if (collectionName.toLowerCase().includes('semantic')) tierKey = 'Semantic';
    else if (collectionName.toLowerCase().includes('component')) tierKey = 'Component';

    const modes = collection ? collection.modes : [{ modeId: 'default', name: 'Default' }];

    modes.forEach((m) => {
      const modeName = m.name;
      const rawVal = v.valuesByMode ? v.valuesByMode[m.modeId] : undefined;
      if (rawVal === undefined) return;

      let value;
      if (typeof rawVal === 'object' && rawVal.type === 'VARIABLE_ALIAS') {
        const aliasName = varIdToName[rawVal.id] || rawVal.id;
        value = { type: 'ALIAS', value: aliasName };
      } else if (typeof rawVal === 'object' && 'r' in rawVal) {
        value = rgbaToHex(rawVal.r, rawVal.g, rawVal.b, rawVal.a);
      } else {
        value = rawVal;
      }

      // Structure inside parsedTokens
      const parts = name.split('/');
      let current = parsedTokens[tierKey];
      for (let i = 0; i < parts.length - 1; i++) {
        if (!current[parts[i]]) current[parts[i]] = {};
        current = current[parts[i]];
      }

      const lastPart = parts[parts.length - 1];
      if (tierKey === 'Semantic') {
        if (!current[lastPart]) current[lastPart] = { values: {} };
        current[lastPart].values[modeName] = value;
      } else if (tierKey === 'Component') {
        current[lastPart] = { $value: typeof value === 'object' ? `{Semantic/${value.value}}` : value };
      } else {
        current[lastPart] = { $value: typeof value === 'object' ? value.value : value };
      }
    });
  });

  const outputPath = path.join(rootDir, 'tokens.json');
  fs.writeFileSync(outputPath, JSON.stringify(parsedTokens, null, 2));
  console.log('🎉 Successfully synced and saved updated tokens.json from Figma!');
}

fetchFigmaVariables().catch((err) => {
  console.error('❌ Figma sync failed:', err.message);
  process.exit(1);
});
