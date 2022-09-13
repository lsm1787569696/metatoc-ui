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
                        申请授权
                    </span>
                </div>
                <div class="subtext-container">
                    <span class="subtext">
                        申请数据管理权
                    </span>
                </div>
            </div>
        </div>
    </el-card>

    <el-dialog v-model="dialogVisible">
        <template #header="{ titleId, titleClass }">
            <div :id="titleId" :class="titleClass">
                申请授权
            </div>
        </template>

        <el-form :model="form">
            <el-form-item label="企业/组织名称">
                <el-input v-model="form.enterpriseName" />
            </el-form-item>

            <el-form-item label="企业/组织规模">
                <el-radio-group v-model="form.enterpriseScale" class="ml-4">
                    <el-radio label="1">1-10 人</el-radio>
                    <el-radio label="2">11-50 人</el-radio>
                    <el-radio label="3">51-100 人</el-radio>
                    <el-radio label="4">101-200 人</el-radio>
                    <el-radio label="5">201-500 人</el-radio>
                    <el-radio label="6">500 人以上</el-radio>
                </el-radio-group>
            </el-form-item>

            <div class="form-label-container">
                <label class="form-label">上传营业执照</label>
            </div>
            <el-upload drag multiple>
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">
                    将文件拖至此处或 <em>点击上传</em>
                </div>
                <template #tip>
                    <div class="el-upload__tip">
                        <span>* 为保障数据安全，请您协助上传企业营业执照进行校验</span>
                        <!-- <span>上传的jpg/png附件应当小于500kb</span> -->
                    </div>
                </template>
            </el-upload>
        </el-form>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogVisible = false">提交</el-button>
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
.form-label-container {
    margin-bottom: 8px;
}
</style>

<script setup>
import { ref } from 'vue';
import { UploadFilled } from '@element-plus/icons-vue'

const src = ref("./src/assets/authorization.png")
const dialogVisible = ref(false)
const form = {
    enterpriseName: '',
    enterpriseScale: ''
}
</script>
