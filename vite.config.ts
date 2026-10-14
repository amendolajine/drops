import { defineConfig } from 'vite';

// Dev tools only for now: the root index.html is the simulation debug page.
// It is never deployed: .github/workflows/pages.yml still publishes site/ only (D007).
export default defineConfig({
  base: './',
  server: { port: 5173, strictPort: false },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'es2022',
  },
});
