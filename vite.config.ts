import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@assets': './src/assets',
    },
  },
  base: '/frontend'
})