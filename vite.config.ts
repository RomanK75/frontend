import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
      },
      optipng: {
        enabled: true,
      },
      pngquant: {
        quality: [0.65, 0.90],
        speed: 4,
      },
      mozjpeg: {
        quality: 80,
      },
      svgo: {
        multipass: true,
      },
    }),
  ],
  base: '/frontend'
})