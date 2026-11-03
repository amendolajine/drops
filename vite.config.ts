import { defineConfig } from 'vite';

// Dev tools only for now: the root index.html is the simulation debug page.
// It is never deployed: .github/workflows/pages.yml still publishes site/ only (D007).
export default defineConfig({
  base: './',
  server: { port: 5173, strictPort: false },
  // Discover dependencies only from maintained application entries, not archived studies.
  optimizeDeps: {
    entries: [
      'index.html',
      'web/playtest-study/index.html',
      'web/playtest-study/scene.html',
      'web/feedback-study/owner.html',
    ],
    include: ['three'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'es2022',
  },
});
