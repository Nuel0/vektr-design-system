import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const srcComponentsDir = path.join(rootDir, 'src/components');
const distRegistryDir = path.join(rootDir, 'dist/r');

if (!fs.existsSync(distRegistryDir)) {
  fs.mkdirSync(distRegistryDir, { recursive: true });
}

// Known radix & package dependencies map
const knownDeps = {
  '@radix-ui/react-slot': ['Button', 'Badge', 'Card'],
  '@radix-ui/react-dialog': ['Dialog', 'Drawer'],
  '@radix-ui/react-select': ['Select'],
  '@radix-ui/react-popover': ['Popover'],
  '@radix-ui/react-tooltip': ['Tooltip'],
  '@radix-ui/react-dropdown-menu': ['Dropdown'],
  '@radix-ui/react-tabs': ['Tabs'],
  '@radix-ui/react-accordion': ['Accordion'],
  '@radix-ui/react-checkbox': ['Checkbox'],
  '@radix-ui/react-radio-group': ['Radio'],
  '@radix-ui/react-switch': ['Switch'],
  '@radix-ui/react-avatar': ['Avatar'],
  '@radix-ui/react-separator': ['Separator'],
  'clsx': ['*'],
};

const componentFiles = fs
  .readdirSync(srcComponentsDir)
  .filter(file => file.endsWith('.tsx') && !file.includes('VektrProvider'));

const registryItems = [];

componentFiles.forEach(file => {
  const componentName = path.basename(file, '.tsx');
  const itemName = componentName.toLowerCase();
  const filePath = path.join(srcComponentsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Detect dependencies from import statements
  const dependencies = new Set();
  Object.entries(knownDeps).forEach(([pkg, targets]) => {
    if (targets.includes('*') || targets.includes(componentName) || content.includes(pkg)) {
      dependencies.add(pkg);
    }
  });

  const registryItem = {
    $schema: 'https://shadcn.com/schema/registry-item.json',
    name: itemName,
    type: 'registry:ui',
    title: componentName,
    description: `Vektr ${componentName} component owned locally, powered by vektr-design-system tokens.`,
    dependencies: Array.from(dependencies),
    registryDependencies: [],
    files: [
      {
        path: `components/ui/${itemName}.tsx`,
        content: content,
        type: 'registry:ui',
        target: `components/ui/${itemName}.tsx`,
      },
    ],
    cssVars: {
      light: {
        '--surface-base': 'var(--neutral-50)',
        '--action-primary': 'var(--brand-600)',
      },
      dark: {
        '--surface-base': 'var(--neutral-900)',
        '--action-primary': 'var(--brand-300)',
      },
    },
  };

  const itemOutputPath = path.join(distRegistryDir, `${itemName}.json`);
  fs.writeFileSync(itemOutputPath, JSON.stringify(registryItem, null, 2));

  registryItems.push({
    name: itemName,
    type: 'registry:ui',
    title: componentName,
    description: registryItem.description,
    dependencies: registryItem.dependencies,
    files: [`components/ui/${itemName}.tsx`],
  });
});

// Build main index registry.json
const registryIndex = {
  $schema: 'https://shadcn.com/schema/registry.json',
  name: 'vektr-design-system',
  homepage: 'https://github.com/Nuel0/vektr-design-system',
  items: registryItems,
};

fs.writeFileSync(path.join(distRegistryDir, 'registry.json'), JSON.stringify(registryIndex, null, 2));

console.log(`🎉 Successfully built ${registryItems.length} shadcn registry JSON items in dist/r/!`);
