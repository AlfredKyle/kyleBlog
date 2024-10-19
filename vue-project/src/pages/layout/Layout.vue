<template>
    <div class="navigator">
        <Navigator></Navigator>
    </div>

    <div class="content">
        <RouterView></RouterView>
    </div>

    <div class="dockerBar">
        <DockerBar></DockerBar>
    </div>
</template>

<script lang="ts" setup name="Layout">
import DockerBar from '@/components/DockerBar.vue';
import Navigator from '@/components/Navigator.vue';


</script>


<style scoped></style>