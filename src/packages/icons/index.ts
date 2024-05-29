import type { App } from 'vue'
import OKIcons from './src/Icons'

export { OKIcons }

export default {
  install(app: App) {
    app.component('OKIcons', OKIcons)
  },
}
