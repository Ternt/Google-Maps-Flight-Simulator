import fg from 'fast-glob';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Define __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  // Define the root directory (default is the current working directory)
  root: process.cwd(),

  // Base public path when served in development or production
  base: './',

  build: {
    rollupOptions: {
      input: fg.sync('index.html', { cwd: __dirname, absolute: true }), // Using fast-glob
      output: {
        // Customize the output directory structure
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    outDir: 'dist',            // Output directory
    target: 'esnext',          // JavaScript language target
    sourcemap: true,           // Generate source maps
    minify: 'esbuild',         // Minifier to use ('esbuild', 'terser', or false)
    emptyOutDir: true,         // Empty the output directory before building
  },

  // Include additional asset types
  assetsInclude: [
    '**/*.gltf',
    '**/*.glb',
    '**/*.hdr',
    '**/*.bin',
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.svg',
    '**/*.gif',
    '**/*.ktx2',
  ],
});
