import {
  defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
  ],
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base: './',

})