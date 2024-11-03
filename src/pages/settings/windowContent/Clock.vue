<template>
    <v-card title="时钟设定" variant="flat" hover>
        <v-form class="px-5">
            <div class="w-full bg-[--background-color] mb-4 flex justify-center text-3xl p-4 rounded font-bold">
                {{ demoClock }}
            </div>
            <v-select prefix="样式" variant="outlined" :items="clockStyleList" item-title="title" item-value="value"
                v-model="currentClockStyle" density="compact" @update:modelValue="changeValue"></v-select>
        </v-form>
    </v-card>
</template>

<script lang=ts setup name="Clock">
import { onMounted, ref } from 'vue';
import dayjs from 'dayjs';
import { useTime } from '@/store/useTime';
import type { clockStyle as interfaceClockStyle } from '@/enums';
import { storeToRefs } from 'pinia';
onMounted(() => {
    initialSettings();
})

// 下拉框选项
const clockStyleList = [
    {
        title: '时:分:秒',
        value: 'HH:mm:ss',
    },
    {
        title: '时:分',
        value: 'HH:mm',
    }
]
// 演示时钟的时间值
const demoClockValue = '2018-04-05T03:45:14.000Z'
// 演示时钟
let demoClock = ref<string>('')
// 修改时钟样式
const timeStore = useTime();
const { currentClockStyle } = storeToRefs(timeStore);
const { changeClockStyle } = timeStore;

// 改变下拉框的值
function changeValue(newValue: string) {
    // 改变演示时钟样式
    demoClock.value = dayjs(demoClockValue).format(newValue);
    // 改变实际的时钟样式
    changeClockStyle(newValue as interfaceClockStyle);
}

// 初始化时钟设置
function initialSettings() {
    // 初始化演示时钟
    demoClock.value = dayjs(demoClockValue).format(currentClockStyle.value)
}
</script>

<style scoped></style>