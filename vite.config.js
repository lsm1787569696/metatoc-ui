import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/signup': {
          target: 'http://172.22.50.211:5000/',
          changeOrigin: true,  // 允许跨域
      },
      '/paths': {
        target: 'http://172.22.50.211:5000/',
        changeOrigin: true,  // 允许跨域
    },
    }
  }
})
