<template>
    <div class="chains-container1 my-container-border-radius my-container-box-shadow my-glass" style="margin-top: 15px;">
        <el-row style="position: relative; top: 15px; text-align: center;">
            <el-col :span="24">
                <el-tag v-if="allServices.serviceStatus === 'available'" :type="tagSuccess" effect="dark" round style="width: 150px; height: 30px;">
                    服务持续运行中
                </el-tag>
                <el-tag v-else :type="tagDanger" effect="dark" round style="width: 200px; height: 30px;">
                    节点损坏数超过阈值，服务故障
                </el-tag>
            </el-col>
        </el-row>

        <el-row style="height: calc(50% - 10px); top: -20px;">
            <el-col :span="12" class="flex justify-content-center">
                <div v-if="nodeA.nodeStatus === 'available'" class="circleanimation color-success my-container-box-shadow" v-menus:left="menusNodeA" style="top: 50%; transform: translateY(-50%); position: absolute;">
                    <div class="circle-animation-front">
                        <div></div>
                        <div style="position: relative; top: 50%; transform: translateY(-50%); padding-left: 20px; padding-right: 20px;">
                            <div class="title">
                                {{ nodeA.byName }}
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="title">
                                <span style="font-weight: 300; font-size: 14px;">已同步 </span>
                                <span>{{ nodeA.allContent.length }}</span>
                                <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="title">
                                <span style="font-weight: 300; font-size: 14px;">可查看 </span>
                                <span>{{ nodeA.content.length }}</span>
                                <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="sub-title">
                                <span>鼠标点击可进行节点操作</span>
                                <div></div>
                                <span>鼠标悬停可查看区块内容</span>
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="sub-title">
                                <el-tag :type="tagSuccess" effect="dark" round>
                                    健康
                                </el-tag>
                            </div>
                        </div>
                    </div>
                    <div class="circle-animation-back bg information">
                        <div></div>
                        <div style="position: relative; top: 50%; transform: translateY(-50%); padding-left: 20px; padding-right: 20px;">
                            <div class="title" style="color: #fff;">
                                {{ nodeA.byName }}
                            </div>
                            <div style="margin-top: calc(70vh*0.04); margin-bottom: calc(70vh*0.04);" ></div>
                            <div class="title">
                                <div v-for="item in nodeA.content" :key="item" style="color: #fff; font-weight: 300; font-size: 14px;"> {{ item }} </div>
                            </div>
                            <div style="margin-top: calc(70vh*0.04); margin-bottom: calc(70vh*0.04);" ></div>
                            <div class="sub-title">
                                <el-tag :type="tagSuccess" effect="plain" round>
                                    健康
                                </el-tag>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="circleanimation color-danger my-container-box-shadow" v-menus:left="menusNodeA" style="top: 50%; transform: translateY(-50%); position: absolute;">
                    <div class="circle-animation-front">
                        <div></div>
                        <div style="position: relative; top: 50%; transform: translateY(-50%); padding-left: 20px; padding-right: 20px;">
                            <div class="title">
                                {{ nodeA.byName }}
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="title">
                                <span style="font-weight: 300; font-size: 14px;">已同步 </span>
                                <span>{{ nodeA.allContent.length }}</span>
                                <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="title">
                                <span style="font-weight: 300; font-size: 14px;">可查看 </span>
                                <span>{{ nodeA.content.length }}</span>
                                <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="sub-title">
                                <span>鼠标点击可进行节点操作</span>
                                <div></div>
                                <span>鼠标悬停可查看区块内容</span>
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="sub-title">
                                <el-tag :type="tagDanger" effect="dark" round>
                                    损坏
                                </el-tag>
                            </div>
                        </div>
                    </div>
                    <div class="circle-animation-back bg information">
                        <div></div>
                        <div style="position: relative; top: 50%; transform: translateY(-50%); padding-left: 20px; padding-right: 20px;">
                            <div class="title" style="color: #fff;">
                                {{ nodeA.byName }}
                            </div>
                            <div style="margin-top: calc(70vh*0.04); margin-bottom: calc(70vh*0.04);" ></div>
                            <div class="title">
                                <div v-for="item in nodeA.content" :key="item" style="color: #fff; font-weight: 300; font-size: 14px;"> {{ item }} </div>
                            </div>
                            <div style="margin-top: calc(70vh*0.04); margin-bottom: calc(70vh*0.04);" ></div>
                            <div class="sub-title">
                                <el-tag :type="tagDanger" effect="plain" round>
                                    损坏
                                </el-tag>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>

            <el-col :span="12" class="flex justify-content-center">
                <div v-if="nodeB.nodeStatus === 'available'" class="circleanimation color-success my-container-box-shadow" v-menus:left="menusNodeB" style="top: 50%; transform: translateY(-50%); position: absolute;">
                    <div class="circle-animation-front">
                        <div></div>
                        <div style="position: relative; top: 50%; transform: translateY(-50%); padding-left: 20px; padding-right: 20px;">
                            <div class="title">
                                {{ nodeB.byName }}
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="title">
                                <span style="font-weight: 300; font-size: 14px;">已同步 </span>
                                <span>{{ nodeB.allContent.length }}</span>
                                <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="title">
                                <span style="font-weight: 300; font-size: 14px;">可查看 </span>
                                <span>{{ nodeB.content.length }}</span>
                                <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="sub-title">
                                <span>鼠标点击可进行节点操作</span>
                                <div></div>
                                <span>鼠标悬停可查看区块内容</span>
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="sub-title">
                                <el-tag :type="tagSuccess" effect="dark" round>
                                    健康
                                </el-tag>
                            </div>
                        </div>
                    </div>
                    <div class="circle-animation-back bg information">
                        <div></div>
                        <div style="position: relative; top: 50%; transform: translateY(-50%); padding-left: 20px; padding-right: 20px;">
                            <div class="title" style="color: #fff;">
                                {{ nodeB.byName }}
                            </div>
                            <div style="margin-top: calc(70vh*0.04); margin-bottom: calc(70vh*0.04);" ></div>
                            <div class="title">
                                <div v-for="item in nodeB.content" :key="item" style="color: #fff; font-weight: 300; font-size: 14px;"> {{ item }} </div>
                            </div>
                            <div style="margin-top: calc(70vh*0.04); margin-bottom: calc(70vh*0.04);" ></div>
                            <div class="sub-title">
                                <el-tag :type="tagSuccess" effect="plain" round>
                                    健康
                                </el-tag>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="circleanimation color-danger my-container-box-shadow" v-menus:left="menusNodeB" style="top: 50%; transform: translateY(-50%); position: absolute;">
                    <div class="circle-animation-front">
                        <div></div>
                        <div style="position: relative; top: 50%; transform: translateY(-50%); padding-left: 20px; padding-right: 20px;">
                            <div class="title">
                                {{ nodeB.byName }}
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="title">
                                <span style="font-weight: 300; font-size: 14px;">已同步 </span>
                                <span>{{ nodeB.allContent.length }}</span>
                                <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="title">
                                <span style="font-weight: 300; font-size: 14px;">可查看 </span>
                                <span>{{ nodeB.content.length }}</span>
                                <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="sub-title">
                                <span>鼠标点击可进行节点操作</span>
                                <div></div>
                                <span>鼠标悬停可查看区块内容</span>
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="sub-title">
                                <el-tag :type="tagDanger" effect="dark" round>
                                    损坏
                                </el-tag>
                            </div>
                        </div>
                    </div>
                    <div class="circle-animation-back bg information">
                        <div></div>
                        <div style="position: relative; top: 50%; transform: translateY(-50%); padding-left: 20px; padding-right: 20px;">
                            <div class="title" style="color: #fff;">
                                {{ nodeB.byName }}
                            </div>
                            <div style="margin-top: calc(70vh*0.04); margin-bottom: calc(70vh*0.04);" ></div>
                            <div class="title">
                                <div v-for="item in nodeB.content" :key="item" style="color: #fff; font-weight: 300; font-size: 14px;"> {{ item }} </div>
                            </div>
                            <div style="margin-top: calc(70vh*0.04); margin-bottom: calc(70vh*0.04);" ></div>
                            <div class="sub-title">
                                <el-tag :type="tagDanger" effect="plain" round>
                                    损坏
                                </el-tag>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>

        <el-row style="height: calc(50% - 10px); top: -20px;">
            <el-col :span="12" class="flex justify-content-center">
                <div v-if="nodeC.nodeStatus === 'available'" class="circleanimation color-success my-container-box-shadow" v-menus:left="menusNodeC" style="top: 50%; transform: translateY(-50%); position: absolute;">
                    <div class="circle-animation-front">
                        <div></div>
                        <div style="position: relative; top: 50%; transform: translateY(-50%); padding-left: 20px; padding-right: 20px;">
                            <div class="title">
                                {{ nodeC.byName }}
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="title">
                                <span style="font-weight: 300; font-size: 14px;">已同步 </span>
                                <span>{{ nodeC.allContent.length }}</span>
                                <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="title">
                                <span style="font-weight: 300; font-size: 14px;">可查看 </span>
                                <span>{{ nodeC.content.length }}</span>
                                <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="sub-title">
                                <span>鼠标点击可进行节点操作</span>
                                <div></div>
                                <span>鼠标悬停可查看区块内容</span>
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="sub-title">
                                <el-tag :type="tagSuccess" effect="dark" round>
                                    健康
                                </el-tag>
                            </div>
                        </div>
                    </div>
                    <div class="circle-animation-back bg information">
                        <div></div>
                        <div style="position: relative; top: 50%; transform: translateY(-50%); padding-left: 20px; padding-right: 20px;">
                            <div class="title" style="color: #fff;">
                                {{ nodeC.byName }}
                            </div>
                            <div style="margin-top: calc(70vh*0.04); margin-bottom: calc(70vh*0.04);" ></div>
                            <div class="title">
                                <div v-for="item in nodeC.content" :key="item" style="color: #fff; font-weight: 300; font-size: 14px;"> {{ item }} </div>
                            </div>
                            <div style="margin-top: calc(70vh*0.04); margin-bottom: calc(70vh*0.04);" ></div>
                            <div class="sub-title">
                                <el-tag :type="tagSuccess" effect="plain" round>
                                    健康
                                </el-tag>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="circleanimation color-danger my-container-box-shadow" v-menus:left="menusNodeC" style="top: 50%; transform: translateY(-50%); position: absolute;">
                    <div class="circle-animation-front">
                        <div></div>
                        <div style="position: relative; top: 50%; transform: translateY(-50%); padding-left: 20px; padding-right: 20px;">
                            <div class="title">
                                {{ nodeC.byName }}
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="title">
                                <span style="font-weight: 300; font-size: 14px;">已同步 </span>
                                <span>{{ nodeC.allContent.length }}</span>
                                <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="title">
                                <span style="font-weight: 300; font-size: 14px;">可查看 </span>
                                <span>{{ nodeC.content.length }}</span>
                                <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="sub-title">
                                <span>鼠标点击可进行节点操作</span>
                                <div></div>
                                <span>鼠标悬停可查看区块内容</span>
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="sub-title">
                                <el-tag :type="tagDanger" effect="dark" round>
                                    损坏
                                </el-tag>
                            </div>
                        </div>
                    </div>
                    <div class="circle-animation-back bg information">
                        <div></div>
                        <div style="position: relative; top: 50%; transform: translateY(-50%); padding-left: 20px; padding-right: 20px;">
                            <div class="title" style="color: #fff;">
                                {{ nodeC.byName }}
                            </div>
                            <div style="margin-top: calc(70vh*0.04); margin-bottom: calc(70vh*0.04);" ></div>
                            <div class="title">
                                <div v-for="item in nodeC.content" :key="item" style="color: #fff; font-weight: 300; font-size: 14px;"> {{ item }} </div>
                            </div>
                            <div style="margin-top: calc(70vh*0.04); margin-bottom: calc(70vh*0.04);" ></div>
                            <div class="sub-title">
                                <el-tag :type="tagDanger" effect="plain" round>
                                    损坏
                                </el-tag>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>

            <el-col :span="12" class="flex justify-content-center">
                <div v-if="nodeD.nodeStatus === 'available'" class="circleanimation color-success my-container-box-shadow" v-menus:left="menusNodeD" style="top: 50%; transform: translateY(-50%); position: absolute;">
                    <div class="circle-animation-front">
                        <div></div>
                        <div style="position: relative; top: 50%; transform: translateY(-50%); padding-left: 20px; padding-right: 20px;">
                            <div class="title">
                                {{ nodeD.byName }}
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="title">
                                <span style="font-weight: 300; font-size: 14px;">已同步 </span>
                                <span>{{ nodeD.allContent.length }}</span>
                                <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="title">
                                <span style="font-weight: 300; font-size: 14px;">可查看 </span>
                                <span>{{ nodeD.content.length }}</span>
                                <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="sub-title">
                                <span>鼠标点击可进行节点操作</span>
                                <div></div>
                                <span>鼠标悬停可查看区块内容</span>
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="sub-title">
                                <el-tag :type="tagSuccess" effect="dark" round>
                                    健康
                                </el-tag>
                            </div>
                        </div>
                    </div>
                    <div class="circle-animation-back bg information">
                        <div></div>
                        <div style="position: relative; top: 50%; transform: translateY(-50%); padding-left: 20px; padding-right: 20px;">
                            <div class="title" style="color: #fff;">
                                {{ nodeD.byName }}
                            </div>
                            <div style="margin-top: calc(70vh*0.04); margin-bottom: calc(70vh*0.04);" ></div>
                            <div class="title">
                                <div v-for="item in nodeD.content" :key="item" style="color: #fff; font-weight: 300; font-size: 14px;"> {{ item }} </div>
                            </div>
                            <div style="margin-top: calc(70vh*0.04); margin-bottom: calc(70vh*0.04);" ></div>
                            <div class="sub-title">
                                <el-tag :type="tagSuccess" effect="plain" round>
                                    健康
                                </el-tag>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="circleanimation color-danger my-container-box-shadow" v-menus:left="menusNodeD" style="top: 50%; transform: translateY(-50%); position: absolute;">
                    <div class="circle-animation-front">
                        <div></div>
                        <div style="position: relative; top: 50%; transform: translateY(-50%); padding-left: 20px; padding-right: 20px;">
                            <div class="title">
                                {{ nodeD.byName }}
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="title">
                                <span style="font-weight: 300; font-size: 14px;">已同步 </span>
                                <span>{{ nodeD.allContent.length }}</span>
                                <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="title">
                                <span style="font-weight: 300; font-size: 14px;">可查看 </span>
                                <span>{{ nodeD.content.length }}</span>
                                <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="sub-title">
                                <span>鼠标点击可进行节点操作</span>
                                <div></div>
                                <span>鼠标悬停可查看区块内容</span>
                            </div>
                            <div style="margin-top: calc(70vh*0.02); margin-bottom: calc(70vh*0.02);" ></div>
                            <div class="sub-title">
                                <el-tag :type="tagDanger" effect="dark" round>
                                    损坏
                                </el-tag>
                            </div>
                        </div>
                    </div>
                    <div class="circle-animation-back bg information">
                        <div></div>
                        <div style="position: relative; top: 50%; transform: translateY(-50%); padding-left: 20px; padding-right: 20px;">
                            <div class="title" style="color: #fff;">
                                {{ nodeD.byName }}
                            </div>
                            <div style="margin-top: calc(70vh*0.04); margin-bottom: calc(70vh*0.04);" ></div>
                            <div class="title">
                                <div v-for="item in nodeD.content" :key="item" style="color: #fff; font-weight: 300; font-size: 14px;"> {{ item }} </div>
                            </div>
                            <div style="margin-top: calc(70vh*0.04); margin-bottom: calc(70vh*0.04);" ></div>
                            <div class="sub-title">
                                <el-tag :type="tagDanger" effect="plain" round>
                                    损坏
                                </el-tag>
                            </div>
                        </div>
                    </div>
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

        const nodeA = computed(() => {
            const allNodes = $store.getters["chains/getAllNodes"]
            return allNodes[0]
        })

        const nodeB = computed(() => {
            const allNodes = $store.getters["chains/getAllNodes"]
            return allNodes[1]
        })

        const nodeC = computed(() => {
            const allNodes = $store.getters["chains/getAllNodes"]
            return allNodes[2]
        })

        const nodeD = computed(() => {
            const allNodes = $store.getters["chains/getAllNodes"]
            return allNodes[3]
        })

        const changeNodeStatus = (nodeKey, nodeStatus) => {
            $store.commit("chains/changeNodeStatus", {"nodeKey": nodeKey, "nodeStatus": nodeStatus})
        }

        const allServices = computed(() => {
            return $store.getters["services/getAllServicesInfo"]
        })

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
                label: "恢复此节点",
                tip: "",
                click: () => {
                    $store.commit("chains/changeNodeStatus", {"nodeKey": "nodeA", "nodeStatus": "available"})
                    $store.commit("services/refreshServices")
                },
                disabled: false
            }, {
                label: "损坏此节点",
                tip: "",
                click: () => {
                    $store.commit("chains/changeNodeStatus", {"nodeKey": "nodeA", "nodeStatus": "notAvailable"})
                    $store.commit("services/refreshServices")
                },
                disabled: false
            }]
        })

        const menusNodeB = shallowRef({
            menus: [{
                label: "恢复此节点",
                tip: "",
                click: () => {
                    $store.commit("chains/changeNodeStatus", {"nodeKey": "nodeB", "nodeStatus": "available"})
                    $store.commit("services/refreshServices")
                },
                disabled: false
            }, {
                label: "损坏此节点",
                tip: "",
                click: () => {
                    $store.commit("chains/changeNodeStatus", {"nodeKey": "nodeB", "nodeStatus": "notAvailable"})
                    $store.commit("services/refreshServices")
                },
                disabled: false
            }]
        })

        const menusNodeC = shallowRef({
            menus: [{
                label: "恢复此节点",
                tip: "",
                click: () => {
                    $store.commit("chains/changeNodeStatus", {"nodeKey": "nodeC", "nodeStatus": "available"})
                    $store.commit("services/refreshServices")
                },
                disabled: false
            }, {
                label: "损坏此节点",
                tip: "",
                click: () => {
                    $store.commit("chains/changeNodeStatus", {"nodeKey": "nodeC", "nodeStatus": "notAvailable"})
                    $store.commit("services/refreshServices")
                },
                disabled: false
            }]
        })

        const menusNodeD = shallowRef({
            menus: [{
                label: "恢复此节点",
                tip: "",
                click: () => {
                    $store.commit("chains/changeNodeStatus", {"nodeKey": "nodeD", "nodeStatus": "available"})
                    $store.commit("services/refreshServices")
                },
                disabled: false
            }, {
                label: "损坏此节点",
                tip: "",
                click: () => {
                    $store.commit("chains/changeNodeStatus", {"nodeKey": "nodeD", "nodeStatus": "notAvailable"})
                    $store.commit("services/refreshServices")
                },
                disabled: false
            }]
        })

        const tagSuccess = "success"
        const tagDanger = "danger"

        return {
            currentUser,
            allBlocks,
            allNodes,
            nodeA,
            nodeB,
            nodeC,
            nodeD,
            changeNodeStatus,
            allServices,
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
                // console.log("watch $store.state.users.currentUser")
                // console.log(o)
                // console.log(n)
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
@import "../../assets/css/circle-style.css";
@import "../../assets/css/common-style.css";
.chains-container1 {
    height: 68%;
}
.color-success .title {
    display: inline-block;
    font-weight: 700;
    font-size: 1.5em;
    color: #3dd070;
    letter-spacing: 1px;
    text-align: center;
}
.color-success .sub-title {
    display: inline-block;
    font-weight: 300;
    font-size: 0.5em;
    color: #3C4857;
    letter-spacing: 1px;
    text-align: center;
}
.color-danger .title {
    display: inline-block;
    font-weight: 700;
    font-size: 1.5em;
    color: #ff3948;
    letter-spacing: 1px;
    text-align: center;
}
.color-danger .sub-title {
    display: inline-block;
    font-weight: 300;
    font-size: 0.5em;
    color: #3C4857;
    letter-spacing: 1px;
    text-align: center;
}
.flex {
    display: flex;
}
.justify-content-center {
    justify-content: center;
}
.el-tag--dark.el-tag--success {
    --el-tag-bg-color: #3dd070;
    --el-tag-border-color: #3dd070;
    --el-tag-hover-color: #3dd070;
    --el-tag-text-color: #fff;
}
.el-tag--plain.el-tag--success {
    --el-tag-bg-color: #fff;
    --el-tag-border-color: #3dd070;
    --el-tag-hover-color: #3dd070;
    --el-tag-text-color: #3dd070;
}
.el-tag--dark.el-tag--danger {
    --el-tag-bg-color: #ff3948;
    --el-tag-border-color: #ff3948;
    --el-tag-hover-color: #ff3948;
    --el-tag-text-color: #fff;
}
.el-tag--plain.el-tag--danger {
    --el-tag-bg-color: #fff;
    --el-tag-border-color: #ff3948;
    --el-tag-hover-color: #ff3948;
    --el-tag-text-color: #ff3948;
}
</style>

<style>
.v3-menus-active {
    background: #f5f7fb!important;
    color: #606266!important;
}
</style>
