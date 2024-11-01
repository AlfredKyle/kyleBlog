import type { dockerItem, menuItemType } from '@/types'
import VueImgUrl from '/icons/vue.png'
import ReactImgUrl from '/icons/react.png'
import SettingsImgUrl from '/icons/settings.png'
import themeImgUrl from '/icons/theme.png'
import dockImgUrl from '/icons/dock.png'
import aboutImgUrl from '/icons/about.png'
import useComponent from '@/hooks/useComponent'
import bgImgUrl from '/background.png'
import { theme } from '@/enums'
const { getVueContentComponent, getReactContentComponent, getSettingsContentComponent } =
  useComponent()

// Dock的应用程序
export const dockList: Array<dockerItem> = [
  /*   {
    id: 'vue',
    name: 'vue',
    url: VueImgUrl,
    state: 'vueState',
    zIndex: 0,
    correspondingMenu: 'vueMenu',
    getComponentFunc: getVueContentComponent
  },
  {
    id: 'react',
    name: 'react',
    url: ReactImgUrl,
    state: 'reactState',
    zIndex: 2,
    correspondingMenu: 'reactMenu',
    getComponentFunc: getReactContentComponent
  }, */
  {
    id: 'settings',
    name: 'settings',
    url: SettingsImgUrl,
    state: 'settingsState',
    zIndex: 2,
    correspondingMenu: 'settingsMenu',
    getComponentFunc: getSettingsContentComponent
  }
]

// Settings菜单的配置项
export const settingsMenuConfig: Array<menuItemType> = [
  {
    id: 'theme',
    name: '主题',
    icon: themeImgUrl
  },
  {
    id: 'dock',
    name: 'Dock',
    icon: dockImgUrl
  },
  {
    id: 'about',
    name: '关于',
    icon: aboutImgUrl
  }
]

// 主题模式
export const themeList = [
  {
    label: '浅色模式',
    value: theme.LIGHT,
    imgUrl: bgImgUrl
  },
  {
    label: '深色模式',
    value: theme.DARK,
    imgUrl: bgImgUrl
  },
  {
    label: '自动模式',
    value: theme.AUTO,
    imgUrl: bgImgUrl
  }
]
