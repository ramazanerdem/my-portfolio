import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        name: 'ramo.network',
        short_name: 'r.network',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        icons: [
          {
            src: '/network.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/network.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  // plugins: [react()],
})
