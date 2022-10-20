<template>
    <el-card class="common-cards" id="myChartCard" :body-style="{ padding: '0px'}">
        <div id="myChart"></div>
    </el-card>
</template>

<style scoped>
.common-cards {
    margin-top: 10px;
    padding-left: 15px;
    padding-right: 15px;
}
</style>

<script setup>
import * as echarts from 'echarts'
import { onMounted } from 'vue'

const drawChart = () => {
    let chartDom = document.getElementById('myChart');
    let myChart = echarts.init(chartDom, null, {
        width: document.getElementById('myChart').offsetWidth,
        height: 238,
    });
    let option = {
        title: {
            text: '最新24H交易',
            top: 12,
            left: 10,
            textStyle: {
                fontSize: 14,
            },
        },
        grid: {
            top: '24%',
            left: '5%',
            right: '5%',
            bottom: '8%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
            }
        ]
    };
    myChart.setOption(option);

    return myChart;
}

onMounted(() => {
    let myChart = drawChart()
    window.onresize = () => {
        return (() => {
            myChart.resize({
                width: document.getElementById('myChart').offsetWidth,
                height: 238
            });
        })()
    }
})
</script>