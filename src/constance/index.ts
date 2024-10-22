import type { dockerItem, menuParentItem } from '@/types'

// Dock的应用程序
export const dockList: Array<dockerItem> = [
  {
    id: 'vue',
    name: 'vue',
    url: '/icons/vue.png',
    path: '/vue',
    state: 'vueState',
    zIndex: 0
  },
  {
    id: 'react',
    name: 'react',
    url: '/icons/react.png',
    path: '/react',
    state: 'reactState',
    zIndex: 2
  }
]

// Vue菜单的配置项
export const menuConfig: Array<menuParentItem> = [
  {
    id: '1',
    name: '第一个父菜单',
    icon: '1',
    children: [
      {
        id: '1',
        name: '第一个子菜单'
      }
    ]
  }
]