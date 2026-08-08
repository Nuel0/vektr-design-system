---
name: vektr-design-system
description: >-
  Provides comprehensive guidelines, theme switching workflows, token references, React UI component usage, and build instructions
  for the Vektr Design System (`vektr-design-system`). Use this skill whenever building, modifying, or consuming
  Vektr Design System tokens, React components (`vektr-design-system/react`), CSS variables, TypeScript definitions, or Tailwind CSS presets.
---

# Vektr Design System Skill

This skill guides the usage, token compilation, React UI components, and integration of the **Vektr Design System** across web applications and libraries.

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

## ⚛️ Reusable React Components (`vektr-design-system/react`)

### 1. Import Components & CSS
```tsx
import 'vektr-design-system/css';
import { VektrProvider, Button, Card, Badge, Input, useVektrTheme } from 'vektr-design-system/react';
```

### 2. Wrap App with `VektrProvider`
```tsx
<VektrProvider defaultTheme="light" defaultBrand="fintech">
  <App />
</VektrProvider>
```

### 3. Component Reference
- **`<Button>`**: `variant="primary|secondary|danger|ghost|outline"`, `size="sm|md|lg"`, `isLoading`, `leftIcon`, `rightIcon`
- **`<Card>`**: `variant="base|raised|sunken|inverse"`, contains `<CardHeader>`, `<CardBody>`, `<CardFooter>`
- **`<Badge>`**: `variant="success|warning|danger|info|neutral"`
- **`<Input>`**: `label`, `helperText`, `errorText`
- **`useVektrTheme()`**: Hook providing `{ theme, brand, setTheme, setBrand, toggleTheme }`

---

## 🔄 Building & Updating Tokens

1. Export new JSON from Figma.
2. Replace `tokens.json` in the `vektr-design-system` package.
3. Run the token & component compiler:
   ```bash
   npm run build
   ```
4. Verify generated outputs in `dist/`.
