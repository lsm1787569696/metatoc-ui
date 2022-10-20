import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log("env:", env)

  // https://vitejs.dev/config/
  return defineConfig({
    plugins: [vue()],
    server: {
      proxy: {
        '/api': {
            target: env.VITE_WEBSERVICE_HOST,
            changeOrigin: true,  // 允许跨域
            rewrite: (path) => path.replace(/^\/api/, ""),
        },
      }
    }
  })
}
