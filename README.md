# Vektr Design System

Official design tokens, React components, and multi-theme presets for **Vektr Design System**, exported and compiled directly from Figma Variables.

---

## 📦 Package Formats Exposed

- 🎨 **CSS Variables**: `import 'vektr-design-system/css'`
- ⚛️ **React Components**: `import { Button, Card, Badge, Input, VektrProvider, useVektrTheme } from 'vektr-design-system/react'`
- 📦 **JS / TS Design Tokens**: `import tokens, { darkTokens } from 'vektr-design-system'`
- 📄 **Normalized JSON**: `import tokens from 'vektr-design-system/json'`
- 🌊 **Tailwind CSS Preset**: Add to `tailwind.config.js` presets

---

## ⚛️ Reusable React Components

### 1. Wrap your app with `VektrProvider`
```tsx
import React from 'react';
import 'vektr-design-system/css';
import { VektrProvider, Button, Card, Badge, Input, useVektrTheme } from 'vektr-design-system/react';

export function App() {
  return (
    <VektrProvider defaultTheme="light" defaultBrand="fintech">
      <Dashboard />
    </VektrProvider>
  );
}
```

### 2. Use UI Components

#### Button
```tsx
<Button variant="primary" size="md">Click Me</Button>
<Button variant="secondary" size="sm">Secondary</Button>
<Button variant="danger" isLoading>Processing...</Button>
```

#### Card
```tsx
<Card variant="raised">
  <CardHeader>
    <h3>Vektr Analytics</h3>
  </CardHeader>
  <CardBody>
    <p>Card content styled with design tokens.</p>
  </CardBody>
  <CardFooter>
    <Button variant="primary">View Details</Button>
  </CardFooter>
</Card>
```

#### Status Badge
```tsx
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="danger">Failed</Badge>
```

#### Input Field
```tsx
<Input 
  label="Email Address"
  placeholder="name@company.com"
  helperText="We'll never share your email."
/>
```

#### Dynamic Theme & Sub-Brand Switcher
```tsx
function ThemeToggle() {
  const { theme, toggleTheme, setBrand } = useVektrTheme();

  return (
    <div>
      <Button onClick={toggleTheme}>
        Current Theme: {theme.toUpperCase()}
      </Button>
      <Button onClick={() => setBrand('health-tech')}>Switch to Health-Tech</Button>
    </div>
  );
}
```

---

## 🔄 Building & Updating Tokens & Components

```bash
# Compile tokens & React components
npm run build
```

---

## 📤 Publishing to NPM / GitHub

```bash
# Push to GitHub
git add .
git commit -m "feat: add React reusable components"
git push origin main
```
