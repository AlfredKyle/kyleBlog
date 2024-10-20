import dayjs from 'dayjs'
import { ref } from 'vue'

export default function () {
  let currentTime = ref('00:00:00')
  setInterval(updateTime(), 1000)

  // 更新时间
  function updateTime() {
    currentTime.value = dayjs(new Date()).format('HH:MM:ss')
    return updateTime
  }

  return { currentTime }
}
