<template>
    <el-col :span="11" :offset="1">
        <div class="list-container">
            <div class="list-header">
                <span class="list-header-title">
                    最新交易
                </span>
                <span class="list-header-more">
                    更多 >
                </span>
            </div>
            <div class="list-body">
                <el-card v-for="i in 10" :key="i" :body-style="{ padding: '15px 20px' }" style="margin-top: 10px;">
                    <template #header>
                        <el-button link type="primary" class="title" @click="drawer = true">
                            se93u7K3BybK78pIZyQGtPtISIJAaTrxscy8Wv4a4fqcm4U3pu
                        </el-button>
                        <span class="subtext-right">
                            09-06 15:06
                        </span>
                    </template>
                    <span class="subtext">
                        /vnet.com/flow/20220913/3c84paNQvN  ->  /kubernetes.io/pod/20220913/5fNeeeI42p
                    </span>
                </el-card>
            </div>
        </div>

        <el-drawer v-model="drawer" :direction="direction" :size="size">
            <template #header="{ titleId, titleClass }">
                <div :id="titleId" :class="titleClass">
                    交易详情
                </div>
            </template>
            <template #default>
                <h4>区块基本信息</h4>
                <div class="flex margin-bottom-20" style="font-size: 14px;">
                    <div class="width-120">
                        <span>区块高度</span>
                    </div>
                    <span>2100</span>
                </div>
                <div class="flex margin-bottom-20" style="font-size: 14px;">
                    <div class="width-120">
                        <span>区块Hash</span>
                    </div>
                    <span>uQPePY2zsHAwC3Hnv3jYg2TFHwhqm5JZdnrW66ngB7Cqhv2QYQ</span>
                </div>
                <div class="flex margin-bottom-20" style="font-size: 14px;">
                    <div class="width-120">
                        <span>前区块Hash</span>
                    </div>
                    <el-button link type="primary">JWejIkZ8NGP95bKPv9XqpeAwKs2cBBIUMAXH5xxBb4VmZbb8vj</el-button>
                </div>
                <div class="flex margin-bottom-20" style="font-size: 14px;">
                    <div class="width-120">
                        <span>时间戳</span>
                    </div>
                    <span>2022-09-06 15:06</span>
                </div>

                <h4>其他信息</h4>
                <div class="flex margin-bottom-20" style="font-size: 14px;">
                    <div class="width-120">
                        <span>读写集哈希</span>
                    </div>
                    <span>H3SkfX73u7GTZAcCeum9xfgqkvmKJJa2sWhsEkJwbtHu22I6WS</span>
                </div>
                <div class="flex margin-bottom-20" style="font-size: 14px;">
                    <div class="width-120">
                        <span>交易默克尔根</span>
                    </div>
                    <span>4y8bUdVnwUv8fx2N8SJg8uy84FxRHs22MfzJ7472AbYvHKBjI6</span>
                </div>
                <div class="flex margin-bottom-20" style="font-size: 14px;">
                    <div class="width-120">
                        <span>DAG特征值</span>
                    </div>
                    <span>qYqncrwuu7NEP8rVQfUDJAe4g29WkTUukSTbWX5EVu87NRJExp</span>
                </div>
                <div class="flex margin-bottom-20" style="font-size: 14px;">
                    <div class="width-120">
                        <span>出块节点</span>
                    </div>
                    <span>北京M6数据中心</span>
                </div>


                <h4>交易信息</h4>
                <div class="flex margin-bottom-20" style="font-size: 14px;">
                    <div class="width-120">
                        <span>区块高度</span>
                    </div>
                    <span>2100</span>
                </div>
                <div class="flex margin-bottom-20" style="font-size: 14px;">
                    <div class="width-120">
                        <span>交易id</span>
                    </div>
                    <span>se93u7K3BybK78pIZyQGtPtISIJAaTrxscy8Wv4a4fqcm4U3pu </span>
                </div>
                <div class="flex margin-bottom-20" style="font-size: 14px;">
                    <div class="width-120">
                        <span>发起用户</span>
                    </div>
                    <span>/vnet.com/flow/20220913/3c84paNQvN</span>
                </div>
                <div class="flex margin-bottom-20" style="font-size: 14px;">
                    <div class="width-120">
                        <span>目标合约</span>
                    </div>
                    <el-button link type="primary">CERT_MANAGE</el-button>
                </div>
                <div class="flex margin-bottom-20" style="font-size: 14px;">
                    <div class="width-120">
                        <span>交易状态</span>
                    </div>
                    <span style="color: #3dd070;">SUCCESS</span>
                </div>
                <div class="flex margin-bottom-20" style="font-size: 14px;">
                    <div class="width-120">
                        <span>上链时间</span>
                    </div>
                    <span>2022-09-13</span>
                </div>
            </template>

            <template #footer>
                <div style="flex: auto">
                    <el-button type="primary"  @click="drawer = false">确认</el-button>
                </div>
            </template>
        </el-drawer>
    </el-col>
</template>

<style scoped>
.list-container {
    margin-right: 10px;
}
.list-header {
    border-left-width: 6px;
    border-left-color: #2276ff;
    border-left-style: solid;
}
.list-header-title {
    font-size: 18px;
    color:#2276ff;
    font-weight: bold;
    margin-left: 16px;
}
.list-header-more {
    font-size: 12px;
    color: #999;
    float: right;
    cursor: pointer;
    margin-top: 4px;
}
.list-body {
    margin-top: 18px;
}
.title {
    font-size: 14px;
    font-weight: 600;
}
.subtext {
    font-size: 12px;
    color: #999;
}
.subtext-right {
    font-size: 12px;
    color: #999;
    float: right;
    line-height: 24px;
}
.flex {
    display: flex;
}
.width-120 {
    width: 120px;
}
.margin-bottom-20 {
    margin-bottom: 20px;
}
</style>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
const size = ref('30%')
</script>