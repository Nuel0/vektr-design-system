const StyleDictionary = require('style-dictionary');
const fs = require('fs');
const path = require('path');

async function build() {
  const sd = new StyleDictionary({
    source: ['tokens.json'],
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
          },
          {
            destination: 'index.d.ts',
            format: 'typescript/es6-declarations'
          }
        ]
      },
      json: {
        buildPath: 'dist/json/',
        files: [
          {
            destination: 'tokens.json',
            format: 'json/nested'
          }
        ]
      }
    }
  });

  await sd.buildAllPlatforms();

  // Generate Tailwind Preset dynamically from tokens
  const tokensPath = path.join(__dirname, 'dist/json/tokens.json');
  if (fs.existsSync(tokensPath)) {
    const rawTokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));

    function extractValues(obj) {
      const res = {};
      for (const key in obj) {
        if (obj[key] && typeof obj[key] === 'object') {
          if ('value' in obj[key]) {
            res[key] = obj[key].value;
          } else {
            res[key] = extractValues(obj[key]);
          }
        }
      }
      return res;
    }

    const themeColors = rawTokens.color ? extractValues(rawTokens.color) : {};
    const themeSpacing = rawTokens.spacing ? extractValues(rawTokens.spacing) : {};

    const tailwindPresetContent = `/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: ${JSON.stringify(themeColors, null, 2)},
      spacing: ${JSON.stringify(themeSpacing, null, 2)}
    }
  }
};
`;

    const tailwindDir = path.join(__dirname, 'dist/tailwind');
    if (!fs.existsSync(tailwindDir)) {
      fs.mkdirSync(tailwindDir, { recursive: true });
    }
    fs.writeFileSync(path.join(tailwindDir, 'preset.js'), tailwindPresetContent);
  }

  console.log('✅ Tokens successfully built into dist/');
}

build().catch(err => {
  console.error('❌ Build failed:', err);
  process.exit(1);
});
