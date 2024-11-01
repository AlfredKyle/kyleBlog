<template>
    <v-empty-state headline="KyleS" :image="logo" title="类MacOS的博客">
        <v-container>
            <v-row>
                <v-col cols="12" md="6">
                    <v-card prepend-icon="mdi-github" target="_blank" text="来KyleS的Github仓库看看" title="Source"></v-card>
                </v-col>

                <v-col>
                    <v-card prepend-icon="mdi-video" target="_blank" text="来看看作者的Bilibili主页" title="哔哩哔哩"></v-card>
                </v-col>

                <v-col cols="12" md="6">
                    <v-card prepend-icon="mdi-qqchat" target="_blank" text="来QQ和作者聊聊" title="QQ"></v-card>
                </v-col>

                <v-col cols="12" md="6">
                    <v-card prepend-icon="mdi-wechat" target="_blank" text="来微信和作者聊聊" title="微信"></v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-empty-state>
</template>

<script lang=ts setup name="About">
import logo from '/icons/mygo.png'
</script>

<style scoped></style>