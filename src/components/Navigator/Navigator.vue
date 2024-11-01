<template>
    <div
        class=" backdrop-blur-sm bg-[var(--background-blur-color)] h-full flex justify-between px-5 py-1 text-[var(--text-color)] topBar">
        <div class=" inline-flex gap-4 font-bold">
            <img src="/icons/mygo.png" style="height: 100%;" class=" cursor-pointer">
            KyleS
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
let { currentTime } = useTime();
</script>

<style scoped></style>