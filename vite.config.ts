import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd())
  console.log(env.VITE_API);
  console.log(env.VITE_APP_BASE_API)
  return {
    plugins: [
      vue(),
      vuetify(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server:{
      proxy:{
        [env.VITE_APP_BASE_API]:{
          target:env.VITE_API,
          changeOrigin:true,
          rewrite: (path) => path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), ''),
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss:{
          additionalData: '@use "@/styles/vars.scss" as *;',
        }
      }
    }
  }
})
