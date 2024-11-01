import { useTheme } from '@/store/useTheme'

export default function () {
  const { initialTheme } = useTheme()
  // 初始化配置项
  function initialConfig() {
    // 初始化主题
    initialTheme()
  }
  return { initialConfig }
}
