<template>
    <el-card class="common-cards">
        <div class="shareContainer">
            <draggable class="shareList" :list="arr2" ghost-class="ghost" :force-fallback="true" animation="300"
                group="itxst" :sort="false" @add="onEnd" filter=".undraggable">

                <template #item="{ element,index }">
                    <div class="listData" :id=index :class="element.canEdit ? 'draggable' : 'undraggable'">
                        <div class="leftContainer">
                            <div class="shareImgContainer">
                                <img :src="element.src" alt="">
                                <img :src="element.src1" alt="">
                            </div>
                            <div class="contentContainer">
                                {{ element.name }}
                            </div>
                        </div>
                        <div class="rightContainer">
                            <el-button class="el-button" type="success">分享</el-button>
                            <el-button class="el-button" type="warning">溯源</el-button>
                        </div>
                    </div>
                </template>
            </draggable>
        </div>
    </el-card>
</template>
   
<script setup>

import { reactive } from 'vue'
import draggable from 'vuedraggable'
let arr2 = reactive([])

//  B 禁止拖动
let onEnd = () => {
    if (arr2.length == 2) {
        for (let index in arr2) {
            arr2[index].canEdit == true
        }
    }
}

</script>
<style scoped>
.common-cards {
    margin-top: 12px;
    margin-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
    height: 146px;
}

.shareContainer {
    display: flex;
}

.shareList {
    display: flex;
    width: 400%;
    margin: 0 40px;
}

.listData {
    border: 1px solid black;
    width: 200px;
    height: 100%;
    display: flex;
    margin: 0 40px;
}

.rightContainer {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 20%;
}

.rightContainer .el-button {
    margin: 10px;
}

.leftContainer {
    width: 70%;
    height: 100%;
}

.leftContainer img {
    width: 30px;
    height: 30px;
}
</style>