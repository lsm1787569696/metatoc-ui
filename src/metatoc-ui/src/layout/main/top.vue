<template>
    <div class="main-top">
        <el-row>
            <el-col :span="8" :offset="1">
                <!-- <t-authorization></t-authorization> -->
                <!-- <t-transaction></t-transaction> -->
                <!-- <t-CreateBlock></t-CreateBlock> -->
                <!-- <t-User></t-User> -->
                <!-- <t-ContentArea></t-ContentArea> -->
                <tuserContent></tuserContent>
            </el-col>
            <el-col :span="13">
                <!-- <t-Share></t-Share> -->
                <!-- <t-RunningState></t-RunningState> -->
                <!-- <t-Dom></t-Dom> -->
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
import contentArea from '../../components/cards/contentArea.vue'
import share from '../../components/cards/share.vue'
import runningState from '../../components/cards/runningState.vue'
import dom from '../../components/cards/dom.vue'
import user from '../../components/cards/user.vue'
import userContent from '../../components/cards/userContent.vue'

const tAuthorization = authorization
const tTransaction = transaction
const tDemonstration = demonstration
const tManageHDFSPath = manageHDFSPath
const tNode = node
const tAllHDFSPath = allHDFSPath
const tChart = chart
const tCreateBlock = createBlock
const tShartBlock = shareBlock
const tContentArea = contentArea
const tShare = share
const tRunningState = runningState
const tDom = dom
const tUser = user
const tuserContent = userContent
</script>
