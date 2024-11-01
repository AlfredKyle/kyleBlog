<template>
    <div class="relative flex w-full h-full justify-center">
        <v-sparkline :auto-line-width="autoLineWidth" :fill="fill" :gradient="gradient" :gradient-direction="'top'"
            :line-width="width" :model-value="value" :padding="padding" :smooth="true" :stroke-linecap="lineCap"
            :type="'trend'" auto-draw class=" opacity-50"></v-sparkline>
        <span
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  font-black tracking-widest flex justify-center items-center flex-col gap-2">
            <p class="text-6xl">让我们开始吧</p>
            <p class="text-xl">Let's Start!</p>
            <p class="text-sm">点击左边的菜单栏开始你的探索之路</p>
        </span>
    </div>

    <!-- <v-empty-state headline="让我们开始吧" text="点击左边的菜单栏开始你的探索之路" title="Let's Start!">
    </v-empty-state> -->
</template>

<script lang=ts setup name="Empty">
</script>

<!-- 图标数据 -->
<script lang="ts">
const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
]

export default {
    data: () => ({
        width: 2,
        radius: 10,
        padding: 8,
        lineCap: 'round',
        gradient: gradients[5],
        value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
        gradientDirection: 'top',
        gradients,
        fill: false,
        type: 'trend',
        autoLineWidth: false,
    }),
}
</script>

<style scoped></style>


<style>
.v-empty-state__media {
    padding-bottom: 50px;
}
</style>