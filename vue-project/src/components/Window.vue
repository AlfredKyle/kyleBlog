<template>
    <div v-drag="{ handle: `#${uniqueId}1, #${uniqueId}2` }"
        class="h-4/5 w-4/5 absolute top-16 left-32 rounded-xl flex flex-row items-center overflow-hidden">
        <!-- 左侧 -->
        <div class="h-full w-48 bg-white/[0.4] p-4 flex flex-col backdrop-blur-xl gap-4">
            <!-- 上方工具栏 -->
            <div class=" flex justify-start gap-2" :id="`${uniqueId}1`">
                <v-btn density="compact" icon="mdi-close" color="red"></v-btn>
                <v-btn density="compact" icon="mdi-minus" color="yellow"></v-btn>
                <v-btn density="compact" icon="mdi-unfold-more-horizontal" color="grey"></v-btn>
            </div>
            <!-- 中间搜索框 -->
            <div class="">
                <v-text-field label="搜索" variant="outlined" hint="输入您想搜索的内容" density="compact"
                    prepend-inner-icon="mdi-magnify" clearable></v-text-field>
            </div>
            <!-- 下方子菜单 -->
            <div class="flex-1 w-full overflow-y-auto">
            </div>
        </div>

        <!-- 右侧内容 -->
        <div class="h-full flex-1 overflow-y-auto bg-slate-100 p-4 flex flex-col">
            <div class="title h-10 leading-10 border-b-2" :id="`${uniqueId}2`">
                Title
            </div>
            <div class="content flex-1 mt-2">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script lang=ts setup name="Window">
defineProps(['uniqueId']);
</script>

<style scoped></style>