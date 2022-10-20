<template>
    <el-card class="common-cards" @click="dialogVisible = true">
        <div class="flex">
            <div class="avatar-container">
                <span class="el-avatar el-avatar--circle custom-avatar-style">
                    <el-image class="avatar-image" :src="src"></el-image>
                </span>
            </div>
            <div class="description-container">
                <div class="title-text-container">
                    <span class="title-text">
                        发送演示数据
                    </span>
                </div>
                <div class="subtext-container">
                    <span class="subtext">
                        发送一条演示数据
                    </span>
                    <br>
                    <span class="subtext">
                        验证节点健康状态
                    </span>
                </div>
            </div>
        </div>
    </el-card>
</template>

<style scoped>
.common-cards {
    margin-top: 12px;
    margin-right: 30px;
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 15px;
    padding-right: 15px;
    cursor: pointer;
}
.flex {
    display: flex;
}
.avatar-container {
    margin-top: 9px;
}
.custom-avatar-style {
    --el-avatar-size: 50px;
    background: #2276ff;
}
.avatar-image {
    height: 60%;
}
.description-container {
    margin-top: 2px;
    margin-left: 20px;
}
.title-text {
    font-size: 18px;
    font-weight: blod;
}
.subtext {
    font-size: 12px;
    color: #999;
}
</style>

<script setup>
import { ref } from 'vue';

const src = ref("./src/assets/demonstration.png")
</script>
