<template>
    <MenuItem :icon-src="imgUrl" class="item">App Store</MenuItem>
    <MenuItem :icon-src="imgUrl" class="item">App Store</MenuItem>
    <MenuItem :icon-src="imgUrl" class="item">App Store</MenuItem>
    <MenuItem :icon-src="imgUrl" class="item">App Store</MenuItem>
    <MenuItem :icon-src="imgUrl" class="item">App Store</MenuItem>
    <MenuItem :icon-src="imgUrl" class="item">App Store</MenuItem>
    <MenuItem :icon-src="imgUrl" class="item">App Store</MenuItem>
</template>

<script lang=ts setup name="Menu">
import MenuItem from '@/components/Menu/MenuItem.vue';
import imgUrl from '/icons/appStore.png';
import { onMounted } from 'vue';
onMounted(() => {
    document.querySelectorAll('.item').forEach(menuItem => {
        // 悬停效果
        menuItem.addEventListener('mousemove', e => {
            (<HTMLElement>e.currentTarget).classList.add('hoverItem')
        })
        menuItem.addEventListener('mouseleave', e => {
            (<HTMLElement>e.currentTarget).classList.remove('hoverItem')
        })
        // 选中效果
        menuItem.addEventListener('click', e => {
            let item = e.currentTarget as HTMLElement
            resetClass()
            item.classList.add('activeItem')
        })
    })
})

// 重置所有MenuItem的效果
function resetClass() {
    document.querySelectorAll('.item').forEach(menuItem => {
        (<HTMLDivElement>menuItem).classList.remove('activeItem', 'hoverItem')
    })
}
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