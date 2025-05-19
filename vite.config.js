import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  publicDir: 'public',
  cacheDir: 'node_modules/.vite',
  server: {
    cors: {
      origin: '*',
    }
  },
  base: '/',
})
