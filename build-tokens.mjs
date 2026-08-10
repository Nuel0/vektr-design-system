import StyleDictionary from 'style-dictionary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parseColor(val) {
  if (typeof val === 'string' && val.startsWith('#') && val.length === 9) {
    const r = parseInt(val.slice(1, 3), 16);
    const g = parseInt(val.slice(3, 5), 16);
    const b = parseInt(val.slice(5, 7), 16);
    const a = parseFloat((parseInt(val.slice(7, 9), 16) / 255).toFixed(2));
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
  return val;
}

function hexToRgba(hex, alpha) {
  let c = hex.replace('#', '');
  if (c.length === 3) {
    c = c.split('').map(x => x + x).join('');
  }
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function toKebab(str) {
  return str
    .replace(/\//g, '-')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9-]/g, '')
    .toLowerCase();
}

function setDeep(obj, pathArray, value) {
  let current = obj;
  for (let i = 0; i < pathArray.length - 1; i++) {
    const key = toKebab(pathArray[i]);
    if (!current[key] || typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key];
  }
  const lastKey = toKebab(pathArray[pathArray.length - 1]);
  current[lastKey] = value;
}

async function runBuild() {
  const figmaJsonPath = path.join(__dirname, 'tokens.json');
  const rawData = JSON.parse(fs.readFileSync(figmaJsonPath, 'utf8'));

  const lookup = {};

  // Recursive walker to extract nested W3C DTCG tokens ($value & $type)
  function walkTokens(obj, currentPath = []) {
    if (typeof obj !== 'object' || obj === null) return;

    if ('$value' in obj) {
      const varName = currentPath.join('/');
      if (!lookup[varName]) {
        lookup[varName] = { values: {} };
      }
      const val = obj.$value;
      if (typeof val === 'object' && val !== null && !Array.isArray(val) && !('hex' in val) && !('alias' in val)) {
        for (const m in val) {
          lookup[varName].values[m] = val[m];
        }
      } else {
        lookup[varName].values['Default'] = val;
      }
      return;
    }

    for (const key in obj) {
      if (key.startsWith('$')) continue;
      walkTokens(obj[key], [...currentPath, key]);
    }
  }

  for (const collectionKey in rawData) {
    if (collectionKey.startsWith('$')) continue;
    walkTokens(rawData[collectionKey]);
  }

  // Step 2: Resolver function
  function resolveValue(varName, mode, visited = new Set()) {
    if (visited.has(varName)) return undefined;
    visited.add(varName);

    const item = lookup[varName];
    if (!item) return varName;

    let val;
    const normMode = mode.toLowerCase();
    for (const m in item.values) {
      if (m.toLowerCase() === normMode) {
        val = item.values[m];
        break;
      }
    }

    if (val === undefined && item.values['Default'] !== undefined) {
      val = item.values['Default'];
    }
    if (val === undefined && item.values['default'] !== undefined) {
      val = item.values['default'];
    }
    if (val === undefined) {
      const available = Object.keys(item.values);
      if (available.length > 0) val = item.values[available[0]];
    }

    if (val === undefined) return undefined;

    // Handle curly brace alias string like "{brand/600}" or "{color/white}"
    if (typeof val === 'string' && val.startsWith('{') && val.endsWith('}')) {
      const aliasTarget = val.slice(1, -1);
      const resolvedAlias = resolveValue(aliasTarget, mode, new Set(visited));
      if (resolvedAlias !== undefined) return resolvedAlias;
    }

    // Object resolution (alias, hex/alpha)
    if (typeof val === 'object' && val !== null) {
      if (val.alias) {
        const resolvedAlias = resolveValue(val.alias, mode, new Set(visited));
        if (resolvedAlias !== undefined) return resolvedAlias;
      }
      if (val.hex !== undefined && val.alpha !== undefined) {
        return hexToRgba(val.hex, val.alpha);
      }
      if (val.hex !== undefined) {
        return val.hex;
      }
    }

    if (typeof val === 'string') {
      return parseColor(val);
    }

    if (typeof val === 'number') {
      if (!varName.includes('grid-columns')) {
        return `${val}px`;
      }
      return String(val);
    }

    return val;
  }

  // Step 3: Extract tokens per Mode
  const lightTokens = {};
  const darkTokens = {};
  const brandModes = {};

  for (const varName in lookup) {
    const pathArray = varName.split('/');

    const lightVal = resolveValue(varName, 'light') ?? resolveValue(varName, 'Default');
    if (lightVal !== undefined) {
      setDeep(lightTokens, pathArray, lightVal);
    }

    const darkVal = resolveValue(varName, 'dark');
    if (darkVal !== undefined) {
      setDeep(darkTokens, pathArray, darkVal);
    }

    const modes = Object.keys(lookup[varName].values);
    for (const m of modes) {
      const normM = m.toLowerCase();
      if (normM !== 'light' && normM !== 'dark' && normM !== 'default') {
        if (!brandModes[m]) brandModes[m] = {};
        const modeVal = resolveValue(varName, m);
        if (modeVal !== undefined) {
          setDeep(brandModes[m], pathArray, modeVal);
        }
      }
    }
  }

  // Step 4: Build W3C DTCG formatted json for Style Dictionary
  function convertToDtcg(obj) {
    const dtcg = {};
    for (const key in obj) {
      if (typeof obj[key] === 'object' && !('value' in obj[key]) && !('$value' in obj[key])) {
        dtcg[key] = convertToDtcg(obj[key]);
      } else {
        dtcg[key] = { $value: obj[key] };
      }
    }
    return dtcg;
  }

  const dtcgTokens = convertToDtcg(lightTokens);

  const distJsonDir = path.join(__dirname, 'dist/json');
  if (!fs.existsSync(distJsonDir)) fs.mkdirSync(distJsonDir, { recursive: true });
  fs.writeFileSync(path.join(distJsonDir, 'tokens.json'), JSON.stringify(lightTokens, null, 2));

  const sd = new StyleDictionary({
    tokens: dtcgTokens,
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: 'dist/css/',
        files: [
          {
            destination: 'variables.css',
            format: 'css/variables'
          }
        ]
      },
      js: {
        transformGroup: 'js',
        buildPath: 'dist/js/',
        files: [
          {
            destination: 'index.js',
            format: 'javascript/es6'
          },
          {
            destination: 'index.cjs',
            format: 'javascript/module-flat'
          }
        ]
      }
    }
  });

  await sd.buildAllPlatforms();

  // Step 5: Enhance CSS with Dark mode and Brand mode selectors
  const baseCssPath = path.join(__dirname, 'dist/css/variables.css');
  let baseCss = fs.readFileSync(baseCssPath, 'utf8');

  function objToCssVars(obj, prefix = '') {
    let lines = [];
    for (const k in obj) {
      const varName = prefix ? `${prefix}-${k}` : k;
      if (typeof obj[k] === 'object') {
        lines = lines.concat(objToCssVars(obj[k], varName));
      } else {
        lines.push(`  --${varName}: ${obj[k]};`);
      }
    }
    return lines;
  }

  const darkCssLines = objToCssVars(darkTokens);
  if (darkCssLines.length > 0) {
    baseCss += `\n/* Dark Mode Theme */\n[data-theme="dark"] {\n${darkCssLines.join('\n')}\n}\n`;
  }

  for (const bName in brandModes) {
    const brandCssLines = objToCssVars(brandModes[bName]);
    if (brandCssLines.length > 0) {
      baseCss += `\n/* Brand Mode: ${bName} */\n[data-brand="${toKebab(bName)}"] {\n${brandCssLines.join('\n')}\n}\n`;
    }
  }

  fs.writeFileSync(baseCssPath, baseCss);

  // Step 6: Generate TypeScript d.ts definition file
  function generateTsTypes(obj, indent = 2) {
    const spaces = ' '.repeat(indent);
    let code = '{\n';
    for (const k in obj) {
      if (typeof obj[k] === 'object') {
        code += `${spaces}"${k}": ${generateTsTypes(obj[k], indent + 2)};\n`;
      } else {
        code += `${spaces}"${k}": string;\n`;
      }
    }
    code += `${' '.repeat(indent - 2)}}`;
    return code;
  }

  const dTsContent = `/**
 * Auto-generated TypeScript definitions for Vektr Design Tokens
 */

export declare const tokens: ${generateTsTypes(lightTokens, 2)};
export declare const darkTokens: ${generateTsTypes(darkTokens, 2)};

export default tokens;
`;
  fs.writeFileSync(path.join(__dirname, 'dist/js/index.d.ts'), dTsContent);

  // Step 7: Generate Tailwind CSS Preset
  const tailwindPresetContent = `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: ${JSON.stringify({ ...(lightTokens.color || {}), ...(lightTokens.brand || {}), ...(lightTokens.neutral || {}) }, null, 2)},
      surface: ${JSON.stringify(lightTokens.surface || {}, null, 2)},
      textColor: ${JSON.stringify(lightTokens.text || {}, null, 2)},
      borderColor: ${JSON.stringify(lightTokens.border || {}, null, 2)},
      spacing: ${JSON.stringify(lightTokens.space || {}, null, 2)},
      borderRadius: ${JSON.stringify(lightTokens.radius || {}, null, 2)},
      fontSize: ${JSON.stringify({ ...(lightTokens.display || {}), ...(lightTokens.header || {}), ...(lightTokens.paragraph || {}), ...(lightTokens.body || {}) }, null, 2)}
    }
  }
};
`;

  const tailwindDir = path.join(__dirname, 'dist/tailwind');
  if (!fs.existsSync(tailwindDir)) fs.mkdirSync(tailwindDir, { recursive: true });
  fs.writeFileSync(path.join(tailwindDir, 'preset.js'), tailwindPresetContent);

  console.log('🎉 Successfully compiled Tokens Studio W3C DTCG tokens across Light, Dark & Brand modes!');
}

runBuild().catch(err => {
  console.error('❌ Build failed:', err);
  process.exit(1);
});
