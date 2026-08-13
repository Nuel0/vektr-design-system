import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: { index: 'src/react/index.ts' },
    outDir: 'dist/react',
    format: ['cjs', 'esm'],
    dts: true,
    clean: false,
    banner: {
      js: '"use client";',
    },
    external: ['react', 'react-dom'],
  },
  {
    entry: { index: 'src/tokens/index.ts' },
    outDir: 'dist/js',
    format: ['cjs', 'esm'],
    dts: true,
    clean: false,
  },
]);
