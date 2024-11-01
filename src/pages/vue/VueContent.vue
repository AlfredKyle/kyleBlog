<template>
    <!-- 标题部分 -->
    <div class="h-10 leading-10 border-b-2" :id="`${uniqueId}2`">
        {{ title }}
    </div>
    <!-- 内容部分 -->
    <div class="content flex-1 mt-2">
        <component :is="contentComponent"></component>
    </div>
</template>

<script lang=ts setup name="VueContent">
import useComponent from '@/hooks/useComponent';
import emitter from '@/utils/emitter';
import { inject, ref, shallowRef } from 'vue';
const correspondingMenu = 'SettingsMenu';
let title = ref('');
const { getSettingsContentComponent } = useComponent();
let contentComponent = shallowRef();
// 监听对应的菜单
emitter.on(correspondingMenu, (props: any) => {
    contentComponent.value = getSettingsContentComponent(<string>props.itemId);
    title.value = <string>props.name;
})
const uniqueId = inject('uniqueId');
</script>

<style scoped></style>