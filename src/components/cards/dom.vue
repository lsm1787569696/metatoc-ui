<template>
    <div class="chains-container1">
        <div class="chains-container2">
            <el-row>
                <el-col v-for="(item, index) in allNodes" :key="{ item, index }" :span="12" class="flex justify-content-center">
                    <div v-if="showUpperNodes(index) && item.name === 'nodeA'" class="node-container" v-menus:left="menusNodeA">
                        <div class="title-success">
                            {{ item.byName }}
                        </div>
                        <div class="title-success" style="padding: 10px 0 15px 0;">
                            <span style="font-weight: 300; font-size: 14px;">此节点已成功完成 </span>
                            <span>2</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据同步</span>
                        </div>
                        <div class="sub-title-success">
                            <span>鼠标悬停此区域可查看区块内容</span>
                            <br />
                            <span>鼠标点击此区域可进行节点操作</span>
                        </div>
                        <div class="sub-title-success">
                            <span>节点状态 </span>
                            <el-tag :type="tagSuccess" effect="dark" round>
                                健康
                            </el-tag>
                        </div>
                        <!-- <div v-if="currentUser.name !== ''" class="glass-container">
                            <div class="text-align-center" style="padding-top: 10px; padding-bottom: 10px;">
                                <span v-if="item.content.length > 0" class="title"> {{ item.content }} </span>
                                <span v-else class="title"> ["No data"] </span>
                                <br />
                                <span class="sub-title"> data blocks submit by {{ currentUser.byName }} </span>
                            </div>
                        </div> -->
                    </div>
                    <div v-else-if="showUpperNodes(index) && item.name === 'nodeB'" class="node-container" v-menus:left="menusNodeB">
                        <!-- <div v-if="currentUser.name !== ''" class="glass-container">
                            <div class="text-align-center" style="padding-top: 10px; padding-bottom: 10px;">
                                <span v-if="item.content.length > 0" class="title"> {{ item.content }} </span>
                                <span v-else class="title"> ["No data"] </span>
                                <br />
                                <span class="sub-title"> data blocks submit by {{ currentUser.byName }} </span>
                            </div>
                        </div> -->
                    </div>
                </el-col>
            </el-row>
            <el-row style="margin-top: 30px;">
                <el-col v-for="(item, index) in allNodes" :key="{ item, index }" :span="12" class="flex justify-content-center">
                    <div v-if="showLowerNodes(index) && item.name === 'nodeC'" class="node-container" v-menus:left="menusNodeC">
                        <!-- <div v-if="currentUser.name !== ''" class="glass-container">
                            <div class="text-align-center" style="padding-top: 10px; padding-bottom: 10px;">
                                <span v-if="item.content.length > 0" class="title"> {{ item.content }} </span>
                                <span v-else class="title"> ["No data"] </span>
                                <br />
                                <span class="sub-title"> data blocks submit by {{ currentUser.byName }} </span>
                            </div>
                        </div> -->
                    </div>
                    <div v-if="showLowerNodes(index) && item.name === 'nodeD'" class="node-container" v-menus:left="menusNodeD">
                        <!-- <div v-if="currentUser.name !== ''" class="glass-container">
                            <div class="text-align-center" style="padding-top: 10px; padding-bottom: 10px;">
                                <span v-if="item.content.length > 0" class="title"> {{ item.content }} </span>
                                <span v-else class="title"> ["No data"] </span>
                                <br />
                                <span class="sub-title"> data blocks submit by {{ currentUser.byName }} </span>
                            </div>
                        </div> -->
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
import { defineComponent, shallowRef } from "vue"
import { directive } from 'vue3-menus'
import { Printer, SuccessFilled } from '@element-plus/icons-vue'

