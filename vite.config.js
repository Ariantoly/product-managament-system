import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api/': {
        target: 'localhost:8080',
        changeOrigin: true
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    clearMocks: true,
    include: [
      'tests/specs/**'
    ]
  }
})
