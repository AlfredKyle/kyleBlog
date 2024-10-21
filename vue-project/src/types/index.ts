/* docker菜单item */
export interface dockerItem {
  id: string
  name: string
  url: string
  path: string
  state: string
  zIndex: number
}

/* 窗口中菜单父Item */
export interface menuParentItem {
  id: string
  name: string
  icon: string
  children: Array<menuChildrenItem>
}

/* 窗口菜单子Item */
export interface menuChildrenItem {
  id: string
  name: string
}
