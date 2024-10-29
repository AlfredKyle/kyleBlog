<template>
    <div class="h-full flex-1 overflow-y-auto bg-[var(--background-color)] p-4 flex flex-col text-[var(--text-color)]">
        <div class="h-10 leading-10 border-b-2" :id="`${uniqueId}2`">
            Title
        </div>
        <div class="content flex-1 mt-2">
            <slot></slot>
        </div>
    </div>
</template>

<script lang=ts setup>
defineProps(['uniqueId'])
</script>

<style scoped></style>