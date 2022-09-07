<template>
    <div class="header">
        <el-row>
            <el-col class="header-left" :span="5" :offset="1">
                <div style="display: inline-block; cursor: pointer;" @click="locationToGitHub">
                    <el-image style="width: 56px; height: 56px; vertical-align: top;" :src="headerImageSrc" :fit="headerImageFit"></el-image>
                    <div style="display: inline-block; margin-left: 10px; position: relative; top: 15px;">
                        <span style="font-size: 18px; font-weight: bold;">
                            MetaTOC
                        </span>
                    </div>
                </div>
            </el-col>
            <!--<el-col class="header-right" :span="18">
            </el-col>-->
        </el-row>
    </div>

    <div class="main" style="background: #f5f7fb;">
        <div class="main-top">
            <el-row>
                <el-col :span="5" :offset="1">
                    <el-card class="common-cards">
                        <div style="margin-top: -15px;">
                            <div style="display: inline-block;">
                                <span class="el-avatar el-avatar--circle" style="--el-avatar-size: 50px; background: #2d5fff;">
                                    <el-image :src="blockUrl" style="object-fit: cover; height:60%;"></el-image>
                                </span>
                            </div>
                            <div style="display: inline-block; margin-left: 20px; position: relative; top: 18px;">
                                <div style="display: inline-block; position: relative;">
                                    <span style="font-size: 18px; font-weight: blod;">
                                        22
                                    </span>
                                </div>
                                <br>
                                <div style="display: inline-block; position: relative;">
                                    <span style="font-size: 12px; color: #999;">
                                        区块高度
                                    </span>
                                </div>
                            </div>
                        </div>
                    </el-card>

                    <el-card class="common-cards" style="margin-top: 15px;">
                        <div style="margin-top: -15px;">
                            <div style="display: inline-block;">
                                <span class="el-avatar el-avatar--circle" style="--el-avatar-size: 50px; background: #3dd070;">
                                    <el-image :src="organizationUrl" style="object-fit: cover; height:60%;"></el-image>
                                </span>
                            </div>
                            <div style="display: inline-block; margin-left: 20px; position: relative; top: 18px;">
                                <div style="display: inline-block; position: relative;">
                                    <span style="font-size: 18px; font-weight: blod;">
                                        5
                                    </span>
                                </div>
                                <br>
                                <div style="display: inline-block; position: relative;">
                                    <span style="font-size: 12px; color: #999;">
                                        组织数
                                    </span>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </el-col>

                <el-col :span="5">
                    <el-card class="common-cards">
                        <div style="margin-top: -15px;">
                            <div style="display: inline-block;">
                                <span class="el-avatar el-avatar--circle" style="--el-avatar-size: 50px; background: #2d5fff;">
                                    <el-image :src="transactionUrl" style="object-fit: cover; height:60%;"></el-image>
                                </span>
                            </div>
                            <div style="display: inline-block; margin-left: 20px; position: relative; top: 18px;">
                                <div style="display: inline-block; position: relative;">
                                    <span style="font-size: 18px; font-weight: blod;">
                                        22
                                    </span>
                                </div>
                                <br>
                                <div style="display: inline-block; position: relative;">
                                    <span style="font-size: 12px; color: #999;">
                                        累计交易数
                                    </span>
                                </div>
                            </div>
                        </div>
                    </el-card>

                    <el-card class="common-cards" style="margin-top: 15px; cursor: pointer;" @click="showDetailInfo('node')">
                        <div style="margin-top: -15px;">
                            <div style="display: inline-block;">
                                <span class="el-avatar el-avatar--circle" style="--el-avatar-size: 50px; background: #3dd070;">
                                    <el-image :src="nodeUrl" style="object-fit: cover; height:60%;"></el-image>
                                </span>
                            </div>
                            <div style="display: inline-block; margin-left: 20px; position: relative; top: 18px;">
                                <div style="display: inline-block; position: relative;">
                                    <span style="font-size: 18px; font-weight: blod;">
                                        4
                                    </span>
                                </div>
                                <br>
                                <div style="display: inline-block; position: relative;">
                                    <span style="font-size: 12px; color: #999;">
                                        节点数
                                    </span>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </el-col>

                <el-col :span="5">
                    <el-card class="common-cards">
                        <div style="margin-top: -15px;">
                            <div style="display: inline-block;">
                                <span class="el-avatar el-avatar--circle" style="--el-avatar-size: 50px; background: #2d5fff;">
                                    <el-image :src="contractkUrl" style="object-fit: cover; height:60%;"></el-image>
                                </span>
                            </div>
                            <div style="display: inline-block; margin-left: 20px; position: relative; top: 18px;">
                                <div style="display: inline-block; position: relative;">
                                    <span style="font-size: 18px; font-weight: blod;">
                                        6
                                    </span>
                                </div>
                                <br>
                                <div style="display: inline-block; position: relative;">
                                    <span style="font-size: 12px; color: #999;">
                                        累计合约数
                                    </span>
                                </div>
                            </div>
                        </div>
                    </el-card>

                    <el-card class="common-cards" style="margin-top: 15px;">
                        <div style="margin-top: -15px;">
                            <div style="display: inline-block;">
                                <span class="el-avatar el-avatar--circle" style="--el-avatar-size: 50px; background: #3dd070;">
                                    <el-image :src="userUrl" style="object-fit: cover; height:60%;"></el-image>
                                </span>
                            </div>
                            <div style="display: inline-block; margin-left: 20px; position: relative; top: 18px;">
                                <div style="display: inline-block; position: relative;">
                                    <span style="font-size: 18px; font-weight: blod;">
                                        8
                                    </span>
                                </div>
                                <br>
                                <div style="display: inline-block; position: relative;">
                                    <span style="font-size: 12px; color: #999;">
                                        链上用户数
                                    </span>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </el-col>

                <el-col :span="8">
                </el-col>
            </el-row>
        </div>

        <div class="main-middle">
            <el-row style="margin-top: 25px;">
                <el-col :span="22" :offset="1">
                    <div class="main-middle-left">
                        <div class="main-middle-left-header" style="margin-bottom: 0px;">
                            <span class="main-middle-left-header-title">
                                最新区块
                            </span>
                            <span class="main-middle-left-header-more">
                                更多 >
                            </span>
                        </div>
                        <div class="main-middle-left-body">
                            <el-row>
                                <el-col :span="6">
                                    <el-card style="margin-top: 10px; margin-right: 20px;">
                                        <template #header>
                                            <span style="font-size: 22px; font-weight: 600;">
                                                # 22
                                            </span>
                                            <span style="font-size: 14px; color: #999; float: right; line-height: 32px;">
                                                09-06 15:06
                                            </span>
                                        </template>
                                        <span style="font-size: 14px; color: #999;">
                                            http://erp.21vianet.com/zhixincloud
                                        </span>
                                    </el-card>
                                </el-col>
                                <el-col :span="6">
                                    <el-card style="margin-top: 10px; margin-right: 20px;">
                                        <template #header>
                                            <span style="font-size: 22px; font-weight: 600;">
                                                # 21
                                            </span>
                                            <span style="font-size: 14px; color: #999; float: right; line-height: 32px;">
                                                09-06 15:06
                                            </span>
                                        </template>
                                        <span style="font-size: 14px; color: #999;">
                                            http://erp.21vianet.com/zhixincloud
                                        </span>
                                    </el-card>
                                </el-col>
                                <el-col :span="6">
                                    <el-card style="margin-top: 10px; margin-right: 20px;">
                                        <template #header>
                                            <span style="font-size: 22px; font-weight: 600;">
                                                # 20
                                            </span>
                                            <span style="font-size: 14px; color: #999; float: right; line-height: 32px;">
                                                09-06 15:06
                                            </span>
                                        </template>
                                        <span style="font-size: 14px; color: #999;">
                                            http://erp.21vianet.com/zhixincloud
                                        </span>
                                    </el-card>
                                </el-col>
                                <el-col :span="6">
                                    <el-card style="margin-top: 10px; margin-right: 20px;">
                                        <template #header>
                                            <span style="font-size: 22px; font-weight: 600;">
                                                # 19
                                            </span>
                                            <span style="font-size: 14px; color: #999; float: right; line-height: 32px;">
                                                09-06 15:06
                                            </span>
                                        </template>
                                        <span style="font-size: 14px; color: #999;">
                                            http://erp.21vianet.com/zhixincloud
                                        </span>
                                    </el-card>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>

        <!--<div class="main-bottom">
            <el-row style="margin-top: 25px;">
                <el-col :span="11" :offset="1">
                    <div class="main-bottom-left">
                        <div class="main-bottom-left-header">
                            <span class="main-bottom-left-header-title">
                                最新交易
                                <el-icon style="top: 3px;"><InfoFilled /></el-icon>
                            </span>
                            <span class="main-bottom-left-header-more">
                                更多 >
                            </span>
                        </div>
                        <div class="main-bottom-left-body">
                            <el-card v-for="i in 10" :key="i" class="box-card" style="margin-top: 10px; margin-right: 20px;">
                                <template #header>
                                    <el-link type="primary">
                                        se93u7K3BybK78pIZyQGtPtISIJAaTrxscy8Wv4a4fqcm4U3pu
                                    </el-link>
                                    <span style="font-size: 14px; color: #999; float: right;">
                                        09-06 15:06
                                    </span>
                                </template>
                                <span style="font-size: 14px; color: #999;">
                                    http://erp.21vianet.com/zhixincloud  ->  https://cn.vuejs.org/api
                                </span>
                            </el-card>
                        </div>
                    </div>
                </el-col>

                <el-col :span="11">
                    <div class="main-bottom-right">
                        <div class="main-bottom-right-header">
                            <span class="main-bottom-right-header-title">
                                最新合约
                            </span>
                            <span class="main-bottom-right-header-more">
                                更多 >
                            </span>
                        </div>

                        <div class="main-bottom-right-body">
                            <el-card v-for="i in 3" :key="i" class="box-card" style="margin-top: 10px; margin-right: 20px;">
                                <template #header>
                                    <el-link type="primary">
                                        se93u7K3BybK78pIZyQGtPtISIJAaTrxscy8Wv4a4fqcm4U3pu
                                    </el-link>
                                    <span style="font-size: 14px; color: #999; float: right;">
                                        09-06 15:06
                                    </span>
                                </template>
                                <span style="font-size: 14px; color: #999;">
                                    http://erp.21vianet.com/zhixincloud
                                </span>
                            </el-card>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>-->
    </div>

    <div class="footer">

    </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity"
