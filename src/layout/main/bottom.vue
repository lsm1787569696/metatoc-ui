<template>
    <t-allHDFSPath class="padding-top"></t-allHDFSPath>
    <el-row>
        <!-- <t-transaction class="padding-top"></t-transaction> -->
        <!-- <t-manageHDFSPath class="padding-top"></t-manageHDFSPath> -->
    </el-row>
</template>

<style scoped>
.padding-top {
    padding-top: 20px;
}
</style>

<script setup>
import allHDFSPath from '../../components/list/allHDFSPath.vue'
import transaction from '../../components/list/transaction.vue'
import manageHDFSPath from '../../components/list/manageHDFSPath.vue';

const tAllHDFSPath = allHDFSPath
const tTransaction = transaction
const tManageHDFSPath = manageHDFSPath
</script>