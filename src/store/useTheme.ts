import { defineStore } from 'pinia'
import { ref } from 'vue'
import { themeList } from '@/constance'
import { theme } from '@/enums'
import { useTheme as vuetifyTheme } from 'vuetify'
import { teal } from 'vuetify/util/colors'

export const useTheme = defineStore('useTheme', () => {
  // vuetify组件的主题
  const vuetifytheme = vuetifyTheme()
  // 系统主题
  const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
  // 当前主题
  let currentTheme = ref()
  function changeTheme(target: theme) {
    //console.log(currentTheme.value, target)
    // 如果现在的主题与目标主题一样，则不做操作
    if (currentTheme.value === target) {
      return
    }
    currentTheme.value = target
    localStorage.setItem('theme', currentTheme.value)
    switch (target) {
      case theme.LIGHT:
        document.documentElement.className = 'light'
        vuetifytheme.global.name.value = 'light'
        break
      case theme.DARK:
        document.documentElement.className = 'dark'
        vuetifytheme.global.name.value = 'dark'
        break
      case theme.AUTO:
        applyAutoTheme()
        break
      default:
        break
    }
  }

  // 主题自动模式
  function applyAutoTheme() {
    if (currentTheme.value === theme.AUTO) {
      if (systemDarkMode.matches) {
        document.documentElement.className = 'dark'
        vuetifytheme.global.name.value = 'dark'
      } else {
        document.documentElement.className = 'light'
        vuetifytheme.global.name.value = 'light'
      }
    }
  }

  // 监听系统主题的变化
  systemDarkMode.addEventListener('change', applyAutoTheme)

  // 初始化主题
  function initialTheme() {
    // 获取保存的主题，如果没有则使用LIGHT模式
    const savedTheme = (localStorage.getItem('theme') as theme) || theme.AUTO
    console.log(savedTheme, '?')
    changeTheme(savedTheme)
  }

  return { currentTheme, themeList, changeTheme, initialTheme }
})
