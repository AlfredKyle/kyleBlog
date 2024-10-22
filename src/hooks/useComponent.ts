import { windowStateList } from '@/enums'
import VueContent from '@/pages/vue/VueContent.vue'
import ReactContent from '@/pages/react/ReactContent.vue'
import VueMenu from '@/pages/vue/VueMenu.vue'
import ReactMenu from '@/pages/react/ReactMenu.vue'

export default function () {
  //获取窗口的内容
  function getWindowContentComponent(name: string) {
    let componenet
    switch (name) {
      case windowStateList.VUE:
        componenet = VueContent
        break
      case windowStateList.REACT:
        componenet = ReactContent
        break
      default:
        break
    }
    return componenet
  }

  //获取窗口的菜单
  function getWindowMenuComponent(name: string) {
    let componenet
    switch (name) {
      case windowStateList.VUE:
        componenet = VueMenu
        break
      case windowStateList.REACT:
        componenet = ReactMenu
        break
      default:
        break
    }
    return componenet
  }
  return { getWindowContentComponent, getWindowMenuComponent }
}
