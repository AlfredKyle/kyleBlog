import { defineStore } from 'pinia'
import { ref } from 'vue'

enum Theme {
  Day = 'white',
  Dark = 'black'
}

export const useTheme = defineStore('theme', () => {
  let currentTheme = ref(Theme.Day)

  function changeTheme() {
    switch (currentTheme.value) {
      case Theme.Day:
        currentTheme.value = Theme.Dark
        break
      case Theme.Dark:
        currentTheme.value = Theme.Day
      default:
        break
    }
  }

  return { currentTheme, changeTheme }
})
