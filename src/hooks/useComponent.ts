import { windowStateList, settingsContent } from '@/enums'
import VueMenu from '@/pages/vue/VueMenu.vue'
import ReactMenu from '@/pages/react/ReactMenu.vue'
import SettingsMenu from '@/pages/settings/SettingsMenu.vue'
import Theme from '@/pages/settings/windowContent/Theme.vue'
import Dock from '@/pages/settings/windowContent/Dock.vue'
import About from '@/pages/settings/windowContent/About.vue'

export default function () {
  // 获取窗口的菜单
  function getWindowMenuComponent(name: string) {
    let componenet
    switch (name) {
      case windowStateList.VUE:
        componenet = VueMenu
        break
      case windowStateList.REACT:
        componenet = ReactMenu
        break
      case windowStateList.SETTINGS:
        componenet = SettingsMenu
      default:
        break
    }
    return componenet
  }

  // 获取Vue窗口的子内容
  function getVueContentComponent(name: string) {
    let componenet
    switch (name) {
      case settingsContent.THEME:
        componenet = Theme
        break
      case settingsContent.DOCK:
        componenet = Dock
        break
      default:
        break
    }
    return componenet
  }

  // 获取React窗口的子内容
  function getReactContentComponent(name: string) {
    let componenet
    switch (name) {
      case settingsContent.THEME:
        componenet = Theme
        break
      case settingsContent.DOCK:
        componenet = Dock
        break
      default:
        break
    }
    return componenet
  }

  // 获取设置窗口的子内容
  function getSettingsContentComponent(name: string) {
    let componenet
    switch (name) {
      case settingsContent.THEME:
        componenet = Theme
        break
      case settingsContent.DOCK:
        componenet = Dock
        break
      case settingsContent.ABOUT:
        componenet = About
        break
      default:
        break
    }
    return componenet
  }
  return {
    getWindowMenuComponent,
    getSettingsContentComponent,
    getVueContentComponent,
    getReactContentComponent
  }
}
