import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWindow = defineStore('windowMange', () => {
  let vueState = ref(false)
  let reactState = ref(false)
  function changeWindowState(name: string) {
    switch (name) {
      case 'vue':
        vueState.value = !vueState.value
        break
      case 'react':
        reactState.value = !reactState.value
    }
  }
  return { vueState, reactState, changeWindowState }
})
