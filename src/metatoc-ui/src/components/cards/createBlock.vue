<template>
    <el-card class="common-cards" @click="dialogVisible = true" style="margin-right:45px">
        <div class="flex">
            <div class="avatar-container">
                <span class="el-avatar el-avatar--circle custom-avatar-style">
                    <el-image class="avatar-image" :src="src"></el-image>
                </span>
            </div>
            <div class="description-container">
                <div class="title-text-container">
                    <span class="title-text">
                        创建块
                    </span>
                </div>
                <div class="subtext-container">
                    <span class="subtext">
                        创建一个新的钱包
                    </span>
                </div>
            </div>
        </div>
    </el-card>


    <el-dialog v-model="dialogVisible" :close=clearForm() width="25%">
        <template style="" #header="{  titleId, titleClass }">
            <div class="my-header">
                <div :id="titleId" :class="titleClass">创建块</div>
            </div>
        </template>
        <el-alert class="leftTitltMessage"  center title="请输入以下内容创建您的钱包📚" type="success" :closable="false" />
        <el-row>
            <el-card  shadow="hover" center  style="margin:10px 50px 0 60px">
            <el-form :model="createBlockForm">
                <el-form-item label="源钱包地址：">
                    <el-input v-model="createBlockForm.address" />
                </el-form-item>
                <el-form-item label="源钱包私钥：">
                    <el-input v-model="createBlockForm.key" />
                </el-form-item>
                <el-form-item label="HDFSpath：">
                    <el-input v-model="createBlockForm.HDFSpath" />
                </el-form-item>
                <el-form-item label="区块内容">
                    <el-input v-model="createBlockForm.blockData" />
                </el-form-item>
            </el-form>
            </el-card>
        </el-row>
        <template #footer>
            <el-button type="primary">确认</el-button>
        </template>
    </el-dialog>

</template>



<script setup>
    import { ref,reactive } from 'vue';
    const src = ref("./src/assets/createBlock.png")
    const dialogVisible = ref(false)
    const createBlockForm  = reactive({
        address: '',
        key: '',
        HDFSpath:'',
        blockData:''
    })

    function clearForm (){
        this.createBlockForm.address = ''
        this.createBlockForm.key = ''
        this.createBlockForm.HDFSpath = ''
        this.createBlockForm.blockData = ''
    }
</script>
    

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
