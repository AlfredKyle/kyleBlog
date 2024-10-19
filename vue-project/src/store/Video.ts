import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'

/* export const useVideoStore = defineStore('video', {
  state: () => ({
    level: 'high'
  }),
  actions: {
    changeVideoLevel(value?: string) {
      this.level = value ?? 'low'
    }
  },
  getters: {
    recommendLevel() {
      return 'media'
    }
  }
})
 */
export const useVideoStore = defineStore('video', () => {
  let level = ref('high')
  function changeVideoLevel(value: string = 'low') {
    level.value = value
  }

  let recommendLevel = computed(() => {
    return 'media'
  })

  return { level, changeVideoLevel, recommendLevel }
})
