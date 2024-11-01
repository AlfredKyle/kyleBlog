<template>
    <div class="w-screen h-screen overflow-hidden">
        <!-- 顶部工具栏 -->
        <div class="fixed h-8 w-full z-[9999]">
            <Navigator></Navigator>
        </div>

        <!-- 显示内容 -->
        <div class="h-full w-full content relative flex justify-center items-center">
            <Transition name="windowBounce" v-for="item in refDockList" :key="item.id">
                <Window @mousedown="bringTheWindowUp(item)"
                    v-if="windowStates[item.state as keyof typeof windowStates].value" class="window"
                    :uniqueId="item.id" :zIndex="item.zIndex" :state="item.state"
                    :correspondingMenu="item.correspondingMenu" :getComponentFunc="item.getComponentFunc">
                    <template #menu>
                        <component :is="getWindowMenuComponent(item.state)"></component>
                    </template>
                </Window>
            </Transition>
        </div>

        <!-- 底部Docker -->
        <DockBar></DockBar>

    </div>

</template>

<script lang="ts" setup name="Layout">
import DockBar from '@/components/DockerBar/DockBar.vue';
import Navigator from '@/components/Navigator/Navigator.vue';
import Window from '@/components/Window/Window.vue';
import useComponent from '@/hooks/useComponent';
import useConfig from '@/hooks/useConfig';
import { useWindowStore } from '@/store/useWindowStore';
import { storeToRefs } from 'pinia';
let windowStates = storeToRefs(useWindowStore())
const { refDockList, bringTheWindowUp } = useWindowStore()
const { getWindowMenuComponent } = useComponent()
const { initialConfig } = useConfig();

// 初始化配置项
initialConfig()
</script>


<style scoped>
.content {
    background-image: url('/background.png');
    background-repeat: no-repeat;
    background-size: cover;
}

.windowBounce-enter-active {
    animation: bounce-in 0.5s ease;
}

.windowBounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.05);
    }

    100% {
        transform: scale(1);
    }
}
</style>