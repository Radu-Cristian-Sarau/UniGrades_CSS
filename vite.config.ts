import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // Enable source maps for CSS in development and production
    // This allows developers to trace the final CSS back to source files
    devSourcemap: true,
  },
  build: {
    // Enable source maps for debugging in production
    // This generates .js.map files for JavaScript and tracks CSS through the JS source map
    sourcemap: true,
    // Output directory for bundled files
    outDir: 'dist',
    // Optimize CSS extraction - keeps CSS separate from JS bundle for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // This ensures CSS remains in its own file rather than bundled into JS
        }
      }
    }
  }
})
