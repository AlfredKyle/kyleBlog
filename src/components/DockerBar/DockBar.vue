<template>
    <Transition>
        <div class="fixed w-full h-16 bottom-4 flex justify-center z-[9999]" v-show="dockState">
            <div
                class=" p-2 inline-flex justify-center items-center gap-2 rounded-2xl backdrop-blur-sm bg-[var(--background-blur-color)] dock">
                <template v-for="item in refDockList" :key="item.name">
                    <v-tooltip :text="item.name" location="top">
                        <template v-slot:activator="{ props }">
                            <img class="dockLi" :src="item.url" @click="goTo(item)" v-bind="props">
                            </img>
                        </template>
                    </v-tooltip>
                </template>
            </div>
        </div>
    </Transition>
</template>

<script lang="ts" setup name="DockBar">
import { useDock } from '@/store/useDock';
import { useWindowStore } from '@/store/useWindowStore';
import type { dockerItem } from '@/types';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

let { changeWindowState } = useWindowStore();

const { refDockList, bringTheWindowUp } = useWindowStore();
const dockSotre = useDock();
const { dockState } = storeToRefs(dockSotre);
const { initialDockStyle } = dockSotre;

/* 打开窗口 */
function goTo(item: dockerItem) {
    // 修改window的zindex
    bringTheWindowUp(item);
    // 改变管理window的状态变量
    changeWindowState(item.state);
}

onMounted(() => {
    // 初始化DockBar样式
    initialDockStyle();
})

</script>

<style scoped>
.dock {
    --scale: 1;
    display: inline-flex;
}

.dockLi {
    cursor: pointer;
    position: relative;
    top: calc((4rem * var(--scale) - 4rem) / 2*-1);
    transition: 15ms all ease-out;
    flex-wrap: wrap;
    height: calc(4rem * var(--scale));
}

.v-enter-active,
.v-leave-active {
    transition: all 0.4s ease;
}

.v-enter-from,
.v-leave-to {
    transform: translateY(calc(4rem + 1rem));
}
</style>