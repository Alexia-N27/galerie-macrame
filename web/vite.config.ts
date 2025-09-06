import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': { target: 'https://127.0.0.1:8000', changeOrigin: true, secure: false },
      '/uploads': { target: 'https://127.0.0.1:8000', changeOrigin: true, secure: false },
    },
  },
})
