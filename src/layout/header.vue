<template>
    <div class="header">
        <el-row>
            <el-col class="header-left" :span="5" :offset="1">
                <div class="header-left-container">
                    <el-image class="header-left-image" :src="headerImageSrc" :fit="headerImageFit"></el-image>
                    <div class="header-left-text-container">
                        <span class="header-left-text">
                            MetaTOC
                        </span>
                    </div>
                </div>
            </el-col>

            <el-col class="header-right" :span="17">
                <el-button class="header-right-button" size="large" @click="openGitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" style="color: #F56C6C;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path></svg>
                    <span class="header-right-button-text">Sponsor</span>
                </el-button>

                <el-button class="header-right-button" size="large" @click="openGitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                    <span class="header-right-button-text">Source Code</span>
                </el-button>
            </el-col>

            <!-- <el-select v-model="value" class="m-2" placeholder="Select" size="large" style="margin-top: 6px; margin-left: 12px; width: 150px;">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </el-select> -->
        </el-row>
    </div>
</template>

<style scoped>
.header {
  border-bottom: 1px solid var(--el-border-color);
  padding-bottom: 6px;
}
.header-left-container {
    display: flex;
}
.header-left-image {
    width: 56px;
    height: 56px;
}
.header-left-text-container {
    margin-top: 14px;
    margin-left: 10px;
}
.header-left-text {
    font-size: 18px;
    font-weight: bold;
}
.header-right-button {
    margin-top: 8px;
    padding-left: 12px;
    padding-right: 12px;
    margin-left: 6px;
    margin-right: 6px;
    float: right;
}
.header-right-button-text {
    padding-left: 5px;
    margin-top: 2px;
}
</style>

<script>
import { ref } from 'vue';

export default {
    setup() {
        return {
            headerImageSrc: ref("./src/assets/logo.png")
        }
    }
}
</script>