# Vektr Design System

Official design tokens and multi-theme presets for **Vektr Design System**, exported and compiled directly from Figma Variables.

---

## 📦 Package Formats Exposed

This package compiles your Vektr Figma Variables across all modes (**Light**, **Dark**, **Fintech**, **Health-tech**, **Hospitality**, **Edtech**) into multi-platform deliverables:

- 🎨 **CSS Variables**: `import 'vektr-design-system/css'`
- 📦 **JavaScript / TypeScript (ESM & CJS)**: `import tokens, { darkTokens } from 'vektr-design-system'`
- 📄 **Normalized JSON**: `import tokens from 'vektr-design-system/json'`
- 🌊 **Tailwind CSS Preset**: Add to `tailwind.config.js` presets

---

## 🚀 Usage Guide

### 1. CSS Variables & Theme Switching

Include the CSS file at your application root:

```css
@import "vektr-design-system/css";
```

Use variables in your styles:
```css
.card {
  background-color: var(--surface-base);
  color: var(--text-primary);
  border-radius: var(--radius-brand);
  padding: var(--spacing-brand-padding);
}
```

#### Dark Mode Activation
```html
<html data-theme="dark">
  <!-- All surface, text, border, status & shadow tokens switch automatically -->
</html>
```

#### Brand Theme Activation (Fintech, Health-tech, Hospitality, Edtech)
```html
<html data-brand="fintech">
  <!-- Switches brand colors, typography, gaps, padding & radii to Fintech theme -->
</html>
```

---

### 2. JavaScript / TypeScript

```typescript
import tokens, { darkTokens } from 'vektr-design-system';

console.log(tokens.brand.primary); // "#4f46e5"
console.log(darkTokens.surface.base); // "#0f172a"
```

---

### 3. Tailwind CSS Integration

In `tailwind.config.js`:
```javascript
module.exports = {
  presets: [require('vektr-design-system/tailwind')],
  content: ['./src/**/*.{js,ts,jsx,tsx}']
};
```

Then use design token utility classes:
```html
<div class="bg-surface-base text-text-primary rounded-radius-brand p-space-4">
  <button class="bg-brand-primary text-text-inverse hover:bg-brand-primary-hover">
    Vektr Button
  </button>
</div>
```

---

## 🔄 Updating Tokens

When you update variables in Figma:
1. Export the updated JSON from Figma.
2. Replace [`tokens.json`](file:///Users/MACBOOKPRO/Desktop/figma-design-tokens/tokens.json).
3. Run the build script:
   ```bash
   npm run build
   ```

---

## 📤 Publishing to NPM

1. Login to npm:
   ```bash
   npm login
   ```
2. Publish:
   ```bash
   npm publish --access public
   ```
   *(Or run `npm pack` to inspect `vektr-design-system-1.0.0.tgz` before publishing).*
