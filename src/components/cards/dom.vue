<template>
    <div class="chains-container" style="border: 1px solid red;">
        <el-row>
            <el-col :span="12" class="flex justify-content-center">
                <div class="node-container nodeA-container" v-menus:left="menus">
                    <div class="glass" style="position: relative; top: 40px; left: -10px;">
                        <div style="text-align: center">
                            <span id="title"> Hello </span>
                            <div style="margin-top: 5px;"></div>
                            <span id="sub-title"> submit by xiaoming </span>
                            <div style="margin-top: 3px;"></div>
                        </div>
                    </div>
                    <div class="glass" style="position: relative; top: 60px; left: -10px;">
                        <div style="text-align: center">
                            <span id="title"> World </span>
                            <div style="margin-top: 5px;"></div>
                            <span id="sub-title"> submit by xiaohong </span>
                            <div style="margin-top: 3px;"></div>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12" class="flex justify-content-center">
                <div class="node-container nodeB-container" v-menus:left="menus">

                </div>
            </el-col>
        </el-row>
        <el-row style="margin-top: 50px;">
            <el-col :span="12" class="flex justify-content-center">
                <div class="node-container nodeC-container" v-menus:left="menus">

                </div>
            </el-col>
            <el-col :span="12" class="flex justify-content-center">
                <div class="node-container nodeD-container" v-menus:left="menus">

                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
import { defineComponent, shallowRef } from "vue"
import { directive } from 'vue3-menus'

export default {
    setup() {
        const $store = useStore()

        const allBlocks = computed(() => {
            return $store.getters["blocks/getAllBlocksInfo"]
        })

        const allNodes = computed(() => {
            return $store.getters["chains/getAllNodes"]
        })

        const changeNodeStatus = (nodeKey, nodeStatus) => {
            $store.commit("chains/changeNodeStatus", { "nodeKey": nodeKey, "nodeStatus": nodeStatus })
        }

        const menus = shallowRef({
            // menus: [{
            //     label: "返回(B)",
            //     tip: "Alt+向左箭头",
            //     click: () => {
            //         window.history.back(-1);
            //     }
            // }, {
            //     label: "点击不关闭菜单",
            //     tip: "不关闭菜单",
            //     click: () => {
            //         return false;
            //     }
            // }]
        })
        return { menus, allBlocks, allNodes, changeNodeStatus }
    },
    mounted() {

    }
}
</script>

<style scoped>
.flex {
    display: flex;
}

.justify-content-center {
    justify-content: center;
}

.glass {
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    border-radius: 12px;
    -webkit-border-radius: 12px;
    color: rgba(255, 255, 255, 0.75);
    font-weight: 300;
    font-size: 12px;
    letter-spacing: 1px;
    /* color: #259fac; */
    width: 320px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: end;
}

#title {
    font-weight: 600;
    font-size: 50px;
    /* letter-spacing: 5px; */
    margin-bottom: 5px;
}

#sub-title {
    font-weight: 300;
    font-size: 12px;
    letter-spacing: 1px;
    margin-bottom: 5px;
}

.chains-container {}

.node-container {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: linear-gradient(135deg, #de82ca, #259fac);
    /* display: flex; */
    justify-items: center;
    cursor: pointer;
}

.nodeA-container {}

.nodeB-container {}

.nodeC-container {}

.nodeD-container {}
</style>