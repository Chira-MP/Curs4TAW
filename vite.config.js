import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/Curs4TAW/',

  plugins: [
    vue(),

    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Curs 4 App',
        short_name: 'Curs4',
        start_url: '/',
        display: 'standalone',
        theme_color: '#169bcb',
        background_color: '#ffffff',
        icons: [
          {
            src: 'icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),

    tailwindcss(),
    vueDevTools(),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  define: {
    __VUE_OPTIONS_API__: false
  }
})
