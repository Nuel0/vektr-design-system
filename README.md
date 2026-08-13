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

## 🧩 Complete Component Catalog (25 Components)

Every component is exported from `vektr-design-system/react` and supports `React.forwardRef`, `clsx` class merging, `asChild` composition (via Radix Slot where applicable), and accessibility wiring.

| Category | Component | Import Example | Key Props & Variants |
| :--- | :--- | :--- | :--- |
| **Actions** | `Button` | `import { Button } from 'vektr-design-system/react'` | `variant` (`primary`, `secondary`, `danger`, `ghost`, `outline`), `size` (`sm`, `md`, `lg`), `isLoading`, `asChild`, `leftIcon`, `rightIcon` |
| | `Checkbox` | `import { Checkbox } from 'vektr-design-system/react'` | `checked`, `defaultChecked`, `onCheckedChange`, `disabled` |
| | `RadioGroup` | `import { RadioGroup, RadioGroupItem } from 'vektr-design-system/react'` | `value`, `defaultValue`, `onValueChange`, `disabled` |
| | `Switch` | `import { Switch } from 'vektr-design-system/react'` | `checked`, `defaultChecked`, `onCheckedChange`, `disabled` |
| **Forms** | `Input` | `import { Input } from 'vektr-design-system/react'` | `label`, `helperText`, `errorText`, `disabled`, `id` |
| | `Textarea` | `import { Textarea } from 'vektr-design-system/react'` | `label`, `helperText`, `errorText`, `disabled`, `id` |
| | `Select` | `import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from 'vektr-design-system/react'` | `value`, `onValueChange`, `placeholder`, `disabled` |
| | `Label` | `import { Label } from 'vektr-design-system/react'` | `htmlFor` |
| **Layout** | `Card` | `import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter } from 'vektr-design-system/react'` | `variant` (`base`, `raised`, `sunken`, `inverse`), `asChild` |
| | `Separator` | `import { Separator } from 'vektr-design-system/react'` | `orientation` (`horizontal`, `vertical`), `decorative` |
| | `Accordion` | `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'vektr-design-system/react'` | `type` (`single`, `multiple`), `collapsible` |
| **Status** | `Badge` | `import { Badge } from 'vektr-design-system/react'` | `variant` (`success`, `warning`, `danger`, `info`, `neutral`), `asChild` |
| | `Alert` | `import { Alert, AlertTitle, AlertDescription } from 'vektr-design-system/react'` | `variant` (`info`, `success`, `warning`, `danger`) |
| | `Avatar` | `import { Avatar, AvatarImage, AvatarFallback } from 'vektr-design-system/react'` | `src`, `alt`, `delayMs` |
| | `Skeleton` | `import { Skeleton } from 'vektr-design-system/react'` | standard `className` & `style` props |
| | `Toast` | `import { ToastProvider, useToast } from 'vektr-design-system/react'` | `toast({ title, description, variant })` |
| **Overlays** | `Dialog` | `import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from 'vektr-design-system/react'` | `open`, `onOpenChange` |
| | `Drawer` | `import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from 'vektr-design-system/react'` | `side` (`left`, `right`, `top`, `bottom`) |
| | `Dropdown` | `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from 'vektr-design-system/react'` | `open`, `onOpenChange` |
| | `Tooltip` | `import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from 'vektr-design-system/react'` | `delayDuration`, `side` |
| | `Popover` | `import { Popover, PopoverTrigger, PopoverContent } from 'vektr-design-system/react'` | `align`, `sideOffset` |
| **Navigation** | `Tabs` | `import { Tabs, TabsList, TabsTrigger, TabsContent } from 'vektr-design-system/react'` | `value`, `defaultValue`, `onValueChange` |
| | `Table` | `import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from 'vektr-design-system/react'` | standard table markup subcomponents |
| | `Pagination` | `import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from 'vektr-design-system/react'` | `isActive` |
| | `Breadcrumb` | `import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from 'vektr-design-system/react'` | breadcrumb markup subcomponents |

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
- **`vektr-design-system/react`**: 25 production React UI components (`Button`, `Input`, `Select`, `Dialog`, `Card`, etc.).
- **`vektr-design-system/css`**: Unified stylesheet entry emitted with CSS Cascade Layers (`@layer vektr.reset, vektr.tokens, vektr.components, vektr.utilities`).
- **`vektr-design-system/reset.css`**: Standalone reset stylesheet for opt-in reset usage.
- **`vektr-design-system/css/theme`**: Tailwind CSS v4 `@theme` extension stylesheet.
- **`vektr-design-system/tailwind`**: Tailwind CSS v3 theme extension preset.
- **`vektr-design-system/registry`**: Static shadcn-compatible component registry index.

---

## 📦 Releasing & Publishing to NPM

Vektr uses **Changesets** for automated semantic versioning, changelog generation, and GitHub release automation.

### Local Release Flow
```bash
# 1. Create a changeset file describing your changes
npm run changeset

# 2. Commit the changeset file
git add .changeset/ && git commit -m "docs: add changeset"

# 3. Apply version bumps and update CHANGELOG.md
npm run version-packages

# 4. Commit updated package version files
git add . && git commit -m "chore: release version bump"

# 5. Publish package to NPM
npm run release
```

### Automated GitHub CI Release Flow
Pushing commits to `main` automatically triggers [.github/workflows/release.yml](.github/workflows/release.yml). Changesets automatically manages a **Release PR**. Merging the Release PR publishes the updated package to NPM with OIDC provenance (`npm publish --provenance --access public`).

---

## 📄 License
[MIT](LICENSE)
