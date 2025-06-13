import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
          src: 'LICENSE.md',
          dest: ''
        },
        {
          src: 'README.md',
          dest: ''
        },
        {
          src: 'disclaimer.md',
          dest: ''
        },
        {
          src: 'privacy.md',
          dest: ''
        },
        {
          src: 'terms.md',
          dest: ''
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
