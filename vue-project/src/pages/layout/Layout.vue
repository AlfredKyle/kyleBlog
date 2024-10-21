<template>
    <div class="w-screen h-screen overflow-hidden">
        <!-- 顶部工具栏 -->
        <div class="fixed h-8 w-full z-10">
            <Navigator></Navigator>
        </div>

        <!-- 显示内容 -->
        <div class=" bg-red-500 h-full w-full content">
            <Transition v-for="item in dockList" :key="item.id">
                <Window v-show="windowStates[item.state as keyof typeof windowStates].value" class="window"
                    :uniqueId="item.id" :zIndex="item.zIndex">
                    <RouterView></RouterView>
                </Window>
            </Transition>
        </div>

        <!-- 底部Docker -->
        <div class=" fixed w-full h-16 bottom-4 flex justify-center z-10">
            <DockBar></DockBar>
        </div>

    </div>

</template>

<script lang="ts" setup name="Layout">
import DockBar from '@/components/DockBar.vue';
import Navigator from '@/components/Navigator.vue';
import Window from '@/components/Window.vue';
import { useWindow } from '@/store/Window';
import { storeToRefs } from 'pinia';
import { dockList } from '@/constance';
let windowStates = storeToRefs(useWindow())
</script>


<style scoped>
.content {
    background-image: url('/background.png');
    background-repeat: no-repeat;
    background-size: cover;
}

/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
    transition: all 0.4s ease;
}

.v-enter-from,
.v-leave-to {
    scale: 0.4;
    opacity: 0;
}
</style>