import { InfoFilled } from '@element-plus/icons-vue'

const headerImageFit = ref("contain")
const headerImageSrc = ref("./src/assets/logo.png")
const blockUrl = ref("./src/assets/block.png")
const contractkUrl = ref("./src/assets/contract.png")
const nodeUrl = ref("./src/assets/node.png")
const organizationUrl = ref("./src/assets/organization.png")
const transactionUrl = ref("./src/assets/transaction.png")
const userUrl = ref("./src/assets/user.png")

const locationToGitHub = function () {
    location.href = "https://github.com/vmeta42/metatoc"
}
const showDetailInfo = function (type) {
    if (type == "node") {
    }
}
</script>

<style scoped>
.header, .main {
  border-bottom: 1px solid var(--el-border-color);
}

.main {
    padding-top: 20px;
    padding-bottom: 20px;
}

.footer {
    margin-top: 20px;
}

.header-left {
    padding-left: 15px;
    padding-bottom: 3px;
}

.common-cards {
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px 0px;
}

.the-second-row-cards {
    margin-top: 10px;
}

.main-middle-left, .main-bottom-left, .main-bottom-right {
    margin-left: 12px;
}

.main-middle-left-header, .main-bottom-left-header, .main-bottom-right-header {
    border-left-width: 6px;
    border-left-color: #2d5fff;
    border-left-style: solid;
    margin-bottom: 18px;
}

.main-middle-left-header-title, .main-bottom-left-header-title, .main-bottom-right-header-title {
    font-size: 20px;
    color:#2d5fff;
    font-weight: bold;
    margin-left: 15px;
}

.main-middle-left-header-more, .main-bottom-left-header-more, .main-bottom-right-header-more {
    font-size: 14px;
    color: #999;
    float: right;
    margin-right: 20px;
    line-height: 27px;
}

.main-middle-left-body, .main-bottom-left-body, .main-bottom-right-body {
    margin-top: 10px;
}
</style>
