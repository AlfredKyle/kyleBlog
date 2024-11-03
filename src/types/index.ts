import type { clockStyle, dockMode, theme } from '@/enums'

/** docker菜单item
 * id：唯一标识符
 * name：显示的名称
 * url：对应的图标url
 * zIndex：弹出窗口的zIndex大小
 * correspondingMenu：弹出窗口对应的菜单名
 * getComponentFunc：获取弹出窗口中子内容函数
 */
export interface dockerItem {
  id: string
  name: string
  url: string
  state: string
  zIndex: number
  correspondingMenu: string
  getComponentFunc: Function
}

/** 窗口菜单Item
 * id：唯一标识符
 * name：显示的名称
 * icon：图标
 */
export interface menuItemType {
  id: string
  name: string
  icon: string
}

/** 配置项
 * savedTheme: 保存的主题
 * savedClockStyle：保存的时钟格式
 * savedDock：保存的Dock
 */
export interface configType {
  savedTheme: theme
  savedClockStyle: clockStyle
  savedDock: dock
}

/** Dock配置项对象
 * duration: 持续时间
 * currentDockMode：当前的dock模式
 */
export interface dock {
  duration: number
  currentDockMode: dockMode
}
