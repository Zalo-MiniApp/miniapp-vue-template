import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    vue()
  ],
  build: {
    outDir: 'www',
    rollupOptions: {
      output: {
        entryFileNames: `[name].module.js`,
        chunkFileNames: `[name].module.js`,
        assetFileNames: `[name].[ext]`
      }
    }
  }
})
