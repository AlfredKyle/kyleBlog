<template>
    <MenuItem class=" mb-2" v-for="(item, index) in menuList" :key="item.id" :iconSrc="item.icon" :itemId="item.id"
        :parentMenu="menuId" :name="item.name">
    {{ item.name }}
    </MenuItem>

</template>

<script lang=ts setup name="Menu">
import MenuItem from './MenuItem.vue';
defineProps(['menuList', 'menuId'])
</script>

<style scoped></style>