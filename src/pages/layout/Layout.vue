<template>
    <div class="w-screen h-screen overflow-hidden">
        <!-- 顶部工具栏 -->
        <div class="fixed h-8 w-full z-[9999]">
            <Navigator></Navigator>
        </div>

        <!-- 显示内容 -->
        <div class="h-full w-full content relative">
            <Transition v-for="item in refDockList" :key="item.id">
                <Window @mousedown="bringTheWindowUp(item)"
                    v-show="windowStates[item.state as keyof typeof windowStates].value" class="window"
                    :uniqueId="item.id" :zIndex="item.zIndex" :state="item.state">
                    <template #menu>
                        <component :is="getWindowMenuComponent(item.state)"></component>
                    </template>
                    <template #content>
                        <component :is="getWindowContentComponent(item.state)"></component>
                    </template>
                </Window>
            </Transition>
        </div>

        <!-- 底部Docker -->
        <div class="fixed w-full h-16 bottom-4 flex justify-center z-[9999]">
            <DockBar></DockBar>
        </div>

    </div>

</template>

<script lang="ts" setup name="Layout">
import DockBar from '@/components/DockBar.vue';
import Navigator from '@/components/Navigator.vue';
import Window from '@/components/Window.vue';
import useComponent from '@/hooks/useComponent';
import { useWindowStore } from '@/store/useWindowStore';
import { storeToRefs } from 'pinia';
let windowStates = storeToRefs(useWindowStore())
const { refDockList, bringTheWindowUp } = useWindowStore()
const { getWindowContentComponent, getWindowMenuComponent } = useComponent()
</script>


<style scoped>
.content {
    background-image: url('/background.png');
    background-repeat: no-repeat;
    background-size: cover;
}

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