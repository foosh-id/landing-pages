import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  cacheDir: 'node_modules/.vite',
  server: {
    cors: {
      origin: '*',
    }
  },
  base: '/',
})
