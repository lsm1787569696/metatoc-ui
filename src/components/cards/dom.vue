<template>
    <div v-if="allServices.serviceStatus === 'available'" class="chains-container2 conic conic-success">
        <el-row style="text-align: center;">
            <el-col :span="24">
                <el-tag v-if="allServices.serviceStatus === 'available'" :type="tagSuccess" effect="dark" round style="width: 150px; height: 30px;">
                    服务持续运行中
                </el-tag>
                <el-tag v-else :type="tagDanger" effect="dark" round style="width: 200px; height: 30px;">
                    超过半数节点损坏，服务故障
                </el-tag>
            </el-col>
        </el-row>
        <el-row style="padding-top: 0px;">
            <el-col v-for="(item, index) in allNodes" :key="{ item, index }" :span="12" class="flex justify-content-center">
                <div v-if="showUpperNodes(index) && item.name === 'nodeA' && item.nodeStatus === 'available'" class="circleanimation color-success" v-menus:left="menusNodeA">
                    <div class="circle-animation-front">
                        <div class="title">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 0px 0 15px 0;">
                            <span style="font-weight: 300; font-size: 14px;">此节点已成功完成 </span>
                            <span>{{ item.allContent.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据同步</span>
                            <br />
                            <span style="font-weight: 300; font-size: 14px;">您可以查看 </span>
                            <span>{{ item.content.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                        </div>

                        <div class="sub-title">
                            <span>鼠标悬停此区域可查看区块内容</span>
                            <br />
                            <span>鼠标点击此区域可进行节点操作</span>
                        </div>
                        <div class="sub-title">
                            <span>节点状态 </span>
                            <el-tag :type="tagSuccess" effect="dark" round>
                                健康
                            </el-tag>
                        </div>
                    </div>
                    <div class="circle-animation-back bg information">
                        <div class="title" style="color: #fff; padding-top: 43px;">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 25px 0 15px 0; color: #fff;">
                            <span v-if="item.content.length > 0" style="font-weight: 300; font-size: 16px;"> {{ item.content }} </span>
                            <span v-else style="font-weight: 300; font-size: 16px;"> ["No data"] </span>
                            <!-- <br /> -->
                            <!-- <span style="font-weight: 300; font-size: 12px;"> data blocks submit by {{ currentUser.byName }} </span> -->
                        </div>
                        <div class="sub-title" style="color: #fff; margin-top: 40px;">
                            <span>节点状态 </span>
                            <el-tag :type="tagSuccess" effect="plain" round>
                                健康
                            </el-tag>
                        </div>
                    </div>
                </div>
                <div v-else-if="showUpperNodes(index) && item.name === 'nodeA' && item.nodeStatus === 'notAvailable'" class="circleanimation color-danger" v-menus:left="menusNodeA">
                    <div class="circle-animation-front">
                        <div class="title">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 0px 0 15px 0;">
                            <span style="font-weight: 300; font-size: 14px;">此节点已成功完成 </span>
                            <span>{{ item.allContent.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据同步</span>
                            <br />
                            <span style="font-weight: 300; font-size: 14px;">您可以查看 </span>
                            <span>{{ item.content.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                        </div>

                        <div class="sub-title">
                            <span>鼠标悬停此区域可查看区块内容</span>
                            <br />
                            <span>鼠标点击此区域可进行节点操作</span>
                        </div>
                        <div class="sub-title">
                            <span>节点状态 </span>
                            <el-tag :type="tagDanger" effect="dark" round>
                                损坏
                            </el-tag>
                        </div>
                    </div>
                    <div class="circle-animation-back bg information">
                        <div class="title" style="color: #fff; padding-top: 43px;">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 25px 0 15px 0; color: #fff;">
                            <span v-if="item.content.length > 0" style="font-weight: 300; font-size: 16px;"> {{ item.content }} </span>
                            <span v-else style="font-weight: 300; font-size: 16px;"> ["No data"] </span>
                            <!-- <br /> -->
                            <!-- <span style="font-weight: 300; font-size: 12px;"> data blocks submit by {{ currentUser.byName }} </span> -->
                        </div>
                        <div class="sub-title" style="color: #fff; margin-top: 40px;">
                            <span>节点状态 </span>
                            <el-tag :type="tagDanger" effect="plain" round>
                                损坏
                            </el-tag>
                        </div>
                    </div>
                </div>

                <div v-if="showUpperNodes(index) && item.name === 'nodeB' && item.nodeStatus === 'available'" class="circleanimation color-success" v-menus:left="menusNodeB">
                    <div class="circle-animation-front">
                        <div class="title">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 0px 0 15px 0;">
                            <span style="font-weight: 300; font-size: 14px;">此节点已成功完成 </span>
                            <span>{{ item.allContent.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据同步</span>
                            <br />
                            <span style="font-weight: 300; font-size: 14px;">您可以查看 </span>
                            <span>{{ item.content.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                        </div>

                        <div class="sub-title">
                            <span>鼠标悬停此区域可查看区块内容</span>
                            <br />
                            <span>鼠标点击此区域可进行节点操作</span>
                        </div>
                        <div class="sub-title">
                            <span>节点状态 </span>
                            <el-tag :type="tagSuccess" effect="dark" round>
                                健康
                            </el-tag>
                        </div>
                    </div>
                    <div class="circle-animation-back bg information">
                        <div class="title" style="color: #fff; padding-top: 43px;">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 25px 0 15px 0; color: #fff;">
                            <span v-if="item.content.length > 0" style="font-weight: 300; font-size: 16px;"> {{ item.content }} </span>
                            <span v-else style="font-weight: 300; font-size: 16px;"> ["No data"] </span>
                            <!-- <br /> -->
                            <!-- <span style="font-weight: 300; font-size: 12px;"> data blocks submit by {{ currentUser.byName }} </span> -->
                        </div>
                        <div class="sub-title" style="color: #fff; margin-top: 40px;">
                            <span>节点状态 </span>
                            <el-tag :type="tagSuccess" effect="plain" round>
                                健康
                            </el-tag>
                        </div>
                    </div>
                </div>
                <div v-else-if="showUpperNodes(index) && item.name === 'nodeB' && item.nodeStatus === 'notAvailable'" class="circleanimation color-danger" v-menus:left="menusNodeB">
                    <div class="circle-animation-front">
                        <div class="title">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 0px 0 15px 0;">
                            <span style="font-weight: 300; font-size: 14px;">此节点已成功完成 </span>
                            <span>{{ item.allContent.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据同步</span>
                            <br />
                            <span style="font-weight: 300; font-size: 14px;">您可以查看 </span>
                            <span>{{ item.content.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                        </div>

                        <div class="sub-title">
                            <span>鼠标悬停此区域可查看区块内容</span>
                            <br />
                            <span>鼠标点击此区域可进行节点操作</span>
                        </div>
                        <div class="sub-title">
                            <span>节点状态 </span>
                            <el-tag :type="tagDanger" effect="dark" round>
                                损坏
                            </el-tag>
                        </div>
                    </div>
                    <div class="circle-animation-back bg information">
                        <div class="title" style="color: #fff; padding-top: 43px;">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 25px 0 15px 0; color: #fff;">
                            <span v-if="item.content.length > 0" style="font-weight: 300; font-size: 16px;"> {{ item.content }} </span>
                            <span v-else style="font-weight: 300; font-size: 16px;"> ["No data"] </span>
                            <!-- <br /> -->
                            <!-- <span style="font-weight: 300; font-size: 12px;"> data blocks submit by {{ currentUser.byName }} </span> -->
                        </div>
                        <div class="sub-title" style="color: #fff; margin-top: 40px;">
                            <span>节点状态 </span>
                            <el-tag :type="tagDanger" effect="plain" round>
                                损坏
                            </el-tag>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>

        <el-row style="margin-top: 30px;">
            <el-col v-for="(item, index) in allNodes" :key="{ item, index }" :span="12" class="flex justify-content-center">
                <div v-if="showLowerNodes(index) && item.name === 'nodeC' && item.nodeStatus === 'available'" class="circleanimation color-success" v-menus:left="menusNodeC">
                    <div class="circle-animation-front">
                        <div class="title">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 0px 0 15px 0;">
                            <span style="font-weight: 300; font-size: 14px;">此节点已成功完成 </span>
                            <span>{{ item.allContent.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据同步</span>
                            <br />
                            <span style="font-weight: 300; font-size: 14px;">您可以查看 </span>
                            <span>{{ item.content.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                        </div>

                        <div class="sub-title">
                            <span>鼠标悬停此区域可查看区块内容</span>
                            <br />
                            <span>鼠标点击此区域可进行节点操作</span>
                        </div>
                        <div class="sub-title">
                            <span>节点状态 </span>
                            <el-tag :type="tagSuccess" effect="dark" round>
                                健康
                            </el-tag>
                        </div>
                    </div>
                    <div class="circle-animation-back bg information">
                        <div class="title" style="color: #fff; padding-top: 43px;">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 25px 0 15px 0; color: #fff;">
                            <span v-if="item.content.length > 0" style="font-weight: 300; font-size: 16px;"> {{ item.content }} </span>
                            <span v-else style="font-weight: 300; font-size: 16px;"> ["No data"] </span>
                            <!-- <br /> -->
                            <!-- <span style="font-weight: 300; font-size: 12px;"> data blocks submit by {{ currentUser.byName }} </span> -->
                        </div>
                        <div class="sub-title" style="color: #fff; margin-top: 40px;">
                            <span>节点状态 </span>
                            <el-tag :type="tagSuccess" effect="plain" round>
                                健康
                            </el-tag>
                        </div>
                    </div>
                </div>
                <div v-else-if="showLowerNodes(index) && item.name === 'nodeC' && item.nodeStatus === 'notAvailable'" class="circleanimation color-danger" v-menus:left="menusNodeC">
                    <div class="circle-animation-front">
                        <div class="title">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 0px 0 15px 0;">
                            <span style="font-weight: 300; font-size: 14px;">此节点已成功完成 </span>
                            <span>{{ item.allContent.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据同步</span>
                            <br />
                            <span style="font-weight: 300; font-size: 14px;">您可以查看 </span>
                            <span>{{ item.content.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                        </div>

                        <div class="sub-title">
                            <span>鼠标悬停此区域可查看区块内容</span>
                            <br />
                            <span>鼠标点击此区域可进行节点操作</span>
                        </div>
                        <div class="sub-title">
                            <span>节点状态 </span>
                            <el-tag :type="tagDanger" effect="dark" round>
                                损坏
                            </el-tag>
                        </div>
                    </div>
                    <div class="circle-animation-back bg information">
                        <div class="title" style="color: #fff; padding-top: 43px;">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 25px 0 15px 0; color: #fff;">
                            <span v-if="item.content.length > 0" style="font-weight: 300; font-size: 16px;"> {{ item.content }} </span>
                            <span v-else style="font-weight: 300; font-size: 16px;"> ["No data"] </span>
                            <!-- <br /> -->
                            <!-- <span style="font-weight: 300; font-size: 12px;"> data blocks submit by {{ currentUser.byName }} </span> -->
                        </div>
                        <div class="sub-title" style="color: #fff; margin-top: 40px;">
                            <span>节点状态 </span>
                            <el-tag :type="tagDanger" effect="plain" round>
                                损坏
                            </el-tag>
                        </div>
                    </div>
                </div>

                <div v-if="showLowerNodes(index) && item.name === 'nodeD' && item.nodeStatus === 'available'" class="circleanimation color-success" v-menus:left="menusNodeD">
                    <div class="circle-animation-front">
                        <div class="title">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 0px 0 15px 0;">
                            <span style="font-weight: 300; font-size: 14px;">此节点已成功完成 </span>
                            <span>{{ item.allContent.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据同步</span>
                            <br />
                            <span style="font-weight: 300; font-size: 14px;">您可以查看 </span>
                            <span>{{ item.content.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                        </div>

                        <div class="sub-title">
                            <span>鼠标悬停此区域可查看区块内容</span>
                            <br />
                            <span>鼠标点击此区域可进行节点操作</span>
                        </div>
                        <div class="sub-title">
                            <span>节点状态 </span>
                            <el-tag :type="tagSuccess" effect="dark" round>
                                健康
                            </el-tag>
                        </div>
                    </div>
                    <div class="circle-animation-back bg information">
                        <div class="title" style="color: #fff; padding-top: 43px;">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 25px 0 15px 0; color: #fff;">
                            <span v-if="item.content.length > 0" style="font-weight: 300; font-size: 16px;"> {{ item.content }} </span>
                            <span v-else style="font-weight: 300; font-size: 16px;"> ["No data"] </span>
                            <!-- <br /> -->
                            <!-- <span style="font-weight: 300; font-size: 12px;"> data blocks submit by {{ currentUser.byName }} </span> -->
                        </div>
                        <div class="sub-title" style="color: #fff; margin-top: 40px;">
                            <span>节点状态 </span>
                            <el-tag :type="tagSuccess" effect="plain" round>
                                健康
                            </el-tag>
                        </div>
                    </div>
                </div>
                <div v-else-if="showLowerNodes(index) && item.name === 'nodeD' && item.nodeStatus === 'notAvailable'" class="circleanimation color-danger" v-menus:left="menusNodeD">
                    <div class="circle-animation-front">
                        <div class="title">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 0px 0 15px 0;">
                            <span style="font-weight: 300; font-size: 14px;">此节点已成功完成 </span>
                            <span>{{ item.allContent.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据同步</span>
                            <br />
                            <span style="font-weight: 300; font-size: 14px;">您可以查看 </span>
                            <span>{{ item.content.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                        </div>

                        <div class="sub-title">
                            <span>鼠标悬停此区域可查看区块内容</span>
                            <br />
                            <span>鼠标点击此区域可进行节点操作</span>
                        </div>
                        <div class="sub-title">
                            <span>节点状态 </span>
                            <el-tag :type="tagDanger" effect="dark" round>
                                损坏
                            </el-tag>
                        </div>
                    </div>
                    <div class="circle-animation-back bg information">
                        <div class="title" style="color: #fff; padding-top: 43px;">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 25px 0 15px 0; color: #fff;">
                            <span v-if="item.content.length > 0" style="font-weight: 300; font-size: 16px;"> {{ item.content }} </span>
                            <span v-else style="font-weight: 300; font-size: 16px;"> ["No data"] </span>
                            <!-- <br /> -->
                            <!-- <span style="font-weight: 300; font-size: 12px;"> data blocks submit by {{ currentUser.byName }} </span> -->
                        </div>
                        <div class="sub-title" style="color: #fff; margin-top: 40px;">
                            <span>节点状态 </span>
                            <el-tag :type="tagDanger" effect="plain" round>
                                损坏
                            </el-tag>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <!-- <el-row>
            <el-col v-for="(item, index) in allNodes" :key="{ item, index }" :span="12" class="flex justify-content-center">
                <div v-if="showUpperNodes(index) && item.name === 'nodeA'" class="node-container" v-menus:left="menusNodeA"> -->
                    <!-- <div class="title-success">
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
                    </div> -->
                    <!-- <div v-if="currentUser.name !== ''" class="glass-container">
                        <div class="text-align-center" style="padding-top: 10px; padding-bottom: 10px;">
                            <span v-if="item.content.length > 0" class="title"> {{ item.content }} </span>
                            <span v-else class="title"> ["No data"] </span>
                            <br />
                            <span class="sub-title"> data blocks submit by {{ currentUser.byName }} </span>
                        </div>
                    </div> -->
                <!-- </div>
                <div v-else-if="showUpperNodes(index) && item.name === 'nodeB'" class="node-container" v-menus:left="menusNodeB"> -->
                    <!-- <div v-if="currentUser.name !== ''" class="glass-container">
                        <div class="text-align-center" style="padding-top: 10px; padding-bottom: 10px;">
                            <span v-if="item.content.length > 0" class="title"> {{ item.content }} </span>
                            <span v-else class="title"> ["No data"] </span>
                            <br />
                            <span class="sub-title"> data blocks submit by {{ currentUser.byName }} </span>
                        </div>
                    </div> -->
                <!-- </div>
            </el-col>
        </el-row>
        <el-row style="margin-top: 30px;">
            <el-col v-for="(item, index) in allNodes" :key="{ item, index }" :span="12" class="flex justify-content-center">
                <div v-if="showLowerNodes(index) && item.name === 'nodeC'" class="node-container" v-menus:left="menusNodeC"> -->
                    <!-- <div v-if="currentUser.name !== ''" class="glass-container">
                        <div class="text-align-center" style="padding-top: 10px; padding-bottom: 10px;">
                            <span v-if="item.content.length > 0" class="title"> {{ item.content }} </span>
                            <span v-else class="title"> ["No data"] </span>
                            <br />
                            <span class="sub-title"> data blocks submit by {{ currentUser.byName }} </span>
                        </div>
                    </div> -->
                <!-- </div>
                <div v-if="showLowerNodes(index) && item.name === 'nodeD'" class="node-container" v-menus:left="menusNodeD"> -->
                    <!-- <div v-if="currentUser.name !== ''" class="glass-container">
                        <div class="text-align-center" style="padding-top: 10px; padding-bottom: 10px;">
                            <span v-if="item.content.length > 0" class="title"> {{ item.content }} </span>
                            <span v-else class="title"> ["No data"] </span>
                            <br />
                            <span class="sub-title"> data blocks submit by {{ currentUser.byName }} </span>
                        </div>
                    </div> -->
                <!-- </div>
            </el-col>
        </el-row> -->
    </div>
    <div v-if="allServices.serviceStatus === 'notAvailable'" class="chains-container2 conic conic-danger">
        <el-row style="text-align: center;">
            <el-col :span="24">
                <el-tag v-if="allServices.serviceStatus === 'available'" :type="tagSuccess" effect="dark" round style="width: 150px; height: 30px;">
                    服务持续运行中
                </el-tag>
                <el-tag v-else :type="tagDanger" effect="dark" round style="width: 200px; height: 30px;">
                    超过半数节点损坏，服务故障
                </el-tag>
            </el-col>
        </el-row>
        <el-row style="padding-top: 0px;">
            <el-col v-for="(item, index) in allNodes" :key="{ item, index }" :span="12" class="flex justify-content-center">
                <div v-if="showUpperNodes(index) && item.name === 'nodeA' && item.nodeStatus === 'available'" class="circleanimation color-success" v-menus:left="menusNodeA">
                    <div class="circle-animation-front">
                        <div class="title">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 0px 0 15px 0;">
                            <span style="font-weight: 300; font-size: 14px;">此节点已成功完成 </span>
                            <span>{{ item.allContent.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据同步</span>
                            <br />
                            <span style="font-weight: 300; font-size: 14px;">您可以查看 </span>
                            <span>{{ item.content.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                        </div>

                        <div class="sub-title">
                            <span>鼠标悬停此区域可查看区块内容</span>
                            <br />
                            <span>鼠标点击此区域可进行节点操作</span>
                        </div>
                        <div class="sub-title">
                            <span>节点状态 </span>
                            <el-tag :type="tagSuccess" effect="dark" round>
                                健康
                            </el-tag>
                        </div>
                    </div>
                    <div class="circle-animation-back bg information">
                        <div class="title" style="color: #fff; padding-top: 43px;">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 25px 0 15px 0; color: #fff;">
                            <span v-if="item.content.length > 0" style="font-weight: 300; font-size: 16px;"> {{ item.content }} </span>
                            <span v-else style="font-weight: 300; font-size: 16px;"> ["No data"] </span>
                            <!-- <br /> -->
                            <!-- <span style="font-weight: 300; font-size: 12px;"> data blocks submit by {{ currentUser.byName }} </span> -->
                        </div>
                        <div class="sub-title" style="color: #fff; margin-top: 40px;">
                            <span>节点状态 </span>
                            <el-tag :type="tagSuccess" effect="plain" round>
                                健康
                            </el-tag>
                        </div>
                    </div>
                </div>
                <div v-else-if="showUpperNodes(index) && item.name === 'nodeA' && item.nodeStatus === 'notAvailable'" class="circleanimation color-danger" v-menus:left="menusNodeA">
                    <div class="circle-animation-front">
                        <div class="title">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 0px 0 15px 0;">
                            <span style="font-weight: 300; font-size: 14px;">此节点已成功完成 </span>
                            <span>{{ item.allContent.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据同步</span>
                            <br />
                            <span style="font-weight: 300; font-size: 14px;">您可以查看 </span>
                            <span>{{ item.content.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                        </div>

                        <div class="sub-title">
                            <span>鼠标悬停此区域可查看区块内容</span>
                            <br />
                            <span>鼠标点击此区域可进行节点操作</span>
                        </div>
                        <div class="sub-title">
                            <span>节点状态 </span>
                            <el-tag :type="tagDanger" effect="dark" round>
                                损坏
                            </el-tag>
                        </div>
                    </div>
                    <div class="circle-animation-back bg information">
                        <div class="title" style="color: #fff; padding-top: 43px;">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 25px 0 15px 0; color: #fff;">
                            <span v-if="item.content.length > 0" style="font-weight: 300; font-size: 16px;"> {{ item.content }} </span>
                            <span v-else style="font-weight: 300; font-size: 16px;"> ["No data"] </span>
                            <!-- <br /> -->
                            <!-- <span style="font-weight: 300; font-size: 12px;"> data blocks submit by {{ currentUser.byName }} </span> -->
                        </div>
                        <div class="sub-title" style="color: #fff; margin-top: 40px;">
                            <span>节点状态 </span>
                            <el-tag :type="tagDanger" effect="plain" round>
                                损坏
                            </el-tag>
                        </div>
                    </div>
                </div>

                <div v-if="showUpperNodes(index) && item.name === 'nodeB' && item.nodeStatus === 'available'" class="circleanimation color-success" v-menus:left="menusNodeB">
                    <div class="circle-animation-front">
                        <div class="title">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 0px 0 15px 0;">
                            <span style="font-weight: 300; font-size: 14px;">此节点已成功完成 </span>
                            <span>{{ item.allContent.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据同步</span>
                            <br />
                            <span style="font-weight: 300; font-size: 14px;">您可以查看 </span>
                            <span>{{ item.content.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                        </div>

                        <div class="sub-title">
                            <span>鼠标悬停此区域可查看区块内容</span>
                            <br />
                            <span>鼠标点击此区域可进行节点操作</span>
                        </div>
                        <div class="sub-title">
                            <span>节点状态 </span>
                            <el-tag :type="tagSuccess" effect="dark" round>
                                健康
                            </el-tag>
                        </div>
                    </div>
                    <div class="circle-animation-back bg information">
                        <div class="title" style="color: #fff; padding-top: 43px;">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 25px 0 15px 0; color: #fff;">
                            <span v-if="item.content.length > 0" style="font-weight: 300; font-size: 16px;"> {{ item.content }} </span>
                            <span v-else style="font-weight: 300; font-size: 16px;"> ["No data"] </span>
                            <!-- <br /> -->
                            <!-- <span style="font-weight: 300; font-size: 12px;"> data blocks submit by {{ currentUser.byName }} </span> -->
                        </div>
                        <div class="sub-title" style="color: #fff; margin-top: 40px;">
                            <span>节点状态 </span>
                            <el-tag :type="tagSuccess" effect="plain" round>
                                健康
                            </el-tag>
                        </div>
                    </div>
                </div>
                <div v-else-if="showUpperNodes(index) && item.name === 'nodeB' && item.nodeStatus === 'notAvailable'" class="circleanimation color-danger" v-menus:left="menusNodeB">
                    <div class="circle-animation-front">
                        <div class="title">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 0px 0 15px 0;">
                            <span style="font-weight: 300; font-size: 14px;">此节点已成功完成 </span>
                            <span>{{ item.allContent.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据同步</span>
                            <br />
                            <span style="font-weight: 300; font-size: 14px;">您可以查看 </span>
                            <span>{{ item.content.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                        </div>

                        <div class="sub-title">
                            <span>鼠标悬停此区域可查看区块内容</span>
                            <br />
                            <span>鼠标点击此区域可进行节点操作</span>
                        </div>
                        <div class="sub-title">
                            <span>节点状态 </span>
                            <el-tag :type="tagDanger" effect="dark" round>
                                损坏
                            </el-tag>
                        </div>
                    </div>
                    <div class="circle-animation-back bg information">
                        <div class="title" style="color: #fff; padding-top: 43px;">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 25px 0 15px 0; color: #fff;">
                            <span v-if="item.content.length > 0" style="font-weight: 300; font-size: 16px;"> {{ item.content }} </span>
                            <span v-else style="font-weight: 300; font-size: 16px;"> ["No data"] </span>
                            <!-- <br /> -->
                            <!-- <span style="font-weight: 300; font-size: 12px;"> data blocks submit by {{ currentUser.byName }} </span> -->
                        </div>
                        <div class="sub-title" style="color: #fff; margin-top: 40px;">
                            <span>节点状态 </span>
                            <el-tag :type="tagDanger" effect="plain" round>
                                损坏
                            </el-tag>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>

        <el-row style="margin-top: 30px;">
            <el-col v-for="(item, index) in allNodes" :key="{ item, index }" :span="12" class="flex justify-content-center">
                <div v-if="showLowerNodes(index) && item.name === 'nodeC' && item.nodeStatus === 'available'" class="circleanimation color-success" v-menus:left="menusNodeC">
                    <div class="circle-animation-front">
                        <div class="title">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 0px 0 15px 0;">
                            <span style="font-weight: 300; font-size: 14px;">此节点已成功完成 </span>
                            <span>{{ item.allContent.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据同步</span>
                            <br />
                            <span style="font-weight: 300; font-size: 14px;">您可以查看 </span>
                            <span>{{ item.content.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                        </div>

                        <div class="sub-title">
                            <span>鼠标悬停此区域可查看区块内容</span>
                            <br />
                            <span>鼠标点击此区域可进行节点操作</span>
                        </div>
                        <div class="sub-title">
                            <span>节点状态 </span>
                            <el-tag :type="tagSuccess" effect="dark" round>
                                健康
                            </el-tag>
                        </div>
                    </div>
                    <div class="circle-animation-back bg information">
                        <div class="title" style="color: #fff; padding-top: 43px;">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 25px 0 15px 0; color: #fff;">
                            <span v-if="item.content.length > 0" style="font-weight: 300; font-size: 16px;"> {{ item.content }} </span>
                            <span v-else style="font-weight: 300; font-size: 16px;"> ["No data"] </span>
                            <!-- <br /> -->
                            <!-- <span style="font-weight: 300; font-size: 12px;"> data blocks submit by {{ currentUser.byName }} </span> -->
                        </div>
                        <div class="sub-title" style="color: #fff; margin-top: 40px;">
                            <span>节点状态 </span>
                            <el-tag :type="tagSuccess" effect="plain" round>
                                健康
                            </el-tag>
                        </div>
                    </div>
                </div>
                <div v-else-if="showLowerNodes(index) && item.name === 'nodeC' && item.nodeStatus === 'notAvailable'" class="circleanimation color-danger" v-menus:left="menusNodeC">
                    <div class="circle-animation-front">
                        <div class="title">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 0px 0 15px 0;">
                            <span style="font-weight: 300; font-size: 14px;">此节点已成功完成 </span>
                            <span>{{ item.allContent.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据同步</span>
                            <br />
                            <span style="font-weight: 300; font-size: 14px;">您可以查看 </span>
                            <span>{{ item.content.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                        </div>

                        <div class="sub-title">
                            <span>鼠标悬停此区域可查看区块内容</span>
                            <br />
                            <span>鼠标点击此区域可进行节点操作</span>
                        </div>
                        <div class="sub-title">
                            <span>节点状态 </span>
                            <el-tag :type="tagDanger" effect="dark" round>
                                损坏
                            </el-tag>
                        </div>
                    </div>
                    <div class="circle-animation-back bg information">
                        <div class="title" style="color: #fff; padding-top: 43px;">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 25px 0 15px 0; color: #fff;">
                            <span v-if="item.content.length > 0" style="font-weight: 300; font-size: 16px;"> {{ item.content }} </span>
                            <span v-else style="font-weight: 300; font-size: 16px;"> ["No data"] </span>
                            <!-- <br /> -->
                            <!-- <span style="font-weight: 300; font-size: 12px;"> data blocks submit by {{ currentUser.byName }} </span> -->
                        </div>
                        <div class="sub-title" style="color: #fff; margin-top: 40px;">
                            <span>节点状态 </span>
                            <el-tag :type="tagDanger" effect="plain" round>
                                损坏
                            </el-tag>
                        </div>
                    </div>
                </div>

                <div v-if="showLowerNodes(index) && item.name === 'nodeD' && item.nodeStatus === 'available'" class="circleanimation color-success" v-menus:left="menusNodeD">
                    <div class="circle-animation-front">
                        <div class="title">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 0px 0 15px 0;">
                            <span style="font-weight: 300; font-size: 14px;">此节点已成功完成 </span>
                            <span>{{ item.allContent.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据同步</span>
                            <br />
                            <span style="font-weight: 300; font-size: 14px;">您可以查看 </span>
                            <span>{{ item.content.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                        </div>

                        <div class="sub-title">
                            <span>鼠标悬停此区域可查看区块内容</span>
                            <br />
                            <span>鼠标点击此区域可进行节点操作</span>
                        </div>
                        <div class="sub-title">
                            <span>节点状态 </span>
                            <el-tag :type="tagSuccess" effect="dark" round>
                                健康
                            </el-tag>
                        </div>
                    </div>
                    <div class="circle-animation-back bg information">
                        <div class="title" style="color: #fff; padding-top: 43px;">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 25px 0 15px 0; color: #fff;">
                            <span v-if="item.content.length > 0" style="font-weight: 300; font-size: 16px;"> {{ item.content }} </span>
                            <span v-else style="font-weight: 300; font-size: 16px;"> ["No data"] </span>
                            <!-- <br /> -->
                            <!-- <span style="font-weight: 300; font-size: 12px;"> data blocks submit by {{ currentUser.byName }} </span> -->
                        </div>
                        <div class="sub-title" style="color: #fff; margin-top: 40px;">
                            <span>节点状态 </span>
                            <el-tag :type="tagSuccess" effect="plain" round>
                                健康
                            </el-tag>
                        </div>
                    </div>
                </div>
                <div v-else-if="showLowerNodes(index) && item.name === 'nodeD' && item.nodeStatus === 'notAvailable'" class="circleanimation color-danger" v-menus:left="menusNodeD">
                    <div class="circle-animation-front">
                        <div class="title">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 0px 0 15px 0;">
                            <span style="font-weight: 300; font-size: 14px;">此节点已成功完成 </span>
                            <span>{{ item.allContent.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据同步</span>
                            <br />
                            <span style="font-weight: 300; font-size: 14px;">您可以查看 </span>
                            <span>{{ item.content.length }}</span>
                            <span style="font-weight: 300; font-size: 14px;"> 区块数据</span>
                        </div>

                        <div class="sub-title">
                            <span>鼠标悬停此区域可查看区块内容</span>
                            <br />
                            <span>鼠标点击此区域可进行节点操作</span>
                        </div>
                        <div class="sub-title">
                            <span>节点状态 </span>
                            <el-tag :type="tagDanger" effect="dark" round>
                                损坏
                            </el-tag>
                        </div>
                    </div>
                    <div class="circle-animation-back bg information">
                        <div class="title" style="color: #fff; padding-top: 43px;">
                            {{ item.byName }}
                        </div>
                        <div class="title" style="padding: 25px 0 15px 0; color: #fff;">
                            <span v-if="item.content.length > 0" style="font-weight: 300; font-size: 16px;"> {{ item.content }} </span>
                            <span v-else style="font-weight: 300; font-size: 16px;"> ["No data"] </span>
                            <!-- <br /> -->
                            <!-- <span style="font-weight: 300; font-size: 12px;"> data blocks submit by {{ currentUser.byName }} </span> -->
                        </div>
                        <div class="sub-title" style="color: #fff; margin-top: 40px;">
                            <span>节点状态 </span>
                            <el-tag :type="tagDanger" effect="plain" round>
                                损坏
                            </el-tag>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <!-- <el-row>
            <el-col v-for="(item, index) in allNodes" :key="{ item, index }" :span="12" class="flex justify-content-center">
                <div v-if="showUpperNodes(index) && item.name === 'nodeA'" class="node-container" v-menus:left="menusNodeA"> -->
                    <!-- <div class="title-success">
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
                    </div> -->
                    <!-- <div v-if="currentUser.name !== ''" class="glass-container">
                        <div class="text-align-center" style="padding-top: 10px; padding-bottom: 10px;">
                            <span v-if="item.content.length > 0" class="title"> {{ item.content }} </span>
                            <span v-else class="title"> ["No data"] </span>
                            <br />
                            <span class="sub-title"> data blocks submit by {{ currentUser.byName }} </span>
                        </div>
                    </div> -->
                <!-- </div>
                <div v-else-if="showUpperNodes(index) && item.name === 'nodeB'" class="node-container" v-menus:left="menusNodeB"> -->
                    <!-- <div v-if="currentUser.name !== ''" class="glass-container">
                        <div class="text-align-center" style="padding-top: 10px; padding-bottom: 10px;">
                            <span v-if="item.content.length > 0" class="title"> {{ item.content }} </span>
                            <span v-else class="title"> ["No data"] </span>
                            <br />
                            <span class="sub-title"> data blocks submit by {{ currentUser.byName }} </span>
                        </div>
                    </div> -->
                <!-- </div>
            </el-col>
        </el-row>
        <el-row style="margin-top: 30px;">
            <el-col v-for="(item, index) in allNodes" :key="{ item, index }" :span="12" class="flex justify-content-center">
                <div v-if="showLowerNodes(index) && item.name === 'nodeC'" class="node-container" v-menus:left="menusNodeC"> -->
                    <!-- <div v-if="currentUser.name !== ''" class="glass-container">
                        <div class="text-align-center" style="padding-top: 10px; padding-bottom: 10px;">
                            <span v-if="item.content.length > 0" class="title"> {{ item.content }} </span>
                            <span v-else class="title"> ["No data"] </span>
                            <br />
                            <span class="sub-title"> data blocks submit by {{ currentUser.byName }} </span>
                        </div>
                    </div> -->
                <!-- </div>
                <div v-if="showLowerNodes(index) && item.name === 'nodeD'" class="node-container" v-menus:left="menusNodeD"> -->
                    <!-- <div v-if="currentUser.name !== ''" class="glass-container">
                        <div class="text-align-center" style="padding-top: 10px; padding-bottom: 10px;">
                            <span v-if="item.content.length > 0" class="title"> {{ item.content }} </span>
                            <span v-else class="title"> ["No data"] </span>
                            <br />
                            <span class="sub-title"> data blocks submit by {{ currentUser.byName }} </span>
                        </div>
                    </div> -->
                <!-- </div>
            </el-col>
        </el-row> -->
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
@import "../../assets/css/border-style.css";

.chains-container2 {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 25px;
    padding-bottom: 40px;
    /* margin: 30px 0px 0px 0px; */
    /* padding: 0px 0px 20px 0px; */
    /* background: #fff; */
    /* background-color: rgba(255, 255, 255, 0.25); */
    /* backdrop-filter: blur(6px); */
    /* -webkit-backdrop-filter: blur(6px); */
    /* border: 1px solid rgba(255, 255, 255, 0.18); */
    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    border-radius: 12px;
    -webkit-border-radius: 12px;
}
.color-success .title {
    font-weight: 700;
    font-size: 2em;
    color: #3dd070;
    letter-spacing: 1px;
    text-align: center;
    padding: 26px 0 15px 0;
}
.color-success .sub-title {
    font-weight: 300;
    font-size: 0.5em;
    color: #3C4857;
    letter-spacing: 1px;
    text-align: center;
    padding: 10px 0 15px 0;
}
.color-danger .title {
    font-weight: 700;
    font-size: 2em;
    color: #ff3948;
    letter-spacing: 1px;
    text-align: center;
    padding: 26px 0 15px 0;
}
.color-danger .sub-title {
    font-weight: 300;
    font-size: 0.5em;
    color: #3C4857;
    letter-spacing: 1px;
    text-align: center;
    padding: 10px 0 15px 0;
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
