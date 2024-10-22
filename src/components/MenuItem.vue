<template>
    <div class=" w-full h-10 flex justify-start items-center gap-5 hover:bg-gray-500/[.5] rounded cursor-pointer">
        <!-- 左侧图标 -->
        <img :src="iconSrc" width="35px">
        <p class=" text-[var(--text-color)]">
            <slot></slot>
        </p>
    </div>
</template>

<script lang=ts setup name="MenuItem">
defineProps(['iconSrc'])
</script>

<style scoped></style>