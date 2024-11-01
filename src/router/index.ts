import Layout from '@/pages/layout/Layout.vue'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'desktop',
      component: Layout
    }
  ]
})

export default router
