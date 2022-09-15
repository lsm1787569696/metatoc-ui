<template>
    <el-card class="common-cards" @click="dialogVisible = true" style="margin-right:65px;margin-left:-15px">
        <div class="flex">
            <div class="avatar-container">
                <span class="el-avatar el-avatar--circle custom-avatar-style">
                    <el-image class="avatar-image" :src="src"></el-image>
                </span>
            </div>
            <div class="description-container">
                <div class="title-text-container">
                    <span class="title-text">
                        共享块
                    </span>
                </div>
                <div class="subtext-container">
                    <span class="subtext">
                        分享你的钱包
                    </span>
                </div>
            </div>
        </div>
    </el-card>
    
    
    <el-dialog v-model="dialogVisible">
        <template style="" #header="{  titleId, titleClass }">
            <div class="my-header">
                <div :id="titleId" :class="titleClass">共享块</div>
            </div>
        </template>
        <el-alert class="leftTitltMessage" center title="将您的数据共享给您的好友🔊" type="warning" :closable="false" />
        <el-row>
            <el-col :span="11">
               <el-card  shadow="hover">
                <el-alert class="leftTitltMessage" title="此处填写数据为源钱包数据" type="success" :closable="false" />
                <el-form :model="sourceForm">
                    <el-form-item label="源钱包地址：">
                        <el-input v-model="sourceForm.address" />
                    </el-form-item>
                    <el-form-item label="源钱包私钥：">
                        <el-input v-model="sourceForm.key" />
                    </el-form-item>
                    <el-form-item label="HDFSpath：">
                        <el-input v-model="sourceForm.HDFSpath" />
                    </el-form-item>
                </el-form>
               </el-card>
            </el-col>
            <el-col :span="2">
            </el-col>
            <el-col :span="11">
                <el-card  shadow="hover">
                    <el-alert class="leftTitltMessage" title="此处填写数据为目标钱包数据数据" type="success" :closable="false" />
                    <el-form :model="toForm">
                    <el-form-item label="目标钱包地址：">
                        <el-input v-model="toForm.address" />
                    </el-form-item>
                    <el-form-item label="目标钱包私钥："> 
                        <el-input v-model="toForm.key" />
                    </el-form-item>
                </el-form>
                </el-card>
            </el-col>
        </el-row>
        <template #footer>
            <el-button type="primary" @click="clearForm()">确认</el-button>
        </template>
    </el-dialog>
</template>


<script setup>
import { ref ,reactive } from 'vue';

const dialogVisible = ref(false)
const src = ref("./src/assets/shareBlock.png")
const sourceForm = reactive({
  address: '',
  key: '',
  HDFSpath:''
})

const toForm  = reactive({
  address: '',
  key: '',
})

</script>

<style scoped>
    .leftTitltMessage{
        margin: 0 0 15px 0 ;
    }
    .rightTitltMessage{
        margin: 0 0 15px 0 ;
    }
.item{
    text-align: center;
    font-size: 20px;
    margin: 0 0 20px 0 ;
    font-weight: 600;
    color: rgb(32, 92, 78);
}
el-button{
    text-align: center;
}
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
    background: #fd6112;
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
