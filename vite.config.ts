import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ewertongomeslisboa.io/', // <- ESSENCIAL para funcionar no Netlify e GitHub Pages
})
