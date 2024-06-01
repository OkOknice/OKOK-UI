import type { App } from 'vue'
import OKPager from './src/Pager'

export { OKPager }

export default {
  install(app: App) {
    app.component('OKPager', OKPager)
  },
}
