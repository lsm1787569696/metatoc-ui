<template>
    <el-card class="common-cards">
        <div class="container">
            <div class="circularContainer">
                <div class="circular first" @mouseenter="onMouseenter" @mouseleave="onMouseleave">
                    <div>
                        s23ds1b3kj1nj3lknb21kjnjl1n3n21ljknnjknl1n2lk3nl21321lkn3lk2n1lk3nl2k1n3lk213nl
                    </div>
                    <div class="hoverBox">
                        <div class=" hoverFirst"></div>
                        <div class="hoverSecond"></div>
                        <div class="hoverThird"></div>
                    </div>
                </div>
                <div class="circular second">
                </div>
                <div class="circular third"></div>
                <div class="circular fourth"></div>
                <div class="line lineFrist"></div>
                <div class="line lineSecond"></div>
                <div class="line lineThird"></div>
                <div class="line lineFourth"></div>
            </div>
        </div>
    </el-card>

</template>

<script setup>
import { reactive } from 'vue'
let isHover = reactive(false)
// let onMouseenter = () => {
//     isHover = !isHover
//     console.log(isHover, !isHover);


// }


// let onMouseleave = () => {

// }
</script>

<style scoped>
.common-cards {
    margin-top: 12px;
    margin-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
}

.container {
    width: 100%;
    height: 500px;
    border: 1px solid black;
}

.circularContainer {
    position: relative;
}

.circularContainer .circular {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px solid black;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    word-break: break-all;
}

.circularContainer .first {
    top: 10px;
    left: 200px
}

.circularContainer .first div {
    padding: 20px;
}

.circularContainer .second {
    top: 290px;
    left: 200px
}

.circularContainer .third {
    top: 10px;
    right: 200px
}

.circularContainer .fourth {
    top: 290px;
    right: 200px
}

.lineFrist {
    position: absolute;
    top: 250px;
    left: 260px;
    width: 80px;
    border-bottom: 1px solid black;
    transform: rotate(270deg);
}

.lineSecond {
    position: absolute;
    top: 250px;
    right: 260px;
    width: 80px;
    border-bottom: 1px solid black;
    transform: rotate(270deg);
}

.lineThird {
    position: absolute;
    top: 100px;
    left: 400px;
    width: calc(100% - 800px);
    border-bottom: 1px solid black;
}

.lineFourth {
    position: absolute;
    top: 390px;
    left: 400px;
    width: calc(100% - 800px);
    border-bottom: 1px solid black;
}

.hoverBox {
    width: 100px;
    height: 150px;
    border: 1px solid black;
    position: absolute;
    left: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: none;

}

.hoverBox .hoverFirst {
    width: 70px;
    height: 20px;
    background-color: red;
}

.hoverBox .hoverSecond {
    width: 70px;
    height: 20px;
    background-color: green;
}

.hoverBox .hoverThird {
    width: 70px;
    height: 20px;
    background-color: orange;
}

.hoverBox div {
    margin: 10px 0;
}

.circular:hover .hoverBox {
    display: flex;
}
</style>