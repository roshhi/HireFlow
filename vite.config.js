import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({

  base: '/HireFlow/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
      port: 3000,
      proxy: {
        '/api': {
          target: 'https://hireflow-13.onrender.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
  },
  preview: {
    allowedHosts: ['hireflow-5.onrender.com','hireflow-13.onrender.com'],
    host: '0.0.0.0',
    port: process.env.PORT || 4173
  },
})
