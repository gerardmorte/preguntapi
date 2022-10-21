import url from 'node:url'
import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig(
//   {
//   process.env = {...process.env, ...loadEnv(mode, process.cwd())}
// })

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(url.fileURLToPath(import.meta.url))

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    server: {
      proxy: {
        '/api': process.env.VITE_URL_API
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(dirname, './src')
      }
    },
    plugins: [react()],
    build: {
      chunkSizeWarningLimit: 1000
    }
  })
}
