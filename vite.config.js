import { defineConfig, loadEnv } from 'vite';
import react from "@vitejs/plugin-react";


// // https://vitejs.dev/config/
// export default defineConfig(
//   {
//   process.env = {...process.env, ...loadEnv(mode, process.cwd())}
  
// });


export default ({ mode }) => {
    // Load app-level env vars to node-level env vars.
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};
    return defineConfig({
      server: {
        proxy: {
          "/api": process.env.VITE_URL_API,
        },
      },
      plugins: [react()],
      build: {
        chunkSizeWarningLimit: 1000,
      },
    });
}
