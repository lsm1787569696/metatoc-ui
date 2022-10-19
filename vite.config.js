import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  // https://vitejs.dev/config/
  return defineConfig({
    plugins: [vue()],
    server: {
      proxy: {
        '/signup': {
            target: env.VITE_WEBSERVICE_HOST,
            changeOrigin: true,  // 允许跨域
        },
        '/paths': {
          target: env.VITE_WEBSERVICE_HOST,
          changeOrigin: true,  // 允许跨域
      },
      }
    }
  })
}
