<template>
    <v-card title="Dock设定" variant="flat" hover>
        <v-form class="px-5">
            <v-select prefix="模式" variant="outlined" :items="dockModeList" item-title="title" item-value="value"
                v-model="currentDockMode" density="compact" @update:modelValue="changeValue"></v-select>
            <v-slider v-model="duration" :max="maxDuration" :min="minDuration" :step="1"
                v-if="currentDockMode === dockMode.HIDE" label="显示时间(s)" color="green"
                @update:modelValue="changeDuration" type="number">
                <template v-slot:append>
                    <v-text-field v-model="duration" density="compact" style="width: 80px" type="number"
                        :max="maxDuration" :min="minDuration" variant="outlined" hide-details disabled></v-text-field>
                </template>
            </v-slider>
        </v-form>
    </v-card>

</template>

<script lang=ts setup name="Dock">
import { dockMode } from '@/enums';
import { useDock } from '@/store/useDock';
import { storeToRefs } from 'pinia';
// 持续时间
const dockStore = useDock();
const { duration, currentDockMode } = storeToRefs(dockStore)
const { maxDuration, minDuration, setDuration, changeDockMode } = dockStore;
const dockModeList = [
    {
        title: '智能隐藏',
        value: dockMode.HIDE,
    },
    {
        title: '始终显示',
        value: dockMode.SHOW,
    }
]

// 修改下拉框的值
function changeValue(newValue: dockMode) {
    changeDockMode(newValue);
}

// 修改滑块的值
function changeDuration(newValue: number) {
    setDuration(newValue);
}
</script>

<style scoped></style>