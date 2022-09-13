<template>
    <el-card class="common-cards" @click="dialogVisible = true">
        <div class="flex">
            <div class="avatar-container">
                <span class="el-avatar el-avatar--circle custom-avatar-style">
                    <el-image class="avatar-image" :src="src"></el-image>
                </span>
            </div>
            <div class="description-container">
                <div class="title-text-container">
                    <span class="title-text">
                        4
                    </span>
                </div>
                <div class="subtext-container">
                    <span class="subtext">
                        节点数
                    </span>
                </div>
            </div>
        </div>
    </el-card>

    <el-dialog v-model="dialogVisible">
        <template #header="{ titleId, titleClass }">
            <div :id="titleId" :class="titleClass">
                节点数：4（健康节点数：<span style="color: #67C23A;">3</span>，损坏节点数：<span style="color: #F56C6C;">1</span>）
            </div>
        </template>
        <el-table :data="gridData" border>
            <el-table-column property="nodeName" label="节点名称" />
            <el-table-column property="nodeAddress" label="节点地址" />
            <el-table-column property="nodeHealty" label="节点状态" width="100">
                <template #default="scope">
                    <el-tag :type="scope.row.nodeHealty === '健康' ? 'success' : 'danger'">
                        {{ scope.row.nodeHealty }}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="更多操作" width="150">
                <template #default>
                    <el-button link type="primary" size="small" @click="handleClick">查看明细</el-button>
                </template>
            </el-table-column>
        </el-table>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<style scoped>
.common-cards {
    margin-top: 12px;
    margin-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
    cursor: pointer;
}
.flex {
    display: flex;
}
.custom-avatar-style {
    --el-avatar-size: 50px;
    background: #2276ff;
}
.avatar-image {
    height: 60%;
}
.description-container {
    margin-top: 2px;
    margin-left: 20px;
}
.title-text {
    font-size: 18px;
    font-weight: blod;
}
.subtext {
    font-size: 12px;
    color: #999;
}
</style>

<script setup>
import { ref } from 'vue';

const src = ref("./src/assets/transaction.png")
const dialogVisible = ref(false)
const gridData = [
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
</script>
