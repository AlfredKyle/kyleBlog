<template>
    <div class="w-full h-10 flex justify-center items-center gap-8 rounded cursor-pointer item" ref="menuItemRef"
        @click="changeContent">
        <!-- 左侧图标 -->
        <img :src="iconSrc" width="30px">
        <p class=" font-semibold">
            <slot></slot>
        </p>
    </div>
</template>

<script lang=ts setup name="MenuItem">
import emitter from '@/utils/emitter';
import { onMounted, ref } from 'vue';
const menuItemRef = ref<HTMLElement | null>(null);
onMounted(() => {
    const menuItem = menuItemRef.value
    if (menuItem) {
        // 悬停效果
        menuItem.addEventListener('mousemove', () => {
            menuItem.classList.add('hoverItem')
        })
        menuItem.addEventListener('mouseleave', () => {
            menuItem.classList.remove('hoverItem')
        })
        // 选中效果
        menuItem.addEventListener('click', () => {
            resetClass(menuItem)
            menuItem.classList.add('activeItem')
        })
    }

})

// 重置所有MenuItem的效果
function resetClass(currentItem: HTMLElement) {
    // 先找到父节点
    const parentNode = currentItem.parentNode as HTMLElement;
    if (parentNode) {
        parentNode.querySelectorAll('.item').forEach(item => {
            (item as HTMLElement).classList.remove('activeItem', 'hoverItem')
        })
    }
}

// 点击菜单，窗口右边的内容进行切换
function changeContent() {
    // 触发事件，事件的名称为“父Id-子Name”
    emitter.emit(`${props.parentMenu}`, { name: props.name, itemId: props.itemId })
}
const props = defineProps(['iconSrc', 'itemId', 'parentMenu', 'name'])
</script>

<style scoped>
.activeItem {
    background-color: #3b83f659;
    color: white;
}

.hoverItem {
    background-color: #3b83f63c;
    color: white;
    opacity: 0.5;
}
</style>