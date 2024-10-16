import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
import fs from 'fs-extra';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    {
      name: 'copy-assets',
      writeBundle() {
        fs.copySync('src/assets', 'dist/assets');
      },
    },
  ],
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'src/assets'),
    },
  },
  base: '/frontend/',
  assetsInclude: ['**/*.png'],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
