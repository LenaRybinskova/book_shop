import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/book_shop",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Теперь @ ссылается на src
    },
  },
})
