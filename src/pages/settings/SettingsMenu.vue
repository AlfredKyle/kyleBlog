<template>
    <Menu :menuList="settingsMenuConfig" :menuId="menuId"></Menu>
</template>

<script lang=ts setup name="SettingsMenu">
import Menu from '@/components/Menu/Menu.vue';
// menuId用于确定当前menu是在哪一个窗口中
const menuId = 'settingsMenu';
import { settingsMenuConfig } from '@/constance';

</script>

<style scoped></style>