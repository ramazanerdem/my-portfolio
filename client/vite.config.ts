import { defineConfig } from 'vite'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  includeAssets: ['network.png', 'ramo-network.svg'],
  manifest: {
    name: 'ramo.network',
    short_name: 'r.network',
    scope: '/',
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
    orientation: 'portrait',
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), VitePWA(manifestForPlugin)],
  // plugins: [react()],
})
