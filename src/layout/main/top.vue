<template>
    <div class="main-top">
        <el-row>
            <el-col :span="6" :offset="1">
                <!-- <t-authorization></t-authorization> -->
                <!-- <t-transaction></t-transaction> -->
                <t-CreateBlock></t-CreateBlock>
            </el-col>

            <el-col :span="6">
                <!-- <t-demonstration></t-demonstration> -->
                <!-- <t-manageHDFSPath></t-manageHDFSPath> -->
                <t-ShartBlock></t-ShartBlock>
            </el-col>

            <el-col :span="6">
                <!-- <t-node></t-node> -->
                <!-- <t-allHDFSPath></t-allHDFSPath> -->
            </el-col>

            <el-col :span="6">
                <!-- <t-chart></t-chart> -->
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
.main-top {
    padding-top: 18px;
}
</style>

<script setup>
import authorization from '../../components/cards/authorization.vue'
import transaction from '../../components/cards/transaction.vue'
import demonstration from '../../components/cards/demonstration.vue'
import manageHDFSPath from '../../components/cards/manageHDFSPath.vue'
import node from '../../components/cards/node.vue'
import allHDFSPath from '../../components/cards/allHDFSPath.vue'
import chart from '../../components/cards/chart.vue'
import createBlock from '../../components/cards/createBlock.vue'
import shareBlock from '../../components/cards/shareBlock.vue'

const tAuthorization = authorization
const tTransaction = transaction
const tDemonstration = demonstration
const tManageHDFSPath = manageHDFSPath
const tNode = node
const tAllHDFSPath = allHDFSPath
const tChart = chart
const tCreateBlock = createBlock
const tShartBlock = shareBlock
</script>
