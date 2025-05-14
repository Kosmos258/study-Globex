import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Путь wt/web/folder/temp_template/frontend
  base: "/folder/temp_template/frontend/",
  plugins: [react()],
  build: {
    sourcemap: true
  }
})
