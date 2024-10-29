<template>
    <div v-drag="{ handle: `#${uniqueId}1, #${uniqueId}2` }"
        class="h-4/5 w-4/5 rounded-xl flex flex-row items-center overflow-hidden border shadow-xl window"
        :style="{ zIndex: zIndex }">
        <!-- 左侧 -->
        <LeftContent :unique-id="uniqueId" :state="state">
            <slot name="menu"></slot>
        </LeftContent>

        <!-- 右侧内容 -->
        <RightContent :unique-id="uniqueId">
            <slot name="content"></slot>
        </RightContent>
    </div>
</template>

<script lang=ts setup name="Window">
import LeftContent from './BigWindowContent/LeftContent.vue';
import RightContent from './BigWindowContent/RightContent.vue';

defineProps(['uniqueId', 'zIndex', 'state']);
</script>

<style scoped>
/* 修复因为V-drag导致的窗口并排问题 */
.window {
    position: absolute !important;
}
</style>