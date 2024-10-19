import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  mode : process.env.MODE,
  envDir : 'env',
  envPrefix : 'VITE_'
})
