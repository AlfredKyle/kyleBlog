<template>
    <div class="h-full flex-1 overflow-y-auto bg-[var(--background-color)] p-4 flex flex-col text-[var(--text-color)]">
        <!-- 标题部分 -->
        <div class="h-10 leading-10 border-b-2 font-bold text-lg" :id="`${uniqueId}2`">
            {{ title ? title : '开始' }}
        </div>
        <!-- 内容部分 -->
        <div class="content flex-1 mt-2 overflow-y-auto">
            <component :is="contentComponent" v-if="contentComponent"></component>
            <Empty v-else></Empty>
        </div>
    </div>
</template>

<script lang=ts setup>
import emitter from '@/utils/emitter';
import { onUnmounted, ref, shallowRef } from 'vue';
import Empty from '../Empty/Empty.vue';

const { uniqueId, correspondingMenu, getComponentFunc } = defineProps(['uniqueId', 'correspondingMenu', 'getComponentFunc'])
let contentComponent = shallowRef();
let title = ref('');

// 监听对应的菜单
emitter.on(correspondingMenu, (props: any) => {
    contentComponent.value = getComponentFunc(<string>props.itemId);
    title.value = <string>props.name;
})

// 卸载组件
onUnmounted(() => {
    // 取消监听
    emitter.off(correspondingMenu)
})

// 依赖注入uniqueId
</script>

<style scoped></style>