import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'

const sidebar = {
  '/': [
    { text: '快速开始', link: '/', items: [] },
    {
      text: '通用',
      items: [{ text: 'Button 按钮', link: '/components/button/' }],
    },
    { text: '导航', items: [] },
    { text: '反馈', items: [] },
    {
      text: '数据录入',
      items: [{ text: 'Input 输入框', link: '/components/input/' }],
    },
    {
      text: '数据展示',
      items: [{ text: 'Tree 树', link: '/components/tree/' }],
    },
    {
      text: '布局',
      items: [{ text: 'Space 间距', link: '/components/space/' }],
    },
  ],
}
export default defineConfig({
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      // 添加插件
      // const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      // @ts-ignore
      md.use(demoBlockPlugin)
    },
  },
})
