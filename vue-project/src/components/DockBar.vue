<template>
    <div class=" p-2 inline-flex justify-center items-center gap-2 rounded-2xl backdrop-blur-sm bg-black/[0.2] dock">
        <template v-for="item in dockList" :key="item.name">
            <v-tooltip :text="item.name" location="top">
                <template v-slot:activator="{ props }">
                    <img class="dockLi" :src="item.url" @click="goTo(item)" v-bind="props">
                    </img>
                </template>
            </v-tooltip>
        </template>
    </div>

</template>

<script lang="ts" setup name="DockBar">
import { useWindow } from '@/store/Window';
import type { navigatorItem } from '@/types';
import { onMounted } from 'vue';
import { dockList } from '@/constance';

let { changeWindowState } = useWindow();

/* 路由跳转 */
function goTo(item: navigatorItem) {
    console.log(item);
    changeWindowState(item.name);
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

    document.querySelector('.dock')?.addEventListener('mouseleave', e => {
        resetScale();
    })
})

/* 重置缩放大小 */
function resetScale() {
    document.querySelectorAll('.dockLi').forEach(li => {
        (<HTMLLIElement>li).style.setProperty('--scale', '1');
    })
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
</style>