<template>
    <div class="header">
        <el-row>
            <el-col class="header-left" :span="5" :offset="1">
                <div style="display: inline-block; cursor: pointer;" @click="locationToGitHub">
                    <el-image style="width: 56px; height: 56px; vertical-align: top;" :src="headerImageSrc" :fit="headerImageFit"></el-image>
                    <div style="display: inline-block; margin-left: 10px; position: relative; top: 15px;">
                        <span style="font-size: 18px; font-weight: bold;">
                            MetaTOC
                        </span>
                    </div>
                </div>
            </el-col>
            <el-col class="header-right" :span="17" style="text-align: right; padding-right: 20px;">
                <el-button size="large" @click="locationToGitHub" style="margin-top: 6px; padding-left: 12px; padding-right: 12px;">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                    <span style="padding-left: 5px; margin-top: 2px;">Source Code</span>
                </el-button>

                <el-button size="large" @click="locationToGitHub" style="margin-top: 6px; padding-left: 12px; padding-right: 12px;">
                    <svg style="color: #F56C6C;" xmlns="http://www.w3.org/2000/svg" class="icon text-pink" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path></svg>
                    <span style="padding-left: 5px; margin-top: 2px;">Sponsor</span>
                </el-button>
            </el-col>
        </el-row>
    </div>

    <div class="main" style="background: #f5f7fb;">
        <div class="main-top">
            <el-row>
                <el-col :span="5" :offset="1">
                    <el-card class="common-cards" style="cursor: pointer;">
                        <div style="margin-top: -15px;">
                            <div style="display: inline-block;">
                                <span class="el-avatar el-avatar--circle" style="--el-avatar-size: 50px; background: #409EFF;">
                                    <el-image :src="blockUrl" style="object-fit: cover; height:60%;"></el-image>
                                </span>
                            </div>
                            <div style="display: inline-block; margin-left: 20px; position: relative; top: 18px;">
                                <div style="display: inline-block; position: relative;">
                                    <span style="font-size: 18px; font-weight: blod;">
                                        22
                                    </span>
                                </div>
                                <br>
                                <div style="display: inline-block; position: relative;">
                                    <span style="font-size: 12px; color: #999;">
                                        区块高度
                                    </span>
                                </div>
                            </div>
                        </div>
                    </el-card>

                    <el-card class="common-cards" style="margin-top: 15px; cursor: pointer;">
                        <div style="margin-top: -15px;">
                            <div style="display: inline-block;">
                                <span class="el-avatar el-avatar--circle" style="--el-avatar-size: 50px; background: #67C23A;">
                                    <el-image :src="organizationUrl" style="object-fit: cover; height:60%;"></el-image>
                                </span>
                            </div>
                            <div style="display: inline-block; margin-left: 20px; position: relative; top: 18px;">
                                <div style="display: inline-block; position: relative;">
                                    <span style="font-size: 18px; font-weight: blod;">
                                        5
                                    </span>
                                </div>
                                <br>
                                <div style="display: inline-block; position: relative;">
                                    <span style="font-size: 12px; color: #999;">
                                        组织数
                                    </span>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </el-col>

                <el-col :span="5">
                    <el-card class="common-cards" style="cursor: pointer;">
                        <div style="margin-top: -15px;">
                            <div style="display: inline-block;">
                                <span class="el-avatar el-avatar--circle" style="--el-avatar-size: 50px; background: #409EFF;">
                                    <el-image :src="transactionUrl" style="object-fit: cover; height:60%;"></el-image>
                                </span>
                            </div>
                            <div style="display: inline-block; margin-left: 20px; position: relative; top: 18px;">
                                <div style="display: inline-block; position: relative;">
                                    <span style="font-size: 18px; font-weight: blod;">
                                        22
                                    </span>
                                </div>
                                <br>
                                <div style="display: inline-block; position: relative;">
                                    <span style="font-size: 12px; color: #999;">
                                        累计交易数
                                    </span>
                                </div>
                            </div>
                        </div>
                    </el-card>

                    <el-card class="common-cards" style="margin-top: 15px; cursor: pointer;" @click="dialogNodeVisible = true">
                        <div style="margin-top: -15px;">
                            <div style="display: inline-block;">
                                <span class="el-avatar el-avatar--circle" style="--el-avatar-size: 50px; background: #67C23A;">
                                    <el-image :src="nodeUrl" style="object-fit: cover; height:60%;"></el-image>
                                </span>
                            </div>
                            <div style="display: inline-block; margin-left: 20px; position: relative; top: 18px;">
                                <div style="display: inline-block; position: relative;">
                                    <span style="font-size: 18px; font-weight: blod;">
                                        4
                                    </span>
                                </div>
                                <br>
                                <div style="display: inline-block; position: relative;">
                                    <span style="font-size: 12px; color: #999;">
                                        节点数
                                    </span>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </el-col>

                <el-col :span="5">
                    <el-card class="common-cards" style="cursor: pointer;">
                        <div style="margin-top: -15px;">
                            <div style="display: inline-block;">
                                <span class="el-avatar el-avatar--circle" style="--el-avatar-size: 50px; background: #409EFF;">
                                    <el-image :src="contractkUrl" style="object-fit: cover; height:60%;"></el-image>
                                </span>
                            </div>
                            <div style="display: inline-block; margin-left: 20px; position: relative; top: 18px;">
                                <div style="display: inline-block; position: relative;">
                                    <span style="font-size: 18px; font-weight: blod;">
                                        6
                                    </span>
                                </div>
                                <br>
                                <div style="display: inline-block; position: relative;">
                                    <span style="font-size: 12px; color: #999;">
                                        累计合约数
                                    </span>
                                </div>
                            </div>
                        </div>
                    </el-card>

                    <el-card class="common-cards" style="margin-top: 15px; cursor: pointer;">
                        <div style="margin-top: -15px;">
                            <div style="display: inline-block;">
                                <span class="el-avatar el-avatar--circle" style="--el-avatar-size: 50px; background: #67C23A;">
                                    <el-image :src="userUrl" style="object-fit: cover; height:60%;"></el-image>
                                </span>
                            </div>
                            <div style="display: inline-block; margin-left: 20px; position: relative; top: 18px;">
                                <div style="display: inline-block; position: relative;">
                                    <span style="font-size: 18px; font-weight: blod;">
                                        8
                                    </span>
                                </div>
                                <br>
                                <div style="display: inline-block; position: relative;">
                                    <span style="font-size: 12px; color: #999;">
                                        链上用户数
                                    </span>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </el-col>

                <el-col :span="7">
                    <el-card class="common-cards" id="myChartCard" style="cursor: pointer; margin: 0px 20px 0px 10px; padding: 0px;" :body-style="{ padding: '0px'}">
                        <div id="myChart"></div>
                    </el-card>
                </el-col>
            </el-row>
        </div>

        <div class="main-middle">
            <el-row style="margin-top: 25px;">
                <el-col :span="22" :offset="1">
                    <div class="main-middle-left">
                        <div class="main-middle-left-header" style="margin-bottom: 0px;">
                            <span class="main-middle-left-header-title">
                                最新区块
                            </span>
                            <span class="main-middle-left-header-more">
                                更多 >
                            </span>
                        </div>
                        <div class="main-middle-left-body">
                            <el-row>
                                <el-col :span="6">
                                    <el-card style="margin-top: 10px; margin-right: 20px;" :body-style="{ padding: '15px 20px' }">
                                        <template #header>
                                            <span style="font-size: 18px; font-weight: 600;">
                                                # 22
                                            </span>
                                            <span style="font-size: 12px; color: #999; float: right; line-height: 24px;">
                                                09-06 15:06
                                            </span>
                                        </template>
                                        <span style="font-size: 12px; color: #999;">
                                            http://erp.21vianet.com/zhixincloud
                                        </span>
                                    </el-card>
                                </el-col>
                                <el-col :span="6">
                                    <el-card style="margin-top: 10px; margin-right: 20px;" :body-style="{ padding: '15px 20px' }">
                                        <template #header>
                                            <span style="font-size: 18px; font-weight: 600;">
                                                # 21
                                            </span>
                                            <span style="font-size: 12px; color: #999; float: right; line-height: 24px;">
                                                09-06 15:06
                                            </span>
                                        </template>
                                        <span style="font-size: 12px; color: #999;">
                                            http://erp.21vianet.com/zhixincloud
                                        </span>
                                    </el-card>
                                </el-col>
                                <el-col :span="6">
                                    <el-card style="margin-top: 10px; margin-right: 20px;" :body-style="{ padding: '15px 20px' }">
                                        <template #header>
                                            <span style="font-size: 18px; font-weight: 600;">
                                                # 20
                                            </span>
                                            <span style="font-size: 12px; color: #999; float: right; line-height: 24px;">
                                                09-06 15:06
                                            </span>
                                        </template>
                                        <span style="font-size: 12px; color: #999;">
                                            http://erp.21vianet.com/zhixincloud
                                        </span>
                                    </el-card>
                                </el-col>
                                <el-col :span="6">
                                    <el-card style="margin-top: 10px; margin-right: 20px;" :body-style="{ padding: '15px 20px' }">
                                        <template #header>
                                            <span style="font-size: 18px; font-weight: 600;">
                                                # 19
                                            </span>
                                            <span style="font-size: 12px; color: #999; float: right; line-height: 24px;">
                                                09-06 15:06
                                            </span>
                                        </template>
                                        <span style="font-size: 12px; color: #999;">
                                            http://erp.21vianet.com/zhixincloud
                                        </span>
                                    </el-card>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="main-bottom">
            <el-row style="margin-top: 25px;">
                <el-col :span="11" :offset="1">
                    <div class="main-bottom-left">
                        <div class="main-bottom-left-header">
                            <span class="main-bottom-left-header-title">
                                最新交易
                                <el-icon style="top: 3px;"><InfoFilled /></el-icon>
                            </span>
                            <span class="main-bottom-left-header-more">
                                更多 >
                            </span>
                        </div>
                        <div class="main-bottom-left-body">
                            <el-card v-for="i in 10" :key="i" class="box-card" style="margin-top: 10px; margin-right: 13px;" :body-style="{ padding: '15px 20px' }">
                                <template #header>
                                    <el-button link type="primary">
                                        se93u7K3BybK78pIZyQGtPtISIJAaTrxscy8Wv4a4fqcm4U3pu
                                    </el-button>
                                    <span style="font-size: 12px; color: #999; float: right;">
                                        09-06 15:06
                                    </span>
                                </template>
                                <span style="font-size: 12px; color: #999;">
                                    http://erp.21vianet.com/zhixincloud  ->  https://cn.vuejs.org/api
                                </span>
                            </el-card>
                        </div>
                    </div>
                </el-col>

                <el-col :span="11">
                    <div class="main-bottom-right">
                        <div class="main-bottom-right-header">
                            <span class="main-bottom-right-header-title">
                                最新合约
                            </span>
                            <span class="main-bottom-right-header-more">
                                更多 >
                            </span>
                        </div>

                        <div class="main-bottom-right-body">
                            <el-card v-for="i in 3" :key="i" class="box-card" style="margin-top: 10px; margin-left: -5px; margin-right: 20px;" :body-style="{ padding: '15px 20px' }">
                                <template #header>
                                    <el-button link type="primary">
                                        se93u7K3BybK78pIZyQGtPtISIJAaTrxscy8Wv4a4fqcm4U3pu
                                    </el-button>
                                    <span style="font-size: 12px; color: #999; float: right;">
                                        09-06 15:06
                                    </span>
                                </template>
                                <span style="font-size: 12px; color: #999;">
                                    http://erp.21vianet.com/zhixincloud
                                </span>
                            </el-card>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>

    <div class="footer">

    </div>

    <el-dialog v-model="dialogNodeVisible" :width="dialogNodeWidth">
        <template #header="{ titleId, titleClass }">
            <div :id="titleId" :class="titleClass">
                节点数：4（健康节点数：<span style="color: #67C23A;">3</span>，损坏节点数：<span style="color: #F56C6C;">1</span>）
            </div>
        </template>
        <el-table :data="gridNodeData" border style="margin-top: -10px; margin-bottom: 0px;">
            <el-table-column property="nodeName" label="节点名称" />
            <el-table-column property="nodeAddress" label="节点地址" />
            <el-table-column property="nodeHealty" label="节点状态" width="100">
                <template  #default="scope">
                    <el-tag
                        :type="scope.row.nodeHealty === '健康' ? 'success' : 'danger'"
                        disable-transitions
                        >{{ scope.row.nodeHealty }}</el-tag
                        >
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="更多操作" width="150">
                <template #default>
                    <el-button link type="primary" size="small" @click="handleClick">查看明细</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--<template #footer>
            <el-button type="primary" @click="dialogNodeVisible = false">确定</el-button>
        </template>-->
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity"
import { InfoFilled } from '@element-plus/icons-vue'
import * as echarts from 'echarts'
import { onMounted } from 'vue'

