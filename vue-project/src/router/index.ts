import Layout from '@/pages/layout/Layout.vue'
import VueBlog from '@/pages/vue/index.vue'
import ReactBlog from '@/pages/react/index.vue'
import { createRouter, createWebHistory } from 'vue-router'

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
  history: createWebHistory(),
  routes: [
    {
      path: '/desktop',
      name: 'desktop',
      component: Layout,
      children: [
        {
          name: 'vue',
          path: 'vue',
          component: VueBlog
        },
        {
          name: 'react',
          path: 'react',
          component: ReactBlog
        }
      ]
    },
    {
      path: '/',
      redirect: '/desktop'
    }
  ]
})

export default router
