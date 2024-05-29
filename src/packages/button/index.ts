import { App } from 'vue'
import OKButton from './src/Button'

export { OKButton }

export default {
  install(app: App) {
    app.component(OKButton.name as string, OKButton)
  },
}
