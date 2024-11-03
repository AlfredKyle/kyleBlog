import { defineStore } from 'pinia'
import { ref } from 'vue'
import { themeList } from '@/constance'
import { theme } from '@/enums'
import { useTheme as vuetifyTheme } from 'vuetify'
import useConfig from '@/hooks/useConfig'

export const useTheme = defineStore('useTheme', () => {
  // vuetify组件的主题
  const vuetifytheme = vuetifyTheme()
  // 系统主题
  const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
  // 配置项
  const { updateConfig } = useConfig()
  // 当前主题
  let currentTheme = ref()
  function changeTheme(target: theme) {
    // 如果现在的主题与目标主题一样，则不做操作
    if (currentTheme.value === target) {
      return
    }
    currentTheme.value = target
    // 更新配置项
    updateConfig('savedTheme', currentTheme.value)
    switch (target) {
      case theme.LIGHT:
        document.documentElement.className = theme.LIGHT
        vuetifytheme.global.name.value = theme.LIGHT
        break
      case theme.DARK:
        document.documentElement.className = theme.DARK
        vuetifytheme.global.name.value = theme.DARK
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
        document.documentElement.className = theme.DARK
        vuetifytheme.global.name.value = theme.DARK
      } else {
        document.documentElement.className = theme.LIGHT
        vuetifytheme.global.name.value = theme.LIGHT
      }
    }
  }

  // 监听系统主题的变化
  systemDarkMode.addEventListener('change', applyAutoTheme)

  // 初始化主题
  function initialTheme(savedTheme: theme) {
    // 获取保存的主题，如果没有则使用LIGHT模式
    changeTheme(savedTheme)
  }

  return { currentTheme, themeList, changeTheme, initialTheme }
})
