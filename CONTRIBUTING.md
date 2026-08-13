# Contributing to Vektr Design System (`vektr-design-system`)

Thank you for your interest in contributing to the Vektr Design System!

## Development Workflow

### 1. Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### 2. Setup
```bash
git clone https://github.com/Nuel0/vektr-design-system.git
cd vektr-design-system
npm install
```

### 3. Build & Test Commands
- **Full Build**: `npm run build` (compiles tokens, shadcn registry, React components, and runs quality gates).
- **Token Contract Gate**: `npm run test:contract` (asserts all custom properties exist in `dist/styles.css`, zero inline styles, and zero primitive leaks).
- **Unit & Accessibility Tests**: `npm run test:unit` (runs Vitest with `vitest-axe` WCAG accessibility checks).
- **Visual Regression Tests**: `npm run test:e2e` (runs Playwright E2E visual matrix across light/dark themes and all 4 brand palettes).
- **Package Export Linter**: `npx publint`

### 4. Interactive Showcase App
To launch the interactive component showcase locally:
```bash
npx http-server docs -p 3000
```
Open `http://localhost:3000` to preview components in Light/Dark mode and all 4 brand palettes (`default`, `fintech`, `health-tech`, `hospitality`, `edtech`).

### 5. Creating a Changeset
Before committing changes that affect package releases, create a changeset:
```bash
npx changeset
```
Follow the prompts to select bump type (patch, minor, major) and write a short summary.

---

## 🎨 Token Architecture Guidelines
- **Tier 1 (Primitives)**: Defined per brand mode (`--brand-50..900`, `--neutral-50..900`). Never consumed directly by component TSX files.
- **Tier 2 (Semantics)**: Mode-aware aliases (`--action-primary`, `--surface-base`, `--text-primary`).
- **Tier 3 (Components)**: Purpose-built custom properties (`--button-primary-bg`, `--input-bg`, `--card-bg`). Components consume Tier 3 variables exclusively.
- **Zero Inline Styles**: All component styling must be defined in `@layer vektr.components` using `data-*` attribute selectors (`data-variant`, `data-state`, `data-loading`, `data-disabled`).
