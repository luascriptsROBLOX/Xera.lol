// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',  // Optional, points to the root directory (default is current directory)
  build: {
    outDir: 'dist',  // Output directory for the build
  },
});
