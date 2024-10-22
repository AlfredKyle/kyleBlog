<template>
    <MenuItem :icon-src="imgUrl">App Store</MenuItem>
</template>

<script lang=ts setup name="Menu">
import MenuItem from '@/components/MenuItem.vue';
const imgUrl = '/public/icons/appStore.png'
</script>

<style scoped></style>