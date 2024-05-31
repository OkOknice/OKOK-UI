import type { App } from 'vue'
import OKDialog from './src/Dialog'

export { OKDialog }

export default {
  install(app: App) {
    app.component('OKDialog', OKDialog)
  },
}
