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
import { useWindowStore } from '@/store/useWindowStore';
import type { dockerItem } from '@/types';
import { onMounted, ref } from 'vue';

let { changeWindowState } = useWindowStore();

const { refDockList, bringTheWindowUp } = useWindowStore();

let dockState = ref(true);
// 定时器
let timer = 0;
// Dock持续时间
let duration = 3;

/* 打开窗口 */
function goTo(item: dockerItem) {
    // 修改window的zindex
    bringTheWindowUp(item);
    // 改变管理window的状态变量
    changeWindowState(item.state);
}

onMounted(() => {
    document.querySelectorAll('.dockLi').forEach(li => {
        li.addEventListener('mousemove', e => {
            let item = e.target as HTMLLIElement
            let itemRect = item.getBoundingClientRect()
            let offset = Math.abs((<MouseEvent>e).clientX - itemRect.left) / itemRect.width
            let prev = item.previousElementSibling || null;
            let next = item.nextElementSibling || null;
            let scale = 0.6

            resetScale();

            if (prev) {
                (<HTMLLIElement>prev).style.setProperty('--scale', String(1 + scale * Math.abs(offset - 1)));
            }

            item.style.setProperty('--scale', String(1 + scale));

            if (next) {
                (<HTMLLIElement>next).style.setProperty('--scale', String(1 + scale * offset));
            }
        })
    })

    // 鼠标离开dock，重设缩放比例并且添加计时器
    document.querySelector('.dock')?.addEventListener('mouseleave', e => {
        resetScale();
        hideDock();
    })

    // 鼠标移入dock，清除计时器
    document.querySelector('.dock')?.addEventListener('mousemove', e => {
        clearTimeout(timer);
    })

    // 鼠标移到浏览器底部，显示dock栏
    window.addEventListener('mousemove', e => {
        const threshold = 20;
        const windHeight = window.innerHeight;
        const windWidth = window.innerWidth;
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // 是否接近底部
        const isNearBottom = windHeight - mouseY < threshold;
        // 是否接近中心
        const isNearCenter = Math.abs((windWidth / 2) - mouseX) < threshold;

        if (isNearBottom && isNearCenter) {
            showDock();
        }
    })

    // 隐藏Dock
    hideDock();
})

/* 重置缩放大小 */
function resetScale() {
    document.querySelectorAll('.dockLi').forEach(li => {
        (<HTMLLIElement>li).style.setProperty('--scale', '1');
    })
}

/* 恢复Dock */
function showDock() {
    dockState.value = true;
}

/* 隐藏Dock */
function hideDock() {
    timer = setTimeout(() => {
        dockState.value = false
    }, duration * 1000);
}

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