const headerImageFit = ref("contain")
const headerImageSrc = ref("./src/assets/logo.png")
const blockUrl = ref("./src/assets/block.png")
const contractkUrl = ref("./src/assets/contract.png")
const nodeUrl = ref("./src/assets/node.png")
const organizationUrl = ref("./src/assets/organization.png")
const transactionUrl = ref("./src/assets/transaction.png")
const userUrl = ref("./src/assets/user.png")

const dialogNodeVisible = ref(false)
const dialogNodeWidth = ref("50%")
const gridNodeAlign = ref("center")
const gridNodeData = [
  {
    nodeName: '北京M6数据中心',
    nodeAddress: 'http://10.22.50.171:5432',
    nodeHealty: '健康',
  },
  {
    nodeName: '北京香山数据中心',
    nodeAddress: 'http://10.22.50.171:5433',
    nodeHealty: '健康',
  },
  {
    nodeName: '北京B28数据中心',
    nodeAddress: 'http://10.22.50.171:5434',
    nodeHealty: '健康',
  },
  {
    nodeName: '北京大兴星光影视城数据中心',
    nodeAddress: 'http://10.22.50.171:5435',
    nodeHealty: '损坏',
  },
]

const locationToGitHub = () => {
    location.href = "https://github.com/vmeta42/metatoc"
}
const showDetailInfo = type => {
    if (type == "node") {
    }
}
const handleClick = () => {
  console.log('click')
}
const drawChart = () => {
    type EChartsOption = echarts.EChartsOption

    var chartDom = document.getElementById('myChart')!;
    var myChart = echarts.init(chartDom, null, {
        width: document.getElementById('myChart').offsetWidth,
        height: 238,
    });
    var option: EChartsOption;

    option = {
        title: {
            text: '最新24H交易',
            top: 12,
            left: 10,
            textStyle: {
                fontSize: 14,
            },
        },
        grid: {
            top: '24%',
            left: '5%',
            right: '5%',
            bottom: '8%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
            }
        ]
    };

    option && myChart.setOption(option);
}

