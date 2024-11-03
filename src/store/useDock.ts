import { dockMode } from '@/enums'
import useConfig from '@/hooks/useConfig'
import type { dock } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDock = defineStore('dock', () => {
  // dock状态
  let dockState = ref<boolean>(true)
  // 定时器Id
  let timer = 0
  // 持续时间
  let duration = ref<number>()
  // 持续时间最大值与最小值
  const maxDuration = 10
  const minDuration = 2
  // dock模式
  let currentDockMode = ref<dockMode>()
  // 配置项
  const { updateConfig } = useConfig()

  // 监听器变量
  const dockMouseLeaveHandler = (e: Event) => hideDock()
  const dockMouseMoveHandler = (e: Event) => clearTimeout(timer)
  const windowMouseMoveHandler = (e: MouseEvent) => {
    const thresholdY = 20
    const thresholdX = 100
    const windHeight = window.innerHeight
    const windWidth = window.innerWidth
    const mouseX = e.clientX
    const mouseY = e.clientY

    // 是否接近底部
    const isNearBottom = windHeight - mouseY < thresholdY
    // 是否接近中心
    const isNearCenter = Math.abs(windWidth / 2 - mouseX) < thresholdX

    if (isNearBottom && isNearCenter) {
      showDock()
    }
  }

  // 初始化Dock
  function initialDock(savedDock: dock) {
    duration.value = savedDock.duration
    currentDockMode.value = savedDock.currentDockMode
  }
  //修改模式
  function changeDockMode(newValue: dockMode) {
    currentDockMode.value = newValue
    switch (newValue) {
      // 如果设置为隐藏模式
      case dockMode.HIDE:
        // 添加所有与模式有关的监听器
        addEventListenerAboutMode()
        // 隐藏Dock
        hideDock()
        break
      // 如果设置为显示模式
      case dockMode.SHOW:
        // 移除所有与模式有关的监听器
        removeAllEventListenerAboutMode()
        // 显示Dock
        showDock()
        break
      default:
        break
    }
    updateSavedDock()
  }
  //修改持续时间
  function setDuration(newValue: number) {
    duration.value = newValue
    updateSavedDock()
  }
  //更新保存
  function updateSavedDock() {
    const newSavedDock = {
      duration: duration.value!,
      currentDockMode: currentDockMode.value!
    }
    updateConfig('savedDock', newSavedDock)
  }
  // 初始化DockBar的样式和监听器
  function initialDockStyle() {
    addEventListenerAboutStyle()
    // 如果是隐藏模式，那么添加关于隐藏模式的监听器
    if (currentDockMode.value === dockMode.HIDE) {
      addEventListenerAboutMode()
      hideDock()
    }
  }

  // 添加与样式相关的监听器
  function addEventListenerAboutStyle() {
    document.querySelectorAll('.dockLi').forEach((li) => {
      li.addEventListener('mousemove', (e) => {
        let item = e.target as HTMLLIElement
        let itemRect = item.getBoundingClientRect()
        let offset = Math.abs((<MouseEvent>e).clientX - itemRect.left) / itemRect.width
        let prev = item.previousElementSibling || null
        let next = item.nextElementSibling || null
        let scale = 0.6

        resetScale()

        if (prev) {
          ;(<HTMLLIElement>prev).style.setProperty(
            '--scale',
            String(1 + scale * Math.abs(offset - 1))
          )
        }

        item.style.setProperty('--scale', String(1 + scale))

        if (next) {
          ;(<HTMLLIElement>next).style.setProperty('--scale', String(1 + scale * offset))
        }
      })
    })
    // 鼠标离开dock，重设缩放比例
    document.querySelector('.dock')?.addEventListener('mouseleave', (e) => {
      resetScale()
    })
  }

  // 添加与模式相关的监听器
  function addEventListenerAboutMode() {
    // 鼠标离开dock，添加计时器
    document.querySelector('.dock')?.addEventListener('mouseleave', dockMouseLeaveHandler)
    // 鼠标移入dock，清除计时器
    document.querySelector('.dock')?.addEventListener('mousemove', dockMouseMoveHandler)
    // 鼠标移到浏览器底部，显示dock栏
    window.addEventListener('mousemove', windowMouseMoveHandler)
  }

  // 删除所有监听器
  function removeAllEventListenerAboutMode() {
    document.querySelector('.dock')?.removeEventListener('mouseleave', dockMouseLeaveHandler)
    document.querySelector('.dock')?.removeEventListener('mousemove', dockMouseMoveHandler)
    window.removeEventListener('mousemove', windowMouseMoveHandler)
  }

  // 重置缩放大小
  function resetScale() {
    document.querySelectorAll('.dockLi').forEach((li) => {
      ;(<HTMLLIElement>li).style.setProperty('--scale', '1')
    })
  }

  // 恢复Dock
  function showDock() {
    dockState.value = true
  }

  // 隐藏Dock
  function hideDock() {
    timer = setTimeout(() => {
      dockState.value = false
    }, duration.value! * 1000)
  }

  return {
    dockState,
    duration,
    currentDockMode,
    maxDuration,
    minDuration,
    initialDockStyle,
    changeDockMode,
    setDuration,
    initialDock
  }
})
