<template>
    <div
        class=" backdrop-blur-sm bg-[var(--background-blur-color)] h-full flex justify-between px-5 py-1 text-[var(--text-color)] topBar">
        <div class=" inline-flex gap-4 font-bold">
            <img src="/icons/huawei.png" style="height: 100%;">
            欢迎来到小破站
            <v-btn class="h-auto" @click="changeDarkMode">切换</v-btn>
        </div>
        <ul class="inline-flex gap-2 font-bold">
            <!-- <li>{{ currentTheme }}</li> -->
            <li>{{ currentTime }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="Navigator">
import useTime from '@/hooks/useTime';
import { useTheme } from 'vuetify';
const theme = useTheme();
function changeDarkMode() {
    document.documentElement.classList.toggle('dark-mode')
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
let { currentTime } = useTime();
</script>

<style scoped></style>