<template>
    <el-row style="margin-top: 18px;">
        <el-col :span="22" :offset="1">
            <div class="list-container">
                <div class="list-header">
                    <span class="list-header-title">
                        最新操作
                    </span>
                    <span class="list-header-more" @click="dialogVisible = true">
                        更多 >
                    </span>
                </div>
                <div class="list-body">
                    <el-row>
                        <el-col :span="6">
                            <el-card :body-style="{ padding: '15px 20px' }" style="margin-right: 20px;">
                                <template #header>
                                    <el-button link type="primary" class="title" @click="walletCheckDialogVisible = true">
                                        创建块
                                    </el-button>
                                    <span class="subtext-right">
                                        09-11 11:24
                                    </span>
                                </template>
                                <span class="subtext">
                                    tPdrk46xXEIc7h7SMZrg -> /vnet.com/cloud
                                </span>
                            </el-card>
                        </el-col>
                        <el-col :span="6">
                            <el-card :body-style="{ padding: '15px 20px' }" style="margin-left: 10px; margin-right: 10px;">
                                <template #header>
                                    <el-button link type="primary" class="title" @click="walletCheckDialogVisible = true">
                                        共享块
                                    </el-button>
                                    <span class="subtext-right">
                                        09-11 09:07
                                    </span>
                                </template>
                                <span class="subtext">
                                    /vnet.com/cloud -> Qq4HesHW6SbIUreWxhhb
                                </span>
                            </el-card>
                        </el-col>
                        <el-col :span="6">
                            <el-card :body-style="{ padding: '15px 20px' }" style="margin-left: 10px; margin-right: 10px;">
                                <template #header>
                                    <el-button link type="primary" class="title" @click="walletCheckDialogVisible = true">
                                        共享块
                                    </el-button>
                                    <span class="subtext-right">
                                        09-10 15:06
                                    </span>
                                </template>
                                <span class="subtext">
                                    /vnet.com/cloud -> nrCxK8r86Xm4IYcITpXh
                                </span>
                            </el-card>
                        </el-col>
                        <el-col :span="6">
                            <el-card :body-style="{ padding: '15px 20px' }" style="margin-left: 20px;">
                                <template #header>
                                    <el-button link type="primary" class="title" @click="walletCheckDialogVisible = true">
                                        创建块
                                    </el-button>
                                    <span class="subtext-right">
                                        09-10 12:55
                                    </span>
                                </template>
                                <span class="subtext">
                                    tPdrk46xXEIc7h7SMZrg -> /vnet.com/test
                                </span>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </el-col>
    </el-row>

    <el-dialog v-model="dialogVisible" width="70%">
        <template #header="{ titleId, titleClass }">
            <div :id="titleId" :class="titleClass">
                <h4 style="margin-top: 0px; margin-bottom: 0px;">查看更多操作 ⚙️</h4>
            </div>
        </template>

        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="operationType" label="操作类型" />
            <el-table-column prop="sourceWalletAddress" label="源钱包地址" />
            <el-table-column prop="targetWalletAddress" label="目标钱包地址" />
            <el-table-column prop="HDFSPath" label="HDFS path" />
            <el-table-column prop="timestamp" label="时间戳" />
            <el-table-column prop="status" label="状态">
                <template #default="scope">
                    <el-tag :type="scope.row.status === 'SUCCESS' ? 'success' : 'danger'">{{ scope.row.status }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="查看详情">
            <template #default>
                <el-button link type="primary" size="small" @click="walletCheckDialogVisible = true">查看详情</el-button>
            </template>
            </el-table-column>
        </el-table>

        <template #footer>
            <el-button type="primary" @click="dialogVisible = false">确认</el-button>
        </template>
    </el-dialog>

    <!-- <Check v-model="walletCheckDialogVisible"></Check> -->
    <el-dialog v-model="walletCheckDialogVisible" :show-close="showClose" width="30%" :before-close="handleClose">
        <template #header="{ titleId, titleClass }">
            <div :id="titleId" :class="titleClass">
                <h4 style="margin-top: 0px; margin-bottom: 0px;">验证钱包 🔍</h4>
            </div>
        </template>

        <el-alert #default="scope1" type="info" center show-icon :closable="false">
            <slot v-bind="scope1">
                <div class="iconSize">为保障您的数据安全，请查看详情前先输入钱包地址和钱包私钥</div>
            </slot>
        </el-alert>
        <div style="margin-top: 15px; margin-bottom: 15px;"></div>
        <el-card shadow="hover" style="margin-top: 30px;">
            <el-form :model="form" style="margin-top: 18px; margin-left: 15px; margin-right: 15px;">
                <el-form-item label="钱包地址：">
                <el-input v-model="form.walletAddress" />
                </el-form-item>
                <el-form-item label="钱包私钥：">
                <el-input v-model="form.walletPrivateKey" />
                </el-form-item>
            </el-form>
        </el-card>

        <template #footer>
            <el-button type="primary" @click="checkWallet">确认</el-button>
        </template>
    </el-dialog>

    <el-dialog v-model="viewBlockDialogVisible" :show-close="showClose" width="30%" :before-close="handleClose">
        <template #header="{ titleId, titleClass }">
            <div :id="titleId" :class="titleClass">
                <h4 style="margin-top: 0px; margin-bottom: 0px;">查看区块内容 📃</h4>
            </div>
        </template>

        <div style="text-align: center;">
            <div class="iconSize" style="font-size: 14px; margin-bottom: 10px;">操作类型：创建块</div>
            <div class="iconSize" style="font-size: 14px; margin-bottom: 10px;">源钱包地址：tPdrk46xXEIc7h7SMZrg</div>
            <div class="iconSize" style="font-size: 14px; margin-bottom: 10px;">目标钱包地址：-</div>
            <div class="iconSize" style="font-size: 14px; margin-bottom: 10px;">HDFS path：/vnet.com/cloud</div>
            <div class="iconSize" style="font-size: 14px; margin-bottom: 10px;">时间戳：2022-09-11 11：24</div>
            <div class="iconSize" style="font-size: 14px; margin-bottom: 10px;">状态：
                <el-tag type="success">SUCCESS</el-tag>
            </div>
            <div class="iconSize">区块内容：WELCOME METATOC MEETUP!</div>
        </div>

        <template #footer>
            <el-button type="primary" @click="viewBlockDialogVisible = false">确认</el-button>
        </template>
    </el-dialog>
</template>

<style scoped>
.list-header {
    border-left-width: 6px;
    border-left-color: var(--el-color-primary);
    border-left-style: solid;
}
.list-header-title {
    font-size: 18px;
    color: var(--el-color-primary);
    font-weight: bold;
    margin-left: 18px;
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
    font-size: 16px;
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
import { reactive } from 'vue'
import Check from '../wallet/check.vue';
import { ElMessage } from 'element-plus'

const dialogVisible = ref(false)
const walletCheckDialogVisible = ref(false)
const viewBlockDialogVisible = ref(false)
const tableData = [
  {
    operationType: '创建块',
    sourceWalletAddress: 'tPdrk46xXEIc7h7SMZrg',
    targetWalletAddress: '-',
    HDFSPath: '/vnet.com/cloud',
    timestamp: '2022-09-11 11:24',
    status: 'SUCCESS',
  },
  {
    operationType: '共享块',
    sourceWalletAddress: 'tPdrk46xXEIc7h7SMZrg',
    targetWalletAddress: 'Qq4HesHW6SbIUreWxhhb',
    HDFSPath: '/vnet.com/cloud',
    timestamp: '2022-09-11 09:07',
    status: 'SUCCESS',
  },
  {
    operationType: '共享块',
    sourceWalletAddress: 'tPdrk46xXEIc7h7SMZrg',
    targetWalletAddress: 'nrCxK8r86Xm4IYcITpXh',
    HDFSPath: '/vnet.com/cloud',
    timestamp: '2022-09-10 15:06',
    status: 'SUCCESS',
  },
  {
    operationType: '创建块',
    sourceWalletAddress: 'tPdrk46xXEIc7h7SMZrg',
    targetWalletAddress: '-',
    HDFSPath: '/vnet.com/test',
    timestamp: '2022-09-10 12:55',
    status: 'SUCCESS',
  },
  {
    operationType: '创建块',
    sourceWalletAddress: 'tPdrk46xXEIc7h7SMZrg',
    targetWalletAddress: '-',
    HDFSPath: '/vnet.com/test/cloud',
    timestamp: '2022-09-09 16:01',
    status: 'SUCCESS',
  },
  {
    operationType: '共享块',
    sourceWalletAddress: 'Qq4HesHW6SbIUreWxhhb',
    targetWalletAddress: 'E62ywyJsr6rhaAeBwbzK',
    HDFSPath: '/vnet.com/cloud',
    timestamp: '2022-09-09 15:48',
    status: 'SUCCESS',
  },
]
const form = reactive({
    walletAddress: '',
    walletPrivateKey: '',
})
// const handleClose = (done: () => void) => {
//   ElMessageBox.confirm('Are you sure you want to close this?')
//     .then(() => {
//       done()
//     })
//     .catch(() => {
//       // catch error
//     })
// }
const checkWallet = () => {
    console.log(form)
    if (form.walletAddress == '') {
        ElMessage.error('Oops 😢, 钱包地址不能为空~')
    } else if (form.walletPrivateKey == '') {
        ElMessage.error('Oops 😢, 钱包私钥不能为空~')
    } else if (form.walletAddress != 'tPdrk46xXEIc7h7SMZrg' && form.walletPrivateKey != 'GbzzC3C9cgGW997MPIV2') {
        ElMessage.error('Oops 😢, 此内容您无权限查看~')
    } else {
        // tPdrk46xXEIc7h7SMZrg
        // GbzzC3C9cgGW997MPIV2
        walletCheckDialogVisible.value = false
        viewBlockDialogVisible.value = true
    }
}
</script>