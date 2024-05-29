import Theme from 'vitepress/theme'

import 'vitepress-theme-demoblock/dist/theme/styles/index.css'

import Button from '../../../src/components/Button.tsx'
import Test from '../../../src/components/Test.tsx'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('Button', Button)
    app.component('Test', Test)

    app.component('DemoBlock', DemoBlock)
    app.component('Demo', Demo)
    // app is the Vue 3 app instance from `createApp()`.
    // app.component()
  },
}
