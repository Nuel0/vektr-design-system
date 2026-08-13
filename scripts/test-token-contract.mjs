import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const cssPath = path.join(rootDir, 'dist/styles.css');
if (!fs.existsSync(cssPath)) {
  console.error('❌ Error: dist/styles.css does not exist. Run build first.');
  process.exit(1);
}

const cssContent = fs.readFileSync(cssPath, 'utf8');
const definedVars = new Set();
const cssVarRegex = /--[a-zA-Z0-9_-]+/g;
let match;
while ((match = cssVarRegex.exec(cssContent)) !== null) {
  definedVars.add(match[0]);
}

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(filePath));
    } else if (/\.(tsx?|jsx?|css)$/.test(file)) {
      results.push(filePath);
    }
  });
  return results;
}

const srcFiles = getFiles(path.join(rootDir, 'src'));
const varUsageRegex = /var\(\s*(--[a-zA-Z0-9_-]+)/g;
const missing = new Map();
const primitiveLeaks = new Map();
const primitiveRegex = /^--(brand|color|neutral)-/;

srcFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let m;
  const regex = /var\(\s*(--[a-zA-Z0-9_-]+)/g;
  while ((m = regex.exec(content)) !== null) {
    const varName = m[1];
    const relativePath = path.relative(rootDir, file);

    // 1. Check if variable is defined in dist/styles.css
    if (!definedVars.has(varName)) {
      if (!missing.has(varName)) missing.set(varName, []);
      if (!missing.get(varName).includes(relativePath)) {
        missing.get(varName).push(relativePath);
      }
    }

    // 2. Check strict Tier 3 consumption (no primitive --brand-*, --color-*, --neutral-* references in components)
    if (relativePath.includes('components') && primitiveRegex.test(varName)) {
      if (!primitiveLeaks.has(varName)) primitiveLeaks.set(varName, []);
      if (!primitiveLeaks.get(varName).includes(relativePath)) {
        primitiveLeaks.get(varName).push(relativePath);
      }
    }
  }
});

let failed = false;

if (missing.size > 0) {
  console.error('❌ Token contract violation! The following CSS variables used in src/ are missing from dist/styles.css:');
  missing.forEach((files, varName) => {
    console.error(`  - ${varName} (used in: ${files.join(', ')})`);
  });
  failed = true;
}

if (primitiveLeaks.size > 0) {
  console.error('❌ Strict Tier 3 Architecture Violation! Components must never consume Tier 1 primitives directly:');
  primitiveLeaks.forEach((files, varName) => {
    console.error(`  - Primitive '${varName}' directly consumed in: ${files.join(', ')}`);
  });
  failed = true;
}

const inlineStyleViolations = [];
srcFiles.forEach(file => {
  const relativePath = path.relative(rootDir, file);
  if (relativePath.includes('components') && !relativePath.includes('__tests__')) {
    const content = fs.readFileSync(file, 'utf8');
    if (/style\s*=\s*\{/.test(content)) {
      inlineStyleViolations.push(relativePath);
    }
  }
});

if (inlineStyleViolations.length > 0) {
  console.error('❌ Inline Style Architecture Violation! Components must never use inline style={{...}} props:');
  inlineStyleViolations.forEach(file => {
    console.error(`  - ${file}`);
  });
  failed = true;
}

if (failed) {
  process.exit(1);
}

console.log('✅ Token contract test passed: All CSS variables exist in dist/styles.css, zero inline styles used, and no components consume Tier 1 primitives directly!');
