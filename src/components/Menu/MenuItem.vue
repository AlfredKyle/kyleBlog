<template>
    <div class="w-full h-10 flex justify-center items-center gap-5 rounded cursor-pointer">
        <!-- 左侧图标 -->
        <img :src="iconSrc" width="30px">
        <p class=" font-semibold">
            <slot></slot>
        </p>
    </div>
</template>

<script lang=ts setup name="MenuItem">
defineProps(['iconSrc'])
</script>

<style scoped></style>