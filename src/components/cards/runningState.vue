<template>
    <el-card class="common-cards scroll-content">
        <div class="scroll-text">服务正常运行中</div>
    </el-card>
</template>

<script>
</script>

<style scoped>
::v-deep .el-card__body {
    margin: 0;
    padding: 0;
}

.common-cards {
    height: 50px;
    margin-top: 12px;
    margin-right: 30px;
    padding: 0;
    background-color: rgba(45, 95, 255, .3);
}

.common-cards div {
    font-size: 40px;
    text-align: center;
    line-height: 50px;
    font-weight: 700;
    letter-spacing: 15px;
}

.scroll-content {
    overflow: hidden;
    flex: 1;
    /* height: 24px; */
    /* line-height: 24px; */
    position: relative;
}

.scroll-text {
    position: absolute;
    white-space: nowrap;
    padding-left: 100%;
    animation: notice 10s 0s linear infinite both;
    font-size: 24px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #757575;
}

@keyframes notice {
    100% {
        transform: translate3d(-100%, 0, 0);
    }
}
</style>