<template>
    <el-container class="my-height-100-percent background">
        <el-main class="my-height-100-percent">
            <el-row class="my-height-100-percent">
                <el-col :span="8" :offset="1">
                    <!-- <tUserContent></tUserContent> -->
                </el-col>
                <el-col class="my-card-height" :span="14">
                    <tShare></tShare>
                    <!-- <tDom></tDom> -->
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
import userContent from '../components/cards/userContent.vue'
import share from '../components/cards/share.vue'
import dom from '../components/cards/dom.vue'

export default {
    setup() {
        return {}
    },
    components: {
        tUserContent: userContent,
        tShare: share,
        tDom: dom
    }
}
</script>

<style scoped>
@import "../assets/css/common-style.css";

.my-card-height {
    height: calc(100vh - 45px);
}
.my-top-height {
    height: 30%;
}
.my-bottom-height {
    height: 70%;
}
.background {
    background-image: url("/src/assets/emoji-ffffff-2048x1152@1.25x.png");
    background-repeat: no-repeat;
    background-position: center;
}
</style>
