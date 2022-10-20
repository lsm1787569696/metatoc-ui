<template>
    <el-button class="header-right-button" type="primary" size="large" @click="dialogVisible = true">
        <svg t="1663134549337" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3667" width="24" height="24"><path d="M853.333333 640v170.666667H170.666667V213.333333h682.666666v170.666667h42.666667v256h-42.666667z m-42.666666-170.666667h-85.333334c-25.6 0-42.666667 17.066667-42.666666 42.666667s17.066667 42.666667 42.666666 42.666667h85.333334v-85.333334z m-42.666667-85.333333V298.666667H256v426.666666h512v-85.333333h-42.666667c-72.533333 0-128-55.466667-128-128s55.466667-128 128-128h42.666667z" fill="#ffffff" p-id="3668"></path></svg>
        <span class="header-right-button-text">创建钱包</span>
    </el-button>

    <el-dialog v-model="dialogVisible" :show-close="showClose" width="30%">
        <template #header="{ titleId, titleClass }">
            <div :id="titleId" :class="titleClass">
                <h4 style="margin-top: 0px; margin-bottom: 0px;">创建钱包 ✌️</h4>
            </div>
        </template>

        <el-alert #default="scope1" type="warning" center show-icon :closable="false">
            <slot v-bind="scope1">
                <div class="iconSize">需要注意的事项！！！</div>
                <div class="iconSize">1、每创建一个钱包成功后都会在下方显示钱包地址和钱包私钥；</div>
                <div class="iconSize">2、请您务必牢记钱包地址和钱包私钥，这将是之后用来创建块/共享块/查看块的重要凭证；</div>
                <div class="iconSize">3、请不要轻易将钱包地址和钱包私钥分享给他人，这将严重影响您的数据安全。</div>
            </slot>
        </el-alert>
        <div style="margin-top: 15px; margin-bottom: 15px;"></div>
        <el-alert #default="scope2" type="success" center :closable="false">
            <slot v-bind="scope2">
                <div class="iconSize">钱包地址：tPdrk46xXEIc7h7SMZrg</div>
                <div class="iconSize">钱包私钥：GbzzC3C9cgGW997MPIV2</div>
            </slot>
        </el-alert>

        <template #footer>
            <el-button type="primary" @click="dialogVisible = false">确认</el-button>
        </template>
    </el-dialog>
</template>

<style scoped>
.header-right-button {
    margin-top: 8px;
    padding-left: 12px;
    padding-right: 12px;
    margin-left: 6px;
    margin-right: 6px;
    float: right;
}
.header-right-button-text {
    padding-left: 5px;
    margin-top: 2px;
}
.iconSize {
    line-height: 20px;
}
</style>

<script lang="ts" setup>
import { ref } from 'vue'
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
</script>