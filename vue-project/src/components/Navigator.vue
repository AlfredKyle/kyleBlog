<template>
    <div class="backdrop-blur-sm bg-black/[0.2] text-white h-full flex justify-between px-5 py-1">
        <div class=" inline-flex gap-4 font-bold">
            <img src="/icons/huawei.svg" style="height: 100%;">
            欢迎来到小破站
        </div>

        <!-- <v-btn density="compact" @click="changeTheme">切换</v-btn> -->

        <ul class="inline-flex gap-2 font-bold">
            <!-- <li>{{ currentTheme }}</li> -->
            <li>{{ currentTime }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="Navigator">
import useTime from '@/hooks/useTime';
import { useTheme } from '@/store/Theme';
import { storeToRefs } from 'pinia';

let { currentTime } = useTime();

const { currentTheme } = storeToRefs(useTheme());
let { changeTheme } = useTheme();
</script>

<style scoped>
ul li {
    color: v-bind('currentTheme');
    transition: all 2s ease;
}
</style>