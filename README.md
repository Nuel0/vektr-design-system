# Vektr Design System (`vektr-design-system`)

> Official 3-Tier Design Tokens, React Component Library & Multi-Theme System.

[![npm version](https://img.shields.io/npm/v/vektr-design-system.svg)](https://www.npmjs.com/package/vektr-design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🚀 Quick Start in 5 Copy-Pasteable Steps

### 1. Install Package & Peer Dependencies
```bash
npm install vektr-design-system react react-dom
```

### 2. Import the Stylesheet
Import the unified stylesheet at the entry point of your application (e.g. `src/index.js`, `src/App.tsx`, or `app/layout.tsx`):
```typescript
import 'vektr-design-system/css';
```

### 3. Add Theme & Brand Attributes to `<html>`
Set the initial theme (`light` or `dark`) and active brand palette (`default`, `fintech`, `health-tech`, `hospitality`, `edtech`) on your root HTML element:
```html
<html data-theme="light" data-brand="fintech">
```

### 4. Wrap Your Application in `VektrProvider`
```tsx
import React from 'react';
import { VektrProvider } from 'vektr-design-system/react';

export function App({ children }: { children: React.ReactNode }) {
  return (
    <VektrProvider defaultTheme="light" defaultBrand="fintech">
      {children}
    </VektrProvider>
  );
}
```

### 5. Use Components in Your UI
```tsx
import React from 'react';
import { Button, Input, Card, CardHeader, CardTitle, CardBody, Badge } from 'vektr-design-system/react';

export function UserDashboard() {
  return (
    <Card variant="raised">
      <CardHeader>
        <CardTitle>Welcome Back</CardTitle>
        <Badge variant="success">Active Plan</Badge>
      </CardHeader>
      <CardBody>
        <Input label="Search Projects" placeholder="Type a keyword..." />
        <Button variant="primary" style={{ marginTop: '16px' }}>
          Create New Project
        </Button>
      </CardBody>
    </Card>
  );
}
```

---

## 🎨 Token & Brand Architecture

Vektr enforces a strict **3-Tier Custom Property Architecture**:
- **Tier 1 (Primitives)**: `--brand-50..900`, `--neutral-50..900` defined per `[data-brand]` block.
- **Tier 2 (Semantics)**: `--action-primary`, `--surface-base`, `--text-primary` defined per `[data-theme="light|dark"]` block.
- **Tier 3 (Components)**: `--button-primary-bg`, `--input-bg`, `--card-bg` consumed directly by components.

Swapping `[data-brand="fintech"]` updates all primitive step palettes, automatically cascading through semantic custom properties down to component styles across the entire application.

---

## 📦 Package Exports & Subpaths

- **`vektr-design-system`**: Design token JavaScript objects (`tokens`, `darkTokens`, `typography`).
- **`vektr-design-system/react`**: 25 React UI components (`Button`, `Input`, `Select`, `Dialog`, `Card`, etc.).
- **`vektr-design-system/css`**: Unified stylesheet entry emitted with CSS Cascade Layers (`@layer vektr.reset, vektr.tokens, vektr.components, vektr.utilities`).
- **`vektr-design-system/tailwind`**: Tailwind CSS theme extension preset.

---

## 📄 License
[MIT](LICENSE)
