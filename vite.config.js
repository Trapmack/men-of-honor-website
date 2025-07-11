import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: false,
    open: false
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: false,
    open: false
  }
})
