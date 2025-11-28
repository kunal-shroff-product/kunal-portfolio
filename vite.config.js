import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    // This allows Replit's proxy to access your dev server
    allowedHosts: true, 
  }
})