onMounted(() => {
    drawChart()
})
</script>

<style scoped>
.header, .main {
  border-bottom: 1px solid var(--el-border-color);
}

.main {
    padding-top: 20px;
    padding-bottom: 20px;
}

.footer {
    margin-top: 20px;
}

.header-left {
    padding-left: 15px;
    padding-bottom: 3px;
}

.common-cards {
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px 0px;
}

.the-second-row-cards {
    margin-top: 10px;
}

.main-middle-left, .main-bottom-left, .main-bottom-right {
    margin-left: 12px;
}

.main-middle-left-header, .main-bottom-left-header, .main-bottom-right-header {
    border-left-width: 6px;
    border-left-color: #409EFF;
    border-left-style: solid;
    margin-bottom: 18px;
}

.main-middle-left-header-title, .main-bottom-left-header-title, .main-bottom-right-header-title {
    font-size: 20px;
    color:#409EFF;
    font-weight: bold;
    margin-left: 15px;
}

.main-middle-left-header-more, .main-bottom-left-header-more, .main-bottom-right-header-more {
    font-size: 12px;
    color: #999;
    float: right;
    margin-right: 20px;
    line-height: 27px;
    cursor: pointer;
}

.main-middle-left-body, .main-bottom-left-body, .main-bottom-right-body {
    margin-top: 10px;
}
</style>
