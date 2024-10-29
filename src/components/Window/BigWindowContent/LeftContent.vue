<template>
    <div class="h-full w-48 bg-[var(--background-blur-color)] p-4 flex flex-col backdrop-blur-xl gap-4">
        <!-- 上方工具栏 -->
        <div class=" flex justify-start" :id="`${uniqueId}1`">
            <v-btn density="compact" @click="handleCloseWindow(state)" icon="mdi-close" color="red"
                class="buttonClass"></v-btn>
            <v-btn density="compact" icon="mdi-minus" color="yellow" class="buttonClass"></v-btn>
            <v-btn density="compact" icon="mdi-unfold-more-horizontal" color="grey" class="buttonClass"></v-btn>
        </div>
        <!-- 中间搜索框 -->
        <div class="">
            <v-text-field label="搜索" variant="outlined" hint="输入您想搜索的内容" density="compact"
                prepend-inner-icon="mdi-magnify" clearable></v-text-field>
        </div>
        <!-- 下方子菜单 -->
        <div class="flex-1 w-full overflow-y-auto">
            <slot></slot>
        </div>
    </div>
</template>

<script lang=ts setup>
import { useWindowStore } from '@/store/useWindowStore';

const { changeWindowState } = useWindowStore();
function handleCloseWindow(windowState: string) {
    changeWindowState(windowState);
}
defineProps(['uniqueId', 'state']);
</script>

<style scoped>
.buttonClass {
    scale: 0.75;
}
</style>