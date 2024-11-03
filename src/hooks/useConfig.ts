import { clockStyle, dockMode, theme } from '@/enums'
import { useTheme } from '@/store/useTheme'
import type { configType, dock } from '@/types'
import { useTime } from '../store/useTime'
import { useDock } from '@/store/useDock'

export default function () {
  const { initialTheme } = useTheme()
  const { initialTime } = useTime()
  const { initialDock } = useDock()
  // 初始化配置项
  function initialConfig() {
    // 获取保存的配置项
    const {
      savedTheme = theme.LIGHT,
      savedClockStyle = clockStyle.STYLEA,
      savedDock = { duration: 5, currentDockMode: dockMode.HIDE }
    } = localStorage.getItem('config') ? JSON.parse(localStorage.getItem('config') as string) : {}
    initialTheme(savedTheme)
    initialTime(savedClockStyle)
    initialDock(savedDock)
  }

  // 更新配置项
  function updateConfig(type: keyof configType, newValue: configType[keyof configType]) {
    console.log(newValue, '?')
    const oldConfig = localStorage.getItem('config')
      ? JSON.parse(localStorage.getItem('config') as string)
      : {}
    const newConfig = Object.assign(oldConfig, { [type]: newValue })
    localStorage.setItem('config', JSON.stringify(newConfig))
  }
  return { initialConfig, updateConfig }
}
