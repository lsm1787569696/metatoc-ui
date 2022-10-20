<template>
    <div class="common-cards my-container-border-radius my-container-box-shadow my-glass">
        <el-row class="shareList">
            <el-col v-for="item in allBlocks" :key="item" :span="12" class="flex justify-content-center">
                <Transition>
                    <div v-if="item.showBlock == true" class="listData my-card-border-radius my-container-box-shadow">
                        <div class="leftContainer">
                            <div style="position: relative; padding: 20px; padding-bottom: 0px;">
                                <TransitionGroup>
                                    <el-avatar v-for="(user, index) in item.users" :key="user" :class="whitchAvatar(index)" :size="50" :src="user.avatar" />
                                </TransitionGroup>
                            </div>
                            <div style="position: relative; padding: 10px;">
                                <div v-if="item.showContent == true" style="font-weight: 700; font-size: 20px; text-align: center;" class="balance-amount">{{ item.content }}</div>
                                <div v-else-if="item.showContent == false" style="font-weight: 700; font-size: 20px; text-align: center;" class="balance-amount">No permission to view data.</div>
                            </div>
                            <div style="position: relative; text-align: center; padding: 0px; padding-bottom: 20px;">
                                <el-button @click="shareBlock(item.name)" v-if="item.showContent == true" color="#2d5fff" type="primary" round :disabled="isDisabled(item)">分享数据</el-button>
                                <el-button @click="viewTrack(item.name)" color="#2d5fff" plain round>溯源数据</el-button>
                            </div>
                        </div>
                    </div>
                </Transition>
            </el-col>
        </el-row>
    </div>

    <el-dialog v-model="dialogTableVisible" title="查看溯源数据">
        <el-table :data="gridData">
            <el-table-column property="sourceAddress" label="源钱包地址" align="center" />
            <el-table-column property="targetAddress" label="目标钱包地址" align="center" />
            <el-table-column property="doType" label="操作类型" align="center" />
            <el-table-column property="doTimestamp" label="操作时间" align="center" />
        </el-table>
    </el-dialog>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
import { reactive, ref } from 'vue'

export default {
    setup () {
        const $store = useStore()

        let allBlocks = computed(() => {
            return $store.getters["blocks/getAllBlocksInfo"]
        })
        const shareBlock = (name) => {
            $store.dispatch("blocks/shareBlock", name)
            // ElMessage({
            //     message: '【分享数据】成功',
            //     type: 'success',
            // })
        }

        return {
            allBlocks,
            shareBlock
        }
    },
    data () {
        let dialogTableVisible = ref(false)
        let gridData = []
        return {
            dialogTableVisible,
            gridData
        }
    },
    methods: {
        haveCurrentUser: function () {
            return true
        },
        whitchAvatar: function (index) {
            if (index == 0) {
                return "avatar1"
            } else if (index == 1) {
                return "avatar2"
            }
        },
        isDisabled: function (item) {
            if (item.users.length == 2) {
                return true
            } else {
                return false
            }
        },
        viewTrack: function (name) {
            this.gridData = []
            for (let index in this.allBlocks) {
                if (this.allBlocks[index].name == name) {
                    for (let indexChild in this.allBlocks[index].users) {
                        console.log(this.allBlocks[index].users[indexChild])
                        if (indexChild == 0) {
                            this.gridData[indexChild] = {
                                sourceAddress:  "-",
                                targetAddress: this.allBlocks[index].users[indexChild].address,
                                doType: "上链",
                                doTimestamp: this.allBlocks[index].users[indexChild].timestamp,
                            }
                        } else if (indexChild == 1) {
                            this.gridData[indexChild] = {
                                sourceAddress: this.allBlocks[index].users[0].address,
                                targetAddress: this.allBlocks[index].users[indexChild].address,
                                doType: "分享",
                                doTimestamp: this.allBlocks[index].users[indexChild].timestamp,
                            }
                        }
                    }
                }
            }
            this.dialogTableVisible = ref(true)
        }
    }
}
</script>

<style scoped>
@import "../../assets/css/common-style.css";

.common-cards {
    height: 30%;
}

.shareList {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%
}

.listData {
    display: flex;
    max-width: 340px;
    max-height: 220px;
    background: rgb(239,240,242);
    background: linear-gradient(90deg, rgba(239,240,242,1) 0%, rgba(227,227,227,1) 100%);
}

.leftContainer {
    width: 100%;
}

.avatar1 {
    position: relative;
    left: 0px;
}

.avatar2 {
    position: relative;
    left: -5px;
}
</style>

<style>
.el-card__body {
    margin: 0px !important;
    padding: 0px !important;
    height: 100%;
}
.el-avatar img {
    transform: translateX(0px);
}
</style>
