import type { App } from 'vue'
import OKCard from './src/Card'

export { OKCard }

export default {
  install(app: App) {
    // 注册组件
    app.component(OKCard.name as string, OKCard)
  },
}
