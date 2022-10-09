<template>
    <el-card class="common-cards">
        <div class="shareContainer">
            <draggable class="shareList" :list="arr2" ghost-class="ghost" :force-fallback="true" animation="300"
                group="itxst" :sort="false" @add="onEnd" filter=".undraggable">
                <template #item="{ element,index }">
                    <div class="listData" @click="test" :id=index
                        :class="element.canEdit ? 'draggable' : 'undraggable'">
                        <div class="leftContainer">
                            <div class="shareImgContainer">
                                <img :id="index" :src="element.src" alt="" v-if="element.src != ''">
                                <img :id="index" :src="element.src1" alt="" v-if="element.src1 != ''">
                            </div>
                            <div class="contentContainer">
                                {{ element.content }}
                            </div>
                        </div>
                        <div class="rightContainer">
                            <el-popconfirm class="el-button" confirm-button-text="OK" cancel-button-text="No, Thanks"
                                :icon="InfoFilled" icon-color="#626AEF" type="success" confirm-button-type="success"
                                title='是否将这条数据分享给您的好友' @confirm="confirmEvent(element.id)">
                                <template #reference>
                                    <el-button>分享</el-button>
                                </template>
                            </el-popconfirm>
                            <el-button @click="drawer = true">溯源</el-button>
                        </div>
                    </div>
                </template>
            </draggable>
        </div>
    </el-card>

    <el-drawer v-model="drawer" title="I am the title" :with-header="false">
        <span>暂无溯源数据</span>
    </el-drawer>
</template>
   
<script setup>
import { ElMessageBox, ElMessage } from 'element-plus'
import { reactive, ref } from 'vue'
import store from '../../store';
import { useStore } from 'vuex'
import draggable from 'vuedraggable'
let arr2 = reactive([])
const drawer = ref(false)
const $store = useStore()

//  B 禁止拖动
let onEnd = () => {
    if (arr2.length == 2) {
        for (let index in arr2) {
            arr2[index].canEdit == true
        }
    }
}

// 无分享权限提示
let shareWaring = () => {
    setTimeout(() => {
        ElMessage({
            message: '暂无权限',
            type: 'waring'
        })
    }, 300)
}

//  分享成功提示
let shareSuccess = () => {
    setTimeout(() => {
        ElMessage({
            message: '分享成功!',
            type: 'success'
        })
    }, 300)
}

// 已分享提示
let shared = () => {
    ElMessageBox.alert('数据已经分享成功 !', '提示', {
        confirmButtonText: 'OK',
    })
}

// 分享
let confirmEvent = (btnIndex) => {
    for (let index in arr2) {
        if (arr2[index].content == 'Hello' && btnIndex == arr2[index].id) {
            if (arr2[index].src != '' && arr2[index].src1 != '') {
                shared()
            } else {
                if (arr2[index].src == "") {
                    if ($store.state.users.currentUser.name == 'userA') {
                        shareWaring()
                        return
                    }
                } else if (arr2[index].src1 == "") {
                    if ($store.state.users.currentUser.name == 'userB') {
                        shareWaring()
                        return
                    }
                }
                arr2[index].src = 'src/assets/man.png'
                arr2[index].src1 = 'src/assets/woman.png'
                $store.commit("blocks/shareBlock", arr2[index].id == '0' ? 'blockA' : 'blockB')
                shareSuccess()
            }
        } else if (arr2[index].content == 'World' && btnIndex == arr2[index].id) {
            if (arr2[index].src != '' && arr2[index].src1 != '') {
                shared()
            } else {
                if (arr2[index].src == "") {
                    if ($store.state.users.currentUser.name == 'userA') {
                        shareWaring()
                        return
                    }
                } else if (arr2[index].src1 == "") {
                    if ($store.state.users.currentUser.name == 'userB') {
                        shareWaring()
                        return
                    }
                }
                arr2[index].src = 'src/assets/man.png'
                arr2[index].src1 = 'src/assets/woman.png'
                $store.commit("blocks/shareBlock", arr2[index].id == '0' ? 'blockA' : 'blockB')
                shareSuccess()
            }
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
    width: 100%;
    height: 100%;
}

.shareList {
    height: 100%;
    width: 100%;
    height: 200px;
    display: flex;
    /* justify-content: center; */
    width: 100%;
    margin: 0 40px;
}

.listData {
    border: 1px solid black;
    width: 220px;
    height: 110px;
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

.contentContainer {
    position: absolute;
    top: 100px;
}

/* img[src=""] {
    opacity: 0;
} */
</style>