---
name: vektr-design-system
description: >-
  Provides comprehensive guidelines, theme switching workflows, token references, and build instructions
  for the Vektr Design System (`vektr-design-system`). Use this skill whenever building, modifying, or consuming
  Vektr Design System tokens, CSS variables, TypeScript definitions, or Tailwind CSS presets.
---

# Vektr Design System Skill

This skill guides the usage, token compilation, and integration of the **Vektr Design System** across web applications and libraries.

---

## 🎨 Overview & Token Architecture

Vektr Design System is compiled directly from Figma Variables. It exposes **Light & Dark themes**, along with multi-brand sub-themes:
- **Default / Light**: Standard high-contrast theme
- **Dark**: Dark mode surface and status overrides (`[data-theme="dark"]`)
- **Brand Themes**:
  - `fintech`: Space Grotesk / IBM Plex Sans typography & blue palette
  - `health-tech`: DM Sans typography & teal palette
  - `hospitality`: Playfair Display / Lora typography & orange palette
  - `edtech`: Nunito typography & purple palette

---

## 🚀 How to Consume Tokens in Web Apps

### 1. Import CSS Variables
Import the CSS stylesheet at your app's entry point (`index.js`, `main.tsx`, or `_app.js`):

```css
@import "vektr-design-system/css";
```

### 2. Standard CSS Usage
```css
.button-primary {
  background-color: var(--brand-primary);
  color: var(--text-inverse);
  padding: var(--spacing-brand-padding);
  border-radius: var(--radius-brand);
}
```

### 3. Theme Switching in HTML/React

```html
<!-- Enable Dark Theme -->
<html data-theme="dark">

<!-- Enable Brand Variant -->
<html data-brand="fintech">
```

### 4. JavaScript / TypeScript Imports
```typescript
import tokens, { darkTokens } from 'vektr-design-system';

const primaryColor = tokens.brand.primary; // "#4f46e5"
```

### 5. Tailwind CSS Preset
Add to `tailwind.config.js`:
```javascript
module.exports = {
  presets: [require('vektr-design-system/tailwind')],
  content: ['./src/**/*.{js,ts,jsx,tsx}']
};
```

---

## 🔄 Building & Updating Tokens

1. Export new JSON from Figma.
2. Replace `tokens.json` in the `vektr-design-system` package.
3. Run the token compiler:
   ```bash
   npm run build
   ```
4. Verify generated outputs in `dist/`.
