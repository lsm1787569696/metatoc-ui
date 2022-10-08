<template>
    <el-card class="common-cards">
        <div class="shareContainer">
            <draggable class="shareList" :list="arr2" ghost-class="ghost" :force-fallback="true" animation="300"
                group="itxst" :sort="false" @add="onEnd" filter=".undraggable">
                <template #item="{ element,index }">
                    <div class="listData" :id=index :class="element.canEdit ? 'draggable' : 'undraggable'">
                        <div class="leftContainer">
                            <div class="shareImgContainer">
                                <img :id="index" :src="element.src" alt="" v-if="element.src != ''">
                                <img :id="index" :src="element.src1" alt="" v-if="element.src1 != ''">
                            </div>
                            <div class="contentContainer">
                                {{ element.name }}
                            </div>
                        </div>
                        <div class="rightContainer">
                            <el-popconfirm class="el-button" confirm-button-text="OK" cancel-button-text="No, Thanks"
                                :icon="InfoFilled" icon-color="#626AEF" type="success" confirm-button-type="success"
                                title='是否将这条数据分享给您的好友' @confirm="confirmEvent(index)">
                                <template #reference>
                                    <el-button>分享</el-button>
                                </template>
                            </el-popconfirm>
                            <el-popconfirm class="el-button" type="warning" confirm-button-text="OK"
                                cancel-button-text="No, Thanks" :icon="InfoFilled" icon-color="#626AEF"
                                title='是否将这条数据分享给您的好友' confirm-button-type="warning" @confirm="confirmEvent(index)">
                                <template #reference>
                                    <el-button>溯源</el-button>
                                </template>
                            </el-popconfirm>
                            <!-- <el-button class="el-button" type="success" @click="share(index)">分享</el-button>
                            <el-button class="el-button" type="warning" @class="Traceability">溯源</el-button> -->
                        </div>
                    </div>
                </template>
            </draggable>
        </div>
    </el-card>
</template>
   
<script setup>

import { reactive, ref } from 'vue'
import store from '../../store';
import draggable from 'vuedraggable'
let arr2 = reactive([])

const $store = store
//  B 禁止拖动
let onEnd = () => {
    if (arr2.length == 2) {
        for (let index in arr2) {
            arr2[index].canEdit == true
        }
    }
}

// 分享
let confirmEvent = (btnIndex) => {
    for (let index in arr2) {
        if (arr2[index].name == 'contentB' && btnIndex == arr2[index].id) {
            arr2[index].src = 'src/assets/man.png'
        } else if (arr2[index].name == 'contentA' && btnIndex == arr2[index].id) {
            arr2[index].src1 = 'src/assets/woman.png'
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
    width: 45px;
    background-color: rgba(45, 95, 255, .4);
}

.leftContainer {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -20px;
}

.leftContainer img {
    width: 30px;
    height: 30px;
}


/* img[src=""] {
    opacity: 0;
} */
</style>