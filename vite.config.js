import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['imgs/logos/Logo_Johns_ico.ico', 'apple-touch-icon.png'],
      manifest: {
        name: "John's Restaurant · Todi",
        short_name: "John's",
        description: "Ristorante e scuola di cucina dello Chef John Paterson a Todi, Umbria.",
        lang: 'it',
        theme_color: '#FAF6EC',
        background_color: '#FAF6EC',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // Non dirottare /admin (pannello Decap statico) sulla SPA
        navigateFallbackDenylist: [/^\/admin/],
        globPatterns: ['**/*.{js,css,html,woff2}'],
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: { maxEntries: 80, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
    }),
  ],
})
