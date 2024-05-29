import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/icon',
    },
    {
      path: '/button',
      component: () => import('../views/ButtonView.vue'),
      name: 'button',
    },
    {
      path: '/icon',
      component: () => import('../views/IconView.vue'),
      name: 'icon',
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('../views/CardView.vue'),
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: () => import('../views/DialogView.vue'),
    },
    {
      path: '/collapse',
      name: 'collapse',
      component: () => import('../views/CollapseView.vue'),
    },
    {
      path: '/pager',
      name: 'pager',
      component: () => import('../views/PageView.vue'),
    },
    {
      path: '/tooltip',
      name: 'tooltip',
      component: () => import('../views/TooltipView.vue'),
    },
    {
      path: '/dropdown',
      name: 'dropdown',
      component: () => import('../views/DropdownView.vue'),
    },
  ],
  linkActiveClass: 'active',
})

export default router
