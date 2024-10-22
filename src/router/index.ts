import Layout from '@/pages/layout/Layout.vue'
import VueContent from '@/pages/vue/VueContent.vue'
import ReactContent from '@/pages/react/ReactContent.vue'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

/* const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/newGame',
      component: NewGame
    },
    {
      path: '/continueGame',
      component: ContinueGame
    },
    {
      path: '/trophy',
      component: Trophy
    },
    {
      path: '/settings',
      component: Settings,
      children: [
        {
          name: 'video',
          path: 'video',
          component: Video,
          props(route) {
            return route.query
          }
        },
        {
          name: 'audio',
          path: 'audio',
          component: Audio,
          props(route) {
            return route.query
          }
        },
        {
          name: 'advanced',
          path: 'advanced',
          component: Advanced,
          props(route) {
            return route.query
          }
        }
      ]
    },
    {
      path: '/exit',
      component: Exit
    },
    {
      path: '/',
      redirect: '/newGame'
    }
  ]
}) */

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
