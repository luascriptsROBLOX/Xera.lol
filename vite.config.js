// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // The root directory for Vite to serve files from
  root: '.',  // Optional, points to the root directory (default is current directory)

  // Configuration for the build process
  build: {
    // Specify the directory where the build output should be placed
    outDir: 'dist',  // Output directory for the build
  },

  // You can add other Vite configurations here if needed, such as plugins
});
