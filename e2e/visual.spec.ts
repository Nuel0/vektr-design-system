import { test, expect } from '@playwright/test';

const themes = ['light', 'dark'];
const brands = ['default', 'fintech', 'health-tech', 'hospitality', 'edtech'];

test.describe('Visual Regression Across Themes & Brands', () => {
  for (const theme of themes) {
    for (const brand of brands) {
      test(`Component Matrix - theme: ${theme}, brand: ${brand}`, async ({ page }) => {
        await page.goto('/');
        await page.evaluate(
          ({ t, b }) => {
            document.documentElement.setAttribute('data-theme', t);
            document.documentElement.setAttribute('data-brand', b);
          },
          { t: theme, b: brand }
        );

        // Take snapshot of component showcase matrix
        await expect(page).toHaveScreenshot(`matrix-${theme}-${brand}.png`, {
          fullPage: true,
        });
      });
    }
  }
});
