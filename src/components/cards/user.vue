<template>
    <el-card class="common-cards">
        <img src="../../assets/man.png" alt="" @click="changeComponent()">
        <img src="../../assets/woman.png" alt="" @click="changeComponent1()">
    </el-card>
    <keep-alive>
        <component :is="comName">
        </component>
    </keep-alive>

</template>

<script setup>
import { reactive, ref } from 'vue';
import contentArea from './contentArea.vue';
import user from './user.vue'
import share from './share.vue'
let comName = ref(share)
let changeComponent = () => {
    comName.value = contentArea
}
let changeComponent1 = () => {
    comName.value = share
}

</script>

<style scoped>
.common-cards {
    margin-top: 12px;
    margin-right: 45px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    justify-content: center;
    align-content: center;
}

img {
    width: 100px;
    height: 100px;
    cursor: pointer
}
</style>

