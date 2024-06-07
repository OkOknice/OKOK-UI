import type { App } from 'vue'
import OKCollapse from './src/Collapse'
import OKCollapseItem from './src/CollapseItem'

export { OKCollapseItem, OKCollapse }

export default {
  install(app: App) {
    // 注册组件
    app.component('OKCollapseItem', OKCollapseItem)
    app.component('OKCollapse', OKCollapse)
  },
}
