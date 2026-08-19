import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Project page served at iwandjudaric.github.io/Portfolio/, so all asset
  // URLs need this prefix instead of defaulting to the domain root.
  base: '/Portfolio/',
})
