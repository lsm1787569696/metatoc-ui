<template>
    <el-row>
        <el-col :span="22" :offset="1">
            <div class="list-container">
                <div class="list-header">
                    <span class="list-header-title">
                        最新HDFS path
                    </span>
                    <span class="list-header-more">
                        更多 >
                    </span>
                </div>
                <div class="list-body">
                    <el-row>
                        <el-col :span="6">
                            <el-card :body-style="{ padding: '15px 20px' }" style="margin-right: 20px;">
                                <template #header>
                                    <el-button link type="primary" class="title">
                                        # 100
                                    </el-button>
                                    <span class="subtext-right">
                                        09-06 15:06
                                    </span>
                                </template>
                                <span class="subtext">
                                    /baidu.com/example/20220913/2jgy9QXNf9
                                </span>
                            </el-card>
                        </el-col>
                        <el-col :span="6">
                            <el-card :body-style="{ padding: '15px 20px' }" style="margin-left: 10px; margin-right: 10px;">
                                <template #header>
                                    <el-button link type="primary" class="title">
                                        # 99
                                    </el-button>
                                    <span class="subtext-right">
                                        09-06 15:06
                                    </span>
                                </template>
                                <span class="subtext">
                                    /vnet.com/flow/20220913/3c84paNQvN
                                </span>
                            </el-card>
                        </el-col>
                        <el-col :span="6">
                            <el-card :body-style="{ padding: '15px 20px' }" style="margin-left: 10px; margin-right: 10px;">
                                <template #header>
                                    <el-button link type="primary" class="title">
                                        # 98
                                    </el-button>
                                    <span class="subtext-right">
                                        09-06 15:06
                                    </span>
                                </template>
                                <span class="subtext">
                                    /kubernetes.io/pod/20220913/5fNeeeI42p
                                </span>
                            </el-card>
                        </el-col>
                        <el-col :span="6">
                            <el-card :body-style="{ padding: '15px 20px' }" style="margin-left: 20px;">
                                <template #header>
                                    <el-button link type="primary" class="title">
                                        # 97
                                    </el-button>
                                    <span class="subtext-right">
                                        09-06 15:06
                                    </span>
                                </template>
                                <span class="subtext">
                                    /baidu.com/map/20220913/yRfUI4WH5f
                                </span>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<style scoped>
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
</style>

<script setup>

</script>