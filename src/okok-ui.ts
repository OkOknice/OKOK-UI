import type { App } from 'vue'
// 自动引入所有组件
const files: Record<string, any> = import.meta.glob('./packages/**/index.ts', {
  eager: true,
})

// 全局引入所有组件
export default {
  install(app: App) {
    for (const key in files) {
      app.use(files[key].default)
    }
  },
}
