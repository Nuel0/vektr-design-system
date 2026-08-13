import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  snapshotPathTemplate: '{snapshotDir}/{testFileDir}/{testFileName}-snapshots/{arg}{ext}',
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.05,
    },
  },
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npx http-server docs -p 3000',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
});