export default {
    setup() {
        const $store = useStore()

        const currentUser = computed(() => {
            return $store.getters["users/getCurrentUserInfo"]
        })

        const allBlocks = computed(() => {
            return $store.getters["blocks/getAllBlocksInfo"]
        })

        const allNodes = computed(() => {
            return $store.getters["chains/getAllNodes"]
        })

        const changeNodeStatus = (nodeKey, nodeStatus) => {
            $store.commit("chains/changeNodeStatus", {"nodeKey": nodeKey, "nodeStatus": nodeStatus})
        }

        // 显示上排节点
        const showUpperNodes = (index) => {
            if (index === 0 || index === 1) {
                return true
            } else {
                return false
            }
        }

        // 显示下排节点
        const showLowerNodes = (index) => {
            if (index === 2 || index === 3) {
                return true
            } else {
                return false
            }
        }

        const menusNodeA = shallowRef({
            menus: [{
                label: "启用此节点",
                tip: "",
                click: () => {
                    console.log(0)
                    $store.commit("chains/changeNodeStatus", {"nodeKey": "nodeA", "nodeStatus": "available"})
                }
            }, {
                label: "停用此节点",
                tip: "",
                click: () => {
                    console.log(1)
                    $store.commit("chains/changeNodeStatus", {"nodeKey": "nodeA", "nodeStatus": "notAvailable"})
                }
            }]
        })

        const menusNodeB = shallowRef({
            menus: [{
                label: "启用此节点",
                tip: "",
                click: () => {
                    $store.commit("chains/changeNodeStatus", {"nodeKey": "nodeB", "nodeStatus": "available"})
                }
            }, {
                label: "停用此节点",
                tip: "",
                click: () => {
                    $store.commit("chains/changeNodeStatus", {"nodeKey": "nodeB", "nodeStatus": "notAvailable"})
                }
            }]
        })

        const menusNodeC = shallowRef({
            menus: [{
                label: "启用此节点",
                tip: "",
                click: () => {
                    $store.commit("chains/changeNodeStatus", {"nodeKey": "nodeC", "nodeStatus": "available"})
                }
            }, {
                label: "停用此节点",
                tip: "",
                click: () => {
                    $store.commit("chains/changeNodeStatus", {"nodeKey": "nodeC", "nodeStatus": "notAvailable"})
                }
            }]
        })

        const menusNodeD = shallowRef({
            menus: [{
                label: "启用此节点",
                tip: "",
                click: () => {
                    $store.commit("chains/changeNodeStatus", {"nodeKey": "nodeD", "nodeStatus": "available"})
                }
            }, {
                label: "停用此节点",
                tip: "",
                click: () => {
                    $store.commit("chains/changeNodeStatus", {"nodeKey": "nodeD", "nodeStatus": "notAvailable"})
                }
            }]
        })

        const tagSuccess = "success"
        const tagDanger = "danger"

        return {
            currentUser,
            allBlocks,
            allNodes,
            changeNodeStatus,
            showUpperNodes,
            showLowerNodes,
            menusNodeA,
            menusNodeB,
            menusNodeC,
            menusNodeD,
            tagSuccess,
            tagDanger
        }
    },
    watch: {
        "$store.state.users.currentUser": {
            handler (o, n) {
                console.log("watch $store.state.users.currentUser")
                console.log(o)
                console.log(n)
            },
            deep: true,
            immediate: true
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.chains-container1 {
    width: 100%;
    height: 100%;
    background: #3dd070;
    border-radius: 20px;
    box-shadow: 0px 0px 30px 0px rgb(61 208 112 / 80%);
}
.chains-container2 {
    width: 100%;
    height: 100%;
    padding: 20px 0px;
    border-radius: 20px;
    background: #fff;
}
.node-container {
    width: 300px;
    height: 300px;
    border-radius: 100%;
    /* background: linear-gradient(135deg, #de82ca, #259fac); */
    background: #fff;
    cursor: pointer;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%);
}
.glass-container {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 320px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-border-radius: 12px;

}
.title {
    font-weight: 600;
    font-size: 50px;
    color: rgba(255, 255, 255, 0.75);
}
.sub-title {
    font-weight: 300;
    font-size: 12px;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.75);
}
.title-success {
    font-weight: 700;
    font-size: 2em;
    color: #3dd070;
    letter-spacing: 1px;
    text-align: center;
    padding: 40px 0 15px 0;
}
.sub-title-success {
    font-weight: 300;
    font-size: 0.5em;
    color: #3C4857;
    letter-spacing: 1px;
    text-align: center;
    padding: 10px 0 15px 0;
}
.title-danger {

}
.text-align-center {
    text-align: center
}
.flex {
    display: flex;
}
.justify-content-center {
    justify-content: center;
}
.justify-items-center {
    justify-items: center;
}
.el-tag--dark.el-tag--success {
    --el-tag-bg-color: #3dd070;
    --el-tag-border-color: #3dd070;
    --el-tag-hover-color: #3dd070;
}
</style>
