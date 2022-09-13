<template>
    <el-col :span="11">
        <div class="list-container">
            <div class="list-header">
                <span class="list-header-title">
                    管理HDFS path
                </span>
                <span class="list-header-more">
                    更多 >
                </span>
            </div>
            <div class="list-body">
                <el-card v-for="i in 5" :key="i" :body-style="{ padding: '15px 20px' }" style="margin-top: 10px;">
                    <template #header>
                        <el-button link type="primary" class="title">
                            # {{ 17 - i}}
                        </el-button>
                        <span class="subtext-right">
                            09-06 15:06
                        </span>
                    </template>
                    <span class="subtext">
                        /vnet.com/flow/20220913/3c84paNQvN
                    </span>
                </el-card>
            </div>
        </div>
    </el-col>
</template>

<style scoped>
.list-container {
    margin-left: 10px;
}
.list-header {
    border-left-width: 6px;
    border-left-color: #2276ff;
    border-left-style: solid;
}
.list-header-title {
    font-size: 18px;
    color:#2276ff;
    font-weight: bold;
    margin-left: 16px;
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
    font-size: 14px;
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
</style>

<script setup>

</script>