# Figma Design Token Handoff & Fix Checklist

To ensure seamless automated sync between Figma / Tokens Studio and the `vektr-design-system` code repository, the Figma design team should implement the following recommendations in Figma Variables / Tokens Studio:

## 1. Structure Variables into 3 Explicit Collections (Tiers)

| Collection Name | Purpose | Example Variable Names | Mode Setup |
| :--- | :--- | :--- | :--- |
| **`Tier 1 / Primitives`** | Raw color palettes & brand step palettes | `brand/50`..`900`, `neutral/50`..`900`, `color/red/600` | **Brand Modes**: `Default`, `Fintech`, `HealthTech`, `Hospitality`, `EdTech` |
| **`Tier 2 / Semantics`** | Purpose-based aliases pointing to primitives | `action/primary`, `surface/base`, `text/primary`, `border/default` | **Theme Modes**: `Light`, `Dark` |
| **`Tier 3 / Components`** | Component-specific properties pointing to semantics | `button/primary-bg`, `input/bg`, `card/bg`, `badge/success-bg` | Single Value (aliases Tier 2) |

---

## 2. Crucial Figma Fixes Needed

> [!IMPORTANT]
> ### Fix 1: [data-brand] Overrides Must Set Complete 50–900 Primitive Step Palettes
> Currently, switching `[data-brand="fintech"]` was broken because Figma only exported individual accent colors (`--brand-600`) without defining the full step palette (`--brand-50` through `--brand-900` and `--neutral-50` through `--neutral-900`).
> - **Action for Figma Team**: Ensure every Brand Mode in the `Primitives` collection defines the complete 50–900 step palette for both `brand/*` and `neutral/*`.

> [!IMPORTANT]
> ### Fix 2: Semantic Tokens Must Always Use Alias Syntax (Not Hardcoded Hex Values)
> When exporting W3C DTCG tokens from Tokens Studio:
> - **Action for Figma Team**: Semantic tokens (`surface/base`, `text/primary`, `action/primary`) must point to `{neutral/50}`, `{neutral/900}`, `{brand/600}` as alias references instead of detached raw hex colors.

> [!IMPORTANT]
> ### Fix 3: Typography Line Height & Letter Spacing Units
> - **Action for Figma Team**: Set explicit pixel (`px`) or unitless multiplier values for line heights and letter spacings in Tokens Studio. Avoid mixed percentage strings (`150%`) without units.

---

## 3. Recommended Automated Tokens Studio Workflow

1. In Tokens Studio for Figma, go to **Settings $\rightarrow$ Sync Providers**.
2. Select **GitHub Sync**.
3. Point sync path to `tokens.json`.
4. Enable **Export in DTCG Format** (`$value` and `$type`).
5. On every Figma publish, GitHub Actions CI will automatically build tokens, run component contract gates, run Vitest unit & accessibility tests (`vitest-axe`), and publish package outputs.

---

## 4. Automated Figma Variables REST API Sync Setup

The repository features a scheduled GitHub Action ([.github/workflows/figma-sync.yml](.github/workflows/figma-sync.yml)) that queries Figma's REST API endpoint directly (`/v1/files/{file_key}/variables/local`), recompiles the 3-tier custom property CSS layer and shadcn registry items, runs the token contract gate, and automatically opens a Pull Request whenever Figma variables are modified!

### Setup GitHub Repository Secrets
To enable live automated API fetching:
1. Go to your GitHub repository $\rightarrow$ **Settings** $\rightarrow$ **Secrets and variables** $\rightarrow$ **Actions**.
2. Add **`FIGMA_PERSONAL_ACCESS_TOKEN`**: A Personal Access Token generated in Figma under **Account Settings** $\rightarrow$ **Personal Access Tokens**.
3. Add **`FIGMA_FILE_KEY`**: The file key from your Figma design file URL (`https://www.figma.com/design/<FILE_KEY>/...`).
