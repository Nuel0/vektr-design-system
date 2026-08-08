import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/react/index.ts'],
  format: ['cjs', 'esm'],
  dts: false,
  clean: false,
  outDir: 'dist/react',
  external: ['react', 'react-dom'],
});
