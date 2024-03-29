/* eslint-disable no-undef */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      "~bootstrap": "./node_modules/bootstrap",
      "~multiselect": "./node_modules/vue-multiselect",
    }
  },
  base: process.env.NODE_ENV === 'production'
    ? '/frontend-crash-course/assignment6/'
    : '/',
  build: {
    outDir: '../dist/assignment6/'
  }
})
