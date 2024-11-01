<template>
    <div class="flex justify-center flex-col items-center gap-4">
        <v-img :width="200" cover :src="imgUrl" class="rounded">
            <div class="w-full h-full flex justify-center items-center">
                <div v-if="value === theme.LIGHT"
                    class="w-3/4 h-3/4 backdrop-blur-sm bg-white/[0.3] rounded flex justify-center items-center font-bold text-black">
                    <v-icon icon="mdi-weather-sunny"></v-icon>LIGHT
                </div>
                <div v-else-if="value === theme.DARK"
                    class="w-3/4 h-3/4 backdrop-blur-sm bg-black/[0.3] rounded flex justify-center items-center font-bold text-white">
                    <v-icon icon="mdi-weather-night"></v-icon>NIGHT
                </div>
                <div v-else-if="value === theme.AUTO"
                    class="w-3/4 h-3/4 backdrop-blur-sm bg-[--background-blur-color] rounded flex justify-center items-center font-bold">
                    <v-icon icon="mdi-theme-light-dark"></v-icon>AUTO
                </div>
            </div>
        </v-img>
        <v-radio :color="color" :label="label" :value="value"></v-radio>
    </div>
</template>

<script lang=ts setup>
import { theme } from '@/enums';
defineProps(['imgUrl', 'color', 'label', 'value'])
</script>

<style scoped></style>