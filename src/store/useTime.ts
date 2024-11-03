import { clockStyle } from '@/enums'
import dayjs from 'dayjs'
import { defineStore } from 'pinia'
import { onUnmounted, ref } from 'vue'
import useConfig from '@/hooks/useConfig'

export const useTime = defineStore('time', () => {
  // 现在的时间
  let currentTime = ref('loading...')
  // 时钟样式
  let currentClockStyle = ref('')
  // 计时器编号
  let intervalId: number | undefined
  // 配置项
  const { updateConfig } = useConfig()

  // 更新时间
  function updateTime() {
    if (currentClockStyle.value) {
      currentTime.value = dayjs(new Date()).format(currentClockStyle.value)
    }
  }

  // 初始化时间
  function initialTime(savedClockStyle: clockStyle) {
    // 初始化时间格式
    currentClockStyle.value = savedClockStyle
    // 初始化时间
    updateTime()
    // 设置定时器
    intervalId = setInterval(updateTime, 1000)
  }

  // 更新时间格式
  function changeClockStyle(newValue: clockStyle) {
    //currentClockStyle.value = newValue
    updateConfig('savedClockStyle', newValue)
  }

  // 卸载计时器
  onUnmounted(() => {
    if (intervalId) {
      clearInterval(intervalId)
    }
  })

  return { currentTime, currentClockStyle, initialTime, changeClockStyle }
})
