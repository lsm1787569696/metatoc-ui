<template>
    <div class="header">
        <el-row>
            <el-col class="header-left" :span="4">
                <el-image style="width: 56px; height: 56px" :src="src" :fit="fit"></el-image>
            </el-col>
            <el-col class="header-right" :span="20">
                <!-- <el-image style="width: 56px; height: 56px" :src="src" :fit="fit"></el-image> -->
            </el-col>
        </el-row>
    </div>
    <div class="main">
        <div class="main-top">
            <el-row style="margin-top: 20px;">
                <el-col :span="5" :offset="1">
                    <el-card class="common-cards" :body-style="{ padding: '50px' }">

                    </el-card>
                    <el-card class="common-cards the-second-row-cards" :body-style="{ padding: '50px' }">
                    </el-card>
                </el-col>

                <el-col :span="5">
                    <el-card class="common-cards" :body-style="{ padding: '50px' }"></el-card>
                    <el-card class="common-cards the-second-row-cards" :body-style="{ padding: '50px' }"></el-card>
                </el-col>

                <el-col :span="5">
                    <el-card class="common-cards" :body-style="{ padding: '50px' }"></el-card>
                    <el-card class="common-cards the-second-row-cards" :body-style="{ padding: '50px' }"></el-card>
                </el-col>

                <el-col :span="7">
                    4
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity"
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'


const fit = ref("contain")
const src = ref("./src/assets/logo.png")
const size = ref(20)
const fill = ref(true)
const currentDate = ref(new Date())
</script>

<style scoped>
.header{
  border-bottom: 1px solid var(--el-border-color);
}

.header-left {
    text-align: center;
}

.common-cards {
    margin-left: 10px;
    margin-right: 10px;
}

.the-second-row-cards {
    margin-top: 10px;
}

.subtext {
  font-size: 12px;
  color: #999;
}
</style>
