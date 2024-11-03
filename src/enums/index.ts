// 窗口状态
export enum windowStateList {
  VUE = 'vueState',
  REACT = 'reactState',
  SETTINGS = 'settingsState'
}

// 设置窗口子内容
export enum settingsContent {
  THEME = 'theme',
  DOCK = 'dock',
  CLOCK = 'clock',
  ABOUT = 'about'
}

// 主题模式
export enum theme {
  LIGHT = 'light',
  DARK = 'dark',
  AUTO = 'auto'
}

// 时钟样式
export enum clockStyle {
  STYLEA = 'HH:mm:ss',
  STYLEB = 'HH:mm'
}

// dock模式
export enum dockMode {
  SHOW = 'show',
  HIDE = 'hide'
}
