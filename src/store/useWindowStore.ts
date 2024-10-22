import { defineStore } from 'pinia'
import { ref } from 'vue'
import { windowStateList } from '@/enums'
import { dockList } from '@/constance'
import type { dockerItem } from '@/types'

export const useWindowStore = defineStore('windowMange', () => {
  let vueState = ref(false)
  let reactState = ref(false)
  const refDockList = ref([...dockList])

  let maxIndex: number = Math.max(...refDockList.value.map((item) => item.zIndex))

  function bringTheWindowUp(item: dockerItem) {
    const itemInList = refDockList.value.find((v) => v.id === item.id)
    if (itemInList && itemInList.zIndex < maxIndex) {
      maxIndex++
      itemInList.zIndex = maxIndex
    }
    console.log(maxIndex, itemInList?.zIndex)
  }

  function changeWindowState(name: string) {
    switch (name) {
      case windowStateList.VUE:
        vueState.value = !vueState.value
        break
      case windowStateList.REACT:
        reactState.value = !reactState.value
        break
      default:
        break
    }
  }

  return { vueState, reactState, refDockList, changeWindowState, bringTheWindowUp }
})
