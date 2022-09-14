<template>
    <el-dialog v-model="dialogVisible" :show-close="showClose" width="30%">
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
            <el-button type="primary" @click="dialogVisible = false">确认</el-button>
        </template>
    </el-dialog>
</template>

<style scoped>

</style>

<script lang="ts" setup>
import { ref } from 'vue'
import { reactive } from 'vue'
import { ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)
const showClose = ref(false)
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
const form = reactive({
    walletAddress: '',
    walletPrivateKey: '',
})
</script>