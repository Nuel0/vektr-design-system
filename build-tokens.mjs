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
    .replace(/_/g, '-')
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
      if (typeof val === 'object' && val !== null && !Array.isArray(val) && !('hex' in val) && !('alias' in val) && !('type' in val)) {
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
    const collection = rawData[collectionKey];
    if (typeof collection === 'object' && collection !== null && collection.variables && typeof collection.variables === 'object') {
      for (const varName in collection.variables) {
        const item = collection.variables[varName];
        if (!lookup[varName]) {
          lookup[varName] = { values: {} };
        }
        if (item && item.values && typeof item.values === 'object') {
          for (const m in item.values) {
            lookup[varName].values[m] = item.values[m];
          }
        }
      }
    } else {
      walkTokens(collection);
    }
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
    if (val === undefined && item.values['Light'] !== undefined) {
      val = item.values['Light'];
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

    // Object resolution (alias, hex/alpha/opacity)
    if (typeof val === 'object' && val !== null) {
      if (val.type === 'ALIAS' && val.value) {
        const resolvedAlias = resolveValue(val.value, mode, new Set(visited));
        if (resolvedAlias !== undefined) return resolvedAlias;
      }
      if (val.alias) {
        const resolvedAlias = resolveValue(val.alias, mode, new Set(visited));
        if (resolvedAlias !== undefined) return resolvedAlias;
      }
      if (typeof val.value === 'string' && lookup[val.value]) {
        const resolvedAlias = resolveValue(val.value, mode, new Set(visited));
        if (resolvedAlias !== undefined) return resolvedAlias;
      }
      const alphaVal = val.opacity !== undefined ? val.opacity : val.alpha;
      if (val.hex !== undefined && alphaVal !== undefined) {
        return hexToRgba(val.hex, alphaVal);
      }
      if (val.hex !== undefined) {
        return val.hex;
      }
    }

    if (typeof val === 'string') {
      if (lookup[val]) {
        const resolvedAlias = resolveValue(val, mode, new Set(visited));
        if (resolvedAlias !== undefined) return resolvedAlias;
      }
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

  // Process typography.json if present
  const typographyPath = path.join(__dirname, 'typography.json');
  let typographyData = null;
  if (fs.existsSync(typographyPath)) {
    typographyData = JSON.parse(fs.readFileSync(typographyPath, 'utf8'));
    fs.writeFileSync(path.join(distJsonDir, 'typography.json'), JSON.stringify(typographyData, null, 2));
  }

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
      }
    }
  });

  await sd.buildAllPlatforms();

  // Step 5: Enhance CSS with 3-Tier Architecture (Primitive, Semantic, Component), Dark mode, Brand modes, and Utilities
  const baseCssPath = path.join(__dirname, 'dist/css/variables.css');

  // Define Brand Primitive Palettes (Tier 1 overrides)
  const brandPaletteCss = `
/* Brand Mode: Fintech */
[data-brand="fintech"] {
  --brand-50: #EFF6FF;
  --brand-100: #DBEAFE;
  --brand-200: #BFDBFE;
  --brand-300: #93C5FD;
  --brand-400: #60A5FA;
  --brand-500: #3B82F6;
  --brand-600: #2563EB;
  --brand-700: #1D4ED8;
  --brand-800: #1E40AF;
  --brand-900: #1E3A5F;
  --neutral-50: #F8FAFC;
  --neutral-100: #F1F5F9;
  --neutral-200: #E2E8F0;
  --neutral-300: #CBD5E1;
  --neutral-400: #94A3B8;
  --neutral-500: #64748B;
  --neutral-600: #475569;
  --neutral-700: #334155;
  --neutral-800: #1E293B;
  --neutral-900: #0F172A;
  --font-heading: Space Grotesk;
  --font-body: IBM Plex Sans;
  --radius-brand: 4px;
  --spacing-brand-padding: 10px;
  --spacing-brand-gap: 6px;
  --spacing-brand-cta-padding: 28px;
  --border-brand-width: 1px;
  --shadow-brand-blur: 4px;
  --shadow-brand-y: 2px;
}

/* Brand Mode: Health-tech */
[data-brand="health-tech"] {
  --brand-50: #F0FDFA;
  --brand-100: #CCFBF1;
  --brand-200: #99F6E4;
  --brand-300: #5EEAD4;
  --brand-400: #2DD4BF;
  --brand-500: #14B8A6;
  --brand-600: #0D9488;
  --brand-700: #0F766E;
  --brand-800: #115E59;
  --brand-900: #134E4A;
  --neutral-50: #F0FDFA;
  --neutral-100: #ECFDF5;
  --neutral-200: #D1FAE5;
  --neutral-300: #A7F3D0;
  --neutral-400: #6EE7B7;
  --neutral-500: #34D399;
  --neutral-600: #10B981;
  --neutral-700: #047857;
  --neutral-800: #065F46;
  --neutral-900: #064E3B;
  --font-heading: DM Sans;
  --font-body: DM Sans;
  --radius-brand: 16px;
  --spacing-brand-padding: 14px;
  --spacing-brand-gap: 10px;
  --spacing-brand-cta-padding: 28px;
  --border-brand-width: 1.5px;
  --shadow-brand-blur: 12px;
  --shadow-brand-y: 6px;
}

/* Brand Mode: Hospitality */
[data-brand="hospitality"] {
  --brand-50: #FFF7ED;
  --brand-100: #FFEDD5;
  --brand-200: #FED7AA;
  --brand-300: #FDBA74;
  --brand-400: #FB923C;
  --brand-500: #F97316;
  --brand-600: #EA580C;
  --brand-700: #C2410C;
  --brand-800: #9A3412;
  --brand-900: #7C2D12;
  --neutral-50: #FAFAF9;
  --neutral-100: #F5F5F4;
  --neutral-200: #E7E5E4;
  --neutral-300: #D6D3D1;
  --neutral-400: #A8A29E;
  --neutral-500: #78716C;
  --neutral-600: #57534E;
  --neutral-700: #44403C;
  --neutral-800: #292524;
  --neutral-900: #1C1917;
  --font-heading: Playfair Display;
  --font-body: Lora;
  --radius-brand: 10px;
  --spacing-brand-padding: 12px;
  --spacing-brand-gap: 8px;
  --spacing-brand-cta-padding: 28px;
  --border-brand-width: 1px;
  --shadow-brand-blur: 10px;
  --shadow-brand-y: 4px;
}

/* Brand Mode: Edtech */
[data-brand="edtech"] {
  --brand-50: #FAF5FF;
  --brand-100: #EDE9FE;
  --brand-200: #DDD6FE;
  --brand-300: #C4B5FD;
  --brand-400: #A78BFA;
  --brand-500: #8B5CF6;
  --brand-600: #7C3AED;
  --brand-700: #6D28D9;
  --brand-800: #5B21B6;
  --brand-900: #4C1D95;
  --neutral-50: #FAF5FF;
  --neutral-100: #F3E8FF;
  --neutral-200: #E9D5FF;
  --neutral-300: #D8B4FE;
  --neutral-400: #C084FC;
  --neutral-500: #A855F7;
  --neutral-600: #9333EA;
  --neutral-700: #7E22CE;
  --neutral-800: #6B21A8;
  --neutral-900: #581C87;
  --font-heading: Nunito;
  --font-body: Nunito;
  --radius-brand: 24px;
  --spacing-brand-padding: 16px;
  --spacing-brand-gap: 10px;
  --spacing-brand-cta-padding: 28px;
  --border-brand-width: 2px;
  --shadow-brand-blur: 16px;
  --shadow-brand-y: 8px;
}
`;

  // Tier 1 & Tier 2 Light Theme custom properties (at :root and [data-theme="light"])
  const rootCss = `:root, [data-theme="light"] {
  color-scheme: light;

  /* Tier 1 Primitive Defaults */
  --color-gray-50: #F9FAFB;
  --color-gray-100: #F3F4F6;
  --color-gray-200: #E5E7EB;
  --color-gray-300: #D1D5DB;
  --color-gray-400: #9CA3AF;
  --color-gray-500: #6B7280;
  --color-gray-600: #4B5563;
  --color-gray-700: #374151;
  --color-gray-800: #1F2937;
  --color-gray-900: #111827;
  --color-slate-100: #F1F5F9;
  --color-slate-200: #E2E8F0;
  --color-slate-300: #CBD5E1;
  --color-slate-400: #94A3B8;
  --color-slate-500: #64748B;
  --color-slate-600: #475569;
  --color-slate-700: #334155;
  --color-slate-800: #1E293B;
  --color-slate-900: #0F172A;
  --color-slate-950: #020617;
  --color-green-100: #DCFCE7;
  --color-green-300: #86EFAC;
  --color-green-500: #22C55E;
  --color-green-600: #16A34A;
  --color-green-800: #166534;
  --color-green-950: #052E16;
  --color-red-100: #FEE2E2;
  --color-red-300: #FCA5A5;
  --color-red-400: #EF4444;
  --color-red-600: #DC2626;
  --color-red-700: #B91C1C;
  --color-red-800: #991B1B;
  --color-red-950: #450A0A;
  --color-amber-100: #FEF3C7;
  --color-amber-300: #FCD34D;
  --color-amber-500: #F59E0B;
  --color-amber-600: #D97706;
  --color-amber-800: #92400E;
  --color-amber-950: #451A03;
  --color-blue-100: #DBEAFE;
  --color-blue-300: #93C5FD;
  --color-blue-500: #3B82F6;
  --color-blue-600: #2563EB;
  --color-blue-800: #1E40AF;
  --color-blue-950: #172554;
  --color-white: #FFFFFF;
  --color-black: #000000;

  --brand-50: #EEF2FF;
  --brand-100: #E0E7FF;
  --brand-200: #C7D2FE;
  --brand-300: #A5B4FC;
  --brand-400: #818CF8;
  --brand-500: #6366F1;
  --brand-600: #4F46E5;
  --brand-700: #4338CA;
  --brand-800: #3730A3;
  --brand-900: #312E81;
  --neutral-50: #F8FAFC;
  --neutral-100: #F1F5F9;
  --neutral-200: #E2E8F0;
  --neutral-300: #CBD5E1;
  --neutral-400: #94A3B8;
  --neutral-500: #64748B;
  --neutral-600: #475569;
  --neutral-700: #334155;
  --neutral-800: #1E293B;
  --neutral-900: #0F172A;

  --font-heading: Inter;
  --font-body: Inter;
  --spacing-brand-padding: 12px;
  --spacing-brand-gap: 8px;
  --spacing-brand-cta-padding: 28px;
  --radius-none: 0px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 40px;
  --radius-xxl: 48px;
  --radius-full: 9999px;
  --radius-brand: 8px;
  --border-width-thin: 1px;
  --border-width-default: 1.5px;
  --border-width-thick: 2px;
  --border-width-accent: 3px;
  --border-brand-width: 1px;
  --shadow-color-sm: rgba(0, 0, 0, 0.05);
  --shadow-color-md: rgba(0, 0, 0, 0.1);
  --shadow-color-lg: rgba(0, 0, 0, 0.1);
  --shadow-brand-blur: 8px;
  --shadow-brand-y: 4px;
  --icon-subtle: var(--neutral-300);
  --icon-sm: 16px;
  --icon-md: 20px;
  --icon-lg: 24px;
  --icon-xl: 32px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  --display-lg: 48px;
  --display-xl: 56px;
  --display-2xl: 64px;
  --header-xs: 20px;
  --header-sm: 24px;
  --header-md: 28px;
  --header-lg: 32px;
  --header-xl: 40px;
  --paragraph-sm: 14px;
  --paragraph-base: 16px;
  --paragraph-lg: 18px;
  --body-sm: 12px;
  --body-base: 14px;
  --body-lg: 16px;
  --caption-sm: 11px;
  --caption-base: 12px;
  --footer-sm: 11px;
  --footer-base: 13px;
  --label-base: 12px;

  /* Tier 2 Semantic Custom Properties (Light Mode Aliases) */
  --surface-base: var(--neutral-50);
  --surface-raised: var(--neutral-100);
  --surface-sunken: var(--neutral-200);
  --surface-overlay: rgba(0, 0, 0, 0.5);
  --surface-inverse: var(--neutral-900);
  --surface-subtle: var(--neutral-100);

  --text-primary: var(--neutral-900);
  --text-secondary: var(--neutral-600);
  --text-muted: var(--neutral-400);
  --text-inverse: var(--neutral-50);
  --text-disabled: var(--neutral-300);

  --action-primary: var(--brand-600);
  --action-primary-hover: var(--brand-700);
  --action-primary-active: var(--brand-800);
  --action-danger: var(--color-red-600);
  --action-danger-hover: var(--color-red-700);
  --action-danger-active: var(--color-red-800);

  --border-default: var(--neutral-200);
  --border-strong: var(--neutral-300);
  --border-focus: var(--brand-600);

  --status-success: var(--color-green-600);
  --status-success-bg: var(--color-green-100);
  --status-success-text: var(--color-green-800);
  --status-warning: var(--color-amber-600);
  --status-warning-bg: var(--color-amber-100);
  --status-warning-text: var(--color-amber-800);
  --status-danger: var(--color-red-600);
  --status-danger-bg: var(--color-red-100);
  --status-danger-text: var(--color-red-800);
  --status-info: var(--color-blue-600);
  --status-info-bg: var(--color-blue-100);
  --status-info-text: var(--color-blue-800);

  /* Tier 3 Component Custom Properties */
  --button-primary-bg: var(--action-primary);
  --button-primary-fg: var(--text-inverse);
  --button-primary-border: var(--action-primary);
  --button-primary-hover-bg: var(--action-primary-hover);
  --button-primary-active-bg: var(--action-primary-active);

  --button-secondary-bg: var(--surface-raised);
  --button-secondary-fg: var(--text-primary);
  --button-secondary-border: var(--border-default);
  --button-secondary-hover-bg: var(--surface-sunken);

  --button-danger-bg: var(--action-danger);
  --button-danger-fg: #ffffff;
  --button-danger-border: var(--action-danger);
  --button-danger-hover-bg: var(--action-danger-hover);
  --button-danger-active-bg: var(--action-danger-active);

  --button-ghost-bg: transparent;
  --button-ghost-fg: var(--text-primary);
  --button-ghost-hover-bg: var(--surface-subtle);

  --button-outline-bg: transparent;
  --button-outline-fg: var(--action-primary);
  --button-outline-border: var(--action-primary);

  --badge-success-bg: var(--status-success-bg);
  --badge-success-text: var(--status-success-text);
  --badge-success-border: var(--status-success);

  --badge-warning-bg: var(--status-warning-bg);
  --badge-warning-text: var(--status-warning-text);
  --badge-warning-border: var(--status-warning);

  --badge-danger-bg: var(--status-danger-bg);
  --badge-danger-text: var(--status-danger-text);
  --badge-danger-border: var(--status-danger);

  --badge-info-bg: var(--status-info-bg);
  --badge-info-text: var(--status-info-text);
  --badge-info-border: var(--status-info);

  --badge-neutral-bg: var(--surface-subtle);
  --badge-neutral-text: var(--text-secondary);
  --badge-neutral-border: var(--border-default);

  --input-bg: var(--surface-base);
  --input-bg-disabled: var(--surface-subtle);
  --input-border: var(--border-default);
  --input-border-focus: var(--border-focus);
  --input-border-error: var(--status-danger);
  --input-text: var(--text-primary);
  --input-label-text: var(--text-primary);
  --input-helper-text: var(--text-muted);
  --input-error-text: var(--status-danger-text);

  --card-bg: var(--surface-base);
  --card-bg-raised: var(--surface-raised);
  --card-bg-sunken: var(--surface-sunken);
  --card-bg-inverse: var(--surface-inverse);
  --card-border: var(--border-default);
  --card-text: var(--text-primary);
  --card-text-inverse: var(--text-inverse);

  --nav-bg: var(--surface-base);
  --nav-text: var(--text-secondary);
  --nav-text-active: var(--action-primary);

  --table-header-bg: var(--surface-sunken);
  --table-border: var(--border-default);

  --modal-bg: var(--surface-raised);
  --modal-overlay: var(--surface-overlay);
}
`;

  // Tier 2 Dark Theme custom properties
  const darkCss = `
/* Dark Mode Theme */
[data-theme="dark"] {
  color-scheme: dark;

  /* Tier 2 Semantic Custom Properties (Dark Mode Overrides) */
  --surface-base: var(--neutral-900);
  --surface-raised: var(--neutral-800);
  --surface-sunken: var(--neutral-950, #020617);
  --surface-overlay: rgba(0, 0, 0, 0.6);
  --surface-inverse: var(--neutral-50);
  --surface-subtle: var(--neutral-900);

  --text-primary: var(--neutral-100);
  --text-secondary: var(--neutral-300);
  --text-muted: var(--neutral-500);
  --text-inverse: var(--neutral-900);
  --text-disabled: var(--neutral-600);

  --action-primary: var(--brand-300);
  --action-primary-hover: var(--brand-200);
  --action-primary-active: var(--brand-100);
  --action-danger: var(--color-red-400);
  --action-danger-hover: var(--color-red-300);
  --action-danger-active: var(--color-red-200);

  --border-default: var(--neutral-700);
  --border-strong: var(--neutral-600);
  --border-focus: var(--brand-300);

  --status-success: var(--color-green-500);
  --status-success-bg: var(--color-green-950);
  --status-success-text: var(--color-green-300);
  --status-warning: var(--color-amber-500);
  --status-warning-bg: var(--color-amber-950);
  --status-warning-text: var(--color-amber-300);
  --status-danger: var(--color-red-400);
  --status-danger-bg: var(--color-red-950);
  --status-danger-text: var(--color-red-300);
  --status-info: var(--color-blue-500);
  --status-info-bg: var(--color-blue-950);
  --status-info-text: var(--color-blue-300);

  --shadow-color-sm: rgba(0, 0, 0, 0.2);
  --shadow-color-md: rgba(0, 0, 0, 0.3);
  --shadow-color-lg: rgba(0, 0, 0, 0.4);
  --icon-subtle: var(--neutral-700);
}
`;

  function getFontWeightNumeric(weightStr) {
    if (typeof weightStr === 'number') return weightStr;
    const lower = String(weightStr).toLowerCase();
    if (lower.includes('bold') && lower.includes('semi')) return 600;
    if (lower.includes('bold')) return 700;
    if (lower.includes('medium')) return 500;
    if (lower.includes('regular') || lower.includes('normal')) return 400;
    if (lower.includes('light')) return 300;
    return 400;
  }

  let utilitiesCss = '';
  if (typographyData && typographyData.typography) {
    utilitiesCss += `/* Typography Utility Classes (35 Text Styles) */\n`;
    const typo = typographyData.typography;
    for (const cat in typo) {
      const catKebab = toKebab(cat);
      const fontVar = (catKebab === 'display' || catKebab === 'header') ? 'var(--font-heading, Inter)' : 'var(--font-body, Inter)';
      for (const variant in typo[cat]) {
        const style = typo[cat][variant];
        const className = `.text-${catKebab}-${variant.toLowerCase()}`;
        const weightNum = getFontWeightNumeric(style.fontWeight);
        utilitiesCss += `${className} {\n  font-family: ${fontVar};\n  font-size: ${style.fontSize}px;\n  font-weight: ${weightNum};\n  line-height: ${style.lineHeight}px;\n  letter-spacing: ${style.letterSpacing}px;\n}\n\n`;
      }
    }
  }

  const combinedTokensCss = rootCss + '\n' + darkCss + '\n' + brandPaletteCss;
  fs.writeFileSync(baseCssPath, combinedTokensCss + '\n' + utilitiesCss);

  // Emit standalone dist/reset.css
  const resetCssContent = `/**
 * Vektr Design System - Standalone Reset Stylesheet
 */
@layer vektr.reset {
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: var(--font-body, system-ui, -apple-system, sans-serif);
    line-height: 1.5;
  }

  body {
    margin: 0;
    background-color: var(--surface-base);
    color: var(--text-primary);
    font-family: var(--font-body, system-ui, -apple-system, sans-serif);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
  }

  a {
    color: var(--action-primary);
  }

  ::selection {
    background-color: var(--action-primary);
    color: var(--text-inverse);
  }

  :focus-visible {
    outline: 2px solid var(--border-focus);
    outline-offset: 2px;
  }

  button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: inherit;
    color: inherit;
    margin: 0;
  }
}
`;
  fs.writeFileSync(path.join(__dirname, 'dist/reset.css'), resetCssContent);

  // Emit Tailwind v4 dist/css/theme.css with @theme block
  const tailwindV4Css = `/**
 * Vektr Design System - Tailwind CSS v4 Theme Extension
 */
@theme {
  --color-brand-50: #EEF2FF;
  --color-brand-100: #E0E7FF;
  --color-brand-200: #C7D2FE;
  --color-brand-300: #A5B4FC;
  --color-brand-400: #818CF8;
  --color-brand-500: #6366F1;
  --color-brand-600: #4F46E5;
  --color-brand-700: #4338CA;
  --color-brand-800: #3730A3;
  --color-brand-900: #312E81;
  --color-neutral-50: #F8FAFC;
  --color-neutral-100: #F1F5F9;
  --color-neutral-200: #E2E8F0;
  --color-neutral-300: #CBD5E1;
  --color-neutral-400: #94A3B8;
  --color-neutral-500: #64748B;
  --color-neutral-600: #475569;
  --color-neutral-700: #334155;
  --color-neutral-800: #1E293B;
  --color-neutral-900: #0F172A;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-brand: 8px;
}
`;
  fs.writeFileSync(path.join(__dirname, 'dist/css/theme.css'), tailwindV4Css);

  // Emit dist/styles.css structured with CSS Cascade Layers (@layer)
  const stylesCssPath = path.join(__dirname, 'dist/styles.css');
  const unifiedStyles = `/**
 * Vektr Design System - Unified Entry Stylesheet
 * Auto-generated with Cascade Layers & 3-Tier Architecture
 */
@layer vektr.reset, vektr.tokens, vektr.components, vektr.utilities;

@layer vektr.reset {
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: var(--font-body, system-ui, -apple-system, sans-serif);
    line-height: 1.5;
  }

  body {
    background-color: var(--surface-base);
    color: var(--text-primary);
    font-family: var(--font-body, system-ui, -apple-system, sans-serif);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: inherit;
    color: inherit;
    margin: 0;
  }
}

@layer vektr.tokens {
${combinedTokensCss}
}

@layer vektr.components {
  /* Button Component Styles */
  .vektr-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-brand-gap, 8px);
    border-radius: var(--radius-brand, 8px);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border: var(--border-brand-width, 1px) solid transparent;
    outline: none;
    font-family: var(--font-body, inherit);
  }

  .vektr-button:disabled,
  .vektr-button[data-disabled="true"] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .vektr-button:focus-visible {
    outline: 2px solid var(--border-focus);
    outline-offset: 2px;
  }

  .vektr-button[data-variant="primary"],
  .vektr-button-primary {
    background-color: var(--button-primary-bg);
    color: var(--button-primary-fg);
    border-color: var(--button-primary-border);
  }
  .vektr-button[data-variant="primary"]:hover:not(:disabled):not([data-disabled="true"]) {
    background-color: var(--button-primary-hover-bg);
    border-color: var(--button-primary-hover-bg);
  }
  .vektr-button[data-variant="primary"]:active:not(:disabled):not([data-disabled="true"]) {
    background-color: var(--button-primary-active-bg);
  }

  .vektr-button[data-variant="secondary"],
  .vektr-button-secondary {
    background-color: var(--button-secondary-bg);
    color: var(--button-secondary-fg);
    border-color: var(--button-secondary-border);
  }
  .vektr-button[data-variant="secondary"]:hover:not(:disabled):not([data-disabled="true"]) {
    background-color: var(--button-secondary-hover-bg);
  }

  .vektr-button[data-variant="danger"],
  .vektr-button-danger {
    background-color: var(--button-danger-bg);
    color: var(--button-danger-fg);
    border-color: var(--button-danger-border);
  }
  .vektr-button[data-variant="danger"]:hover:not(:disabled):not([data-disabled="true"]) {
    background-color: var(--button-danger-hover-bg);
    border-color: var(--button-danger-hover-bg);
  }
  .vektr-button[data-variant="danger"]:active:not(:disabled):not([data-disabled="true"]) {
    background-color: var(--button-danger-active-bg);
  }

  .vektr-button[data-variant="ghost"],
  .vektr-button-ghost {
    background-color: var(--button-ghost-bg);
    color: var(--button-ghost-fg);
  }
  .vektr-button[data-variant="ghost"]:hover:not(:disabled):not([data-disabled="true"]) {
    background-color: var(--button-ghost-hover-bg);
  }

  .vektr-button[data-variant="outline"],
  .vektr-button-outline {
    background-color: var(--button-outline-bg);
    color: var(--button-outline-fg);
    border-color: var(--button-outline-border);
  }
  .vektr-button[data-variant="outline"]:hover:not(:disabled):not([data-disabled="true"]) {
    background-color: var(--brand-50, rgba(79, 70, 229, 0.05));
  }

  .vektr-button[data-size="sm"],
  .vektr-button-sm {
    padding: var(--space-1, 4px) var(--space-3, 12px);
    font-size: var(--body-sm, 12px);
  }
  .vektr-button[data-size="md"],
  .vektr-button-md {
    padding: var(--spacing-brand-padding, 12px) var(--space-4, 16px);
    font-size: var(--body-base, 14px);
  }
  .vektr-button[data-size="lg"],
  .vektr-button-lg {
    padding: var(--space-4, 16px) var(--space-6, 24px);
    font-size: var(--body-lg, 16px);
  }

  /* Badge Component Styles */
  .vektr-badge {
    display: inline-flex;
    align-items: center;
    padding: var(--space-1, 4px) var(--space-3, 12px);
    border-radius: var(--radius-full, 9999px);
    font-size: var(--caption-base, 12px);
    font-weight: 600;
    line-height: 1;
  }
  .vektr-badge[data-variant="success"],
  .vektr-badge-success {
    background-color: var(--badge-success-bg);
    color: var(--badge-success-text);
    border: 1px solid var(--badge-success-border);
  }
  .vektr-badge[data-variant="warning"],
  .vektr-badge-warning {
    background-color: var(--badge-warning-bg);
    color: var(--badge-warning-text);
    border: 1px solid var(--badge-warning-border);
  }
  .vektr-badge[data-variant="danger"],
  .vektr-badge-danger {
    background-color: var(--badge-danger-bg);
    color: var(--badge-danger-text);
    border: 1px solid var(--badge-danger-border);
  }
  .vektr-badge[data-variant="info"],
  .vektr-badge-info {
    background-color: var(--badge-info-bg);
    color: var(--badge-info-text);
    border: 1px solid var(--badge-info-border);
  }
  .vektr-badge[data-variant="neutral"],
  .vektr-badge-neutral {
    background-color: var(--badge-neutral-bg);
    color: var(--badge-neutral-text);
    border: 1px solid var(--badge-neutral-border);
  }

  /* Input & Textarea Component Styles */
  .vektr-input-wrapper,
  .vektr-textarea-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--space-1, 4px);
    width: 100%;
    font-family: var(--font-body, inherit);
  }
  .vektr-input-label,
  .vektr-textarea-label,
  .vektr-label {
    font-size: var(--label-base, 12px);
    font-weight: 600;
    color: var(--input-label-text);
  }
  .vektr-input,
  .vektr-textarea {
    padding: var(--spacing-brand-padding, 12px);
    border-radius: var(--radius-brand, 8px);
    border: var(--border-width-default, 1.5px) solid var(--input-border);
    background-color: var(--input-bg);
    color: var(--input-text);
    font-size: var(--body-base, 14px);
    outline: none;
    transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }
  .vektr-input:focus-visible,
  .vektr-textarea:focus-visible {
    border-color: var(--input-border-focus);
    box-shadow: 0 0 0 2px var(--border-focus);
  }
  .vektr-input:disabled,
  .vektr-input[data-disabled="true"],
  .vektr-textarea:disabled,
  .vektr-textarea[data-disabled="true"] {
    background-color: var(--input-bg-disabled);
    cursor: not-allowed;
  }
  .vektr-input[data-invalid="true"],
  .vektr-textarea[data-invalid="true"] {
    border-color: var(--input-border-error);
  }
  .vektr-input-error-text,
  .vektr-textarea-error-text {
    font-size: var(--caption-sm, 11px);
    color: var(--input-error-text);
  }
  .vektr-input-helper-text,
  .vektr-textarea-helper-text {
    font-size: var(--caption-sm, 11px);
    color: var(--input-helper-text);
  }

  /* Card Component Styles */
  .vektr-card {
    border-radius: var(--radius-brand, 8px);
    padding: var(--space-6, 24px);
    transition: all 0.2s ease-in-out;
  }
  .vektr-card[data-variant="base"],
  .vektr-card-base {
    background-color: var(--card-bg);
    color: var(--card-text);
    border: var(--border-width-thin, 1px) solid var(--card-border);
    box-shadow: 0 1px 3px var(--shadow-color-sm);
  }
  .vektr-card[data-variant="raised"],
  .vektr-card-raised {
    background-color: var(--card-bg-raised);
    color: var(--card-text);
    border: var(--border-width-thin, 1px) solid var(--card-border);
    box-shadow: 0 4px 6px var(--shadow-color-md);
  }
  .vektr-card[data-variant="sunken"],
  .vektr-card-sunken {
    background-color: var(--card-bg-sunken);
    color: var(--card-text);
    border: var(--border-width-thin, 1px) solid var(--card-border);
  }
  .vektr-card[data-variant="inverse"],
  .vektr-card-inverse {
    background-color: var(--card-bg-inverse);
    color: var(--card-text-inverse);
    border: 1px solid transparent;
  }
  .vektr-card-header,
  .vektr-card-body {
    margin-bottom: var(--space-4, 16px);
  }
  .vektr-card-title {
    font-size: var(--header-sm, 24px);
    font-weight: 600;
    color: var(--card-text);
  }
  .vektr-card-description {
    font-size: var(--body-base, 14px);
    color: var(--text-muted);
  }
  .vektr-card-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--spacing-brand-gap, 8px);
  }

  /* Checkbox, Radio & Switch Styles */
  .vektr-checkbox {
    width: 20px;
    height: 20px;
    border-radius: var(--radius-sm, 4px);
    border: 1.5px solid var(--border-default);
    background-color: var(--surface-base);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .vektr-checkbox[data-state="checked"] {
    background-color: var(--action-primary);
    border-color: var(--action-primary);
    color: var(--text-inverse);
  }
  .vektr-radio-group {
    display: flex;
    flex-direction: column;
    gap: var(--space-2, 8px);
  }
  .vektr-radio-item {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1.5px solid var(--border-default);
    background-color: var(--surface-base);
    cursor: pointer;
  }
  .vektr-radio-item[data-state="checked"] {
    border-color: var(--action-primary);
    background-color: var(--action-primary);
  }
  .vektr-switch {
    width: 44px;
    height: 24px;
    border-radius: 9999px;
    background-color: var(--surface-sunken);
    position: relative;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  .vektr-switch[data-state="checked"] {
    background-color: var(--action-primary);
  }
  .vektr-switch-thumb {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ffffff;
    transition: transform 0.2s;
    transform: translateX(2px);
  }
  .vektr-switch[data-state="checked"] .vektr-switch-thumb {
    transform: translateX(22px);
  }

  /* Select Component Styles */
  .vektr-select-trigger {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-brand-padding, 12px);
    border-radius: var(--radius-brand, 8px);
    border: 1.5px solid var(--border-default);
    background-color: var(--surface-base);
    color: var(--text-primary);
    font-size: var(--body-base, 14px);
    cursor: pointer;
    width: 100%;
  }
  .vektr-select-content {
    background-color: var(--surface-raised);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-brand, 8px);
    box-shadow: 0 4px 6px var(--shadow-color-md);
    padding: 4px;
    z-index: 50;
  }
  .vektr-select-item {
    padding: 8px 12px;
    border-radius: 4px;
    color: var(--text-primary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .vektr-select-item[data-highlighted] {
    background-color: var(--surface-subtle);
  }

  /* Dialog & Drawer Styles */
  .vektr-dialog-overlay,
  .vektr-drawer-overlay {
    position: fixed;
    inset: 0;
    background-color: var(--surface-overlay);
    z-index: 40;
  }
  .vektr-dialog-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--modal-bg);
    padding: var(--space-6, 24px);
    border-radius: var(--radius-brand, 8px);
    border: 1px solid var(--border-default);
    width: 90%;
    max-width: 500px;
    z-index: 50;
  }
  .vektr-drawer-content {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 320px;
    background-color: var(--modal-bg);
    padding: var(--space-6, 24px);
    border-left: 1px solid var(--border-default);
    z-index: 50;
  }

  /* Popover, Dropdown & Tooltip Styles */
  .vektr-popover-content,
  .vektr-dropdown-content {
    background-color: var(--surface-raised);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-brand, 8px);
    padding: 8px;
    box-shadow: 0 4px 6px var(--shadow-color-md);
    z-index: 50;
  }
  .vektr-dropdown-item {
    padding: 6px 12px;
    border-radius: 4px;
    color: var(--text-primary);
    cursor: pointer;
  }
  .vektr-dropdown-item[data-highlighted] {
    background-color: var(--surface-subtle);
  }
  .vektr-tooltip-content {
    background-color: var(--surface-inverse);
    color: var(--text-inverse);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    z-index: 50;
  }

  /* Tabs & Accordion Styles */
  .vektr-tabs-list {
    display: flex;
    border-bottom: 1px solid var(--border-default);
    gap: 8px;
  }
  .vektr-tabs-trigger {
    padding: 8px 16px;
    background: transparent;
    border: none;
    color: var(--text-secondary);
    cursor: pointer;
    border-bottom: 2px solid transparent;
  }
  .vektr-tabs-trigger[data-state="active"] {
    color: var(--action-primary);
    border-bottom-color: var(--action-primary);
  }
  .vektr-accordion-item {
    border-bottom: 1px solid var(--border-default);
  }
  .vektr-accordion-trigger {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 16px 0;
    background: transparent;
    border: none;
    color: var(--text-primary);
    cursor: pointer;
    font-weight: 600;
  }

  /* Table, Avatar, Skeleton, Separator, Toast, Alert, Pagination, Breadcrumb Styles */
  .vektr-table-wrapper {
    width: 100%;
    overflow-x: auto;
  }
  .vektr-table {
    width: 100%;
    border-collapse: collapse;
  }
  .vektr-table-head,
  .vektr-table-cell {
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-default);
    text-align: left;
  }
  .vektr-table-head {
    background-color: var(--surface-sunken);
    font-weight: 600;
  }
  .vektr-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: var(--surface-subtle);
  }
  .vektr-avatar-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .vektr-skeleton {
    background-color: var(--surface-sunken);
    border-radius: 4px;
    animation: pulse 1.5s infinite ease-in-out;
  }
  .vektr-separator {
    background-color: var(--border-default);
  }
  .vektr-separator[data-orientation="horizontal"] {
    height: 1px;
    width: 100%;
  }
  .vektr-separator[data-orientation="vertical"] {
    width: 1px;
    height: 100%;
  }
  .vektr-alert {
    padding: 16px;
    border-radius: var(--radius-brand, 8px);
    border: 1px solid var(--border-default);
    background-color: var(--surface-raised);
  }
  .vektr-toast-container {
    position: fixed;
    bottom: 16px;
    right: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    z-index: 100;
  }
  .vektr-toast {
    background-color: var(--surface-raised);
    border: 1px solid var(--border-default);
    padding: 12px 16px;
    border-radius: 8px;
    box-shadow: 0 4px 6px var(--shadow-color-md);
  }
  .vektr-pagination,
  .vektr-breadcrumb {
    display: flex;
    align-items: center;
  }
  .vektr-pagination-content,
  .vektr-breadcrumb-list {
    display: flex;
    align-items: center;
    gap: 8px;
    list-style: none;
  }
  .vektr-pagination-link,
  .vektr-breadcrumb-link {
    color: var(--text-primary);
    text-decoration: none;
    padding: 4px 8px;
    border-radius: 4px;
  }
  .vektr-pagination-link[data-active="true"] {
    background-color: var(--action-primary);
    color: var(--text-inverse);
  }
}

@layer vektr.utilities {
${utilitiesCss}
}
`;

  fs.writeFileSync(stylesCssPath, unifiedStyles);

  const docsDistDir = path.join(__dirname, 'docs/dist');
  if (!fs.existsSync(docsDistDir)) fs.mkdirSync(docsDistDir, { recursive: true });
  fs.writeFileSync(path.join(docsDistDir, 'styles.css'), unifiedStyles);

  // Step 6: Generate TypeScript source file for tokens (src/tokens/index.ts)
  const tokensSrcDir = path.join(__dirname, 'src/tokens');
  if (!fs.existsSync(tokensSrcDir)) fs.mkdirSync(tokensSrcDir, { recursive: true });

  const tokensSrcContent = `/**
 * Auto-generated Design Tokens Source
 */

export const tokens = ${JSON.stringify(lightTokens, null, 2)} as const;
export const darkTokens = ${JSON.stringify(darkTokens, null, 2)} as const;
${typographyData ? `export const typography = ${JSON.stringify(typographyData.typography, null, 2)} as const;\n` : ''}
export default tokens;
`;

  fs.writeFileSync(path.join(tokensSrcDir, 'index.ts'), tokensSrcContent);

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
      fontSize: ${JSON.stringify({ ...(lightTokens.display || {}), ...(lightTokens.header || {}), ...(lightTokens.paragraph || {}), ...(lightTokens.body || {}) }, null, 2)}${typographyData ? `,\n      typography: ${JSON.stringify(typographyData.typography, null, 2)}` : ''}
    }
  }
};
`;

  const tailwindDir = path.join(__dirname, 'dist/tailwind');
  if (!fs.existsSync(tailwindDir)) fs.mkdirSync(tailwindDir, { recursive: true });
  fs.writeFileSync(path.join(tailwindDir, 'preset.cjs'), tailwindPresetContent);
  const tailwindDtsContent = `/** @type {import('tailwindcss').Config} */\ndeclare const preset: Record<string, any>;\nexport = preset;\n`;
  fs.writeFileSync(path.join(tailwindDir, 'preset.d.cts'), tailwindDtsContent);

  console.log('🎉 Successfully compiled Tokens Studio W3C DTCG tokens & VEKTR Typography styles across Light, Dark & Brand modes!');
}

runBuild().catch(err => {
  console.error('❌ Build failed:', err);
  process.exit(1);
});
