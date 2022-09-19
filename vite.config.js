import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { less } from 'svelte-preprocess-less'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess: {
        style: less(),
      },
    })
  ],
  server: {
    proxy: {
      '/cle-subsidy': {
        target: 'http://192.168.180.98:8405/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cle-subsidy/, 'cle-subsidy')
      },
    }
  }
})
