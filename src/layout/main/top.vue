<template>
    <div class="main-top">
        <el-row>
            <el-col :span="5" :offset="1">
                <t-authorization></t-authorization>
                <t-transaction></t-transaction>
            </el-col>

            <el-col :span="5">
                <t-demonstration></t-demonstration>
                <t-manageHDFSPath></t-manageHDFSPath>
            </el-col>

            <el-col :span="5">
                <t-node></t-node>
                <t-allHDFSPath></t-allHDFSPath>
            </el-col>

            <el-col :span="7">
                <t-chart></t-chart>
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

const tAuthorization = authorization
const tTransaction = transaction
const tDemonstration = demonstration
const tManageHDFSPath = manageHDFSPath
const tNode = node
const tAllHDFSPath = allHDFSPath
const tChart = chart
</script>