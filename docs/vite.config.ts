import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { demoblockVitePlugin } from 'vitepress-theme-demoblock'

export default defineConfig({
  plugins: [vueJsx(), demoblockVitePlugin()],
})
