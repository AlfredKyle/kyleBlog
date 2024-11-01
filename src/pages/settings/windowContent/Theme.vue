<template>
    <v-card title="主题设定" variant="flat" hover>
        <v-radio-group inline v-model="radioCurrentTheme" @update:model-value="changeValue">
            <ImgRadio v-for="(item, index) in themeList" :key="index" color="success" :value="item.value"
                :label="item.label" :img-url="item.imgUrl"></ImgRadio>
        </v-radio-group>
    </v-card>

</template>

<script lang=ts setup name="Theme">
import ImgRadio from '@/components/EditedVuetify/ImgRadio.vue';
import type { theme } from '@/enums';
import { useTheme } from '@/store/useTheme';
import { ref } from 'vue';
const { themeList, currentTheme } = useTheme();
const radioCurrentTheme = ref(currentTheme);
const { changeTheme } = useTheme();
function changeValue(newValue: theme) {
    changeTheme(newValue);
}
</script>

<style scoped>
:deep(.v-selection-control-group--inline) {
    justify-content: space-evenly;
}
</style>