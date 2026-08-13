import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./scripts/setup-tests.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
  },
});
