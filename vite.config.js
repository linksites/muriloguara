import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// No build, base no subcaminho do GitHub Pages (https://linksites.github.io/
// muriloguara/). No dev local, raiz "/". Os assets em runtime usam
// import.meta.env.BASE_URL, então acompanham automaticamente esta base.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/muriloguara/' : '/',
  plugins: [react()],
}))
