<template>
    <tTest></tTest>

    <div class="common-cards my-container-border-radius my-container-box-shadow my-glass">
        <el-row class="shareList">
            <el-col v-for="item in allBlocks" :key="item" :span="12" class="flex justify-content-center">
                <Transition>
                    <div v-if="item.showBlock == true" class="listData my-card-border-radius my-container-box-shadow">
                        <div class="leftContainer">
                            <div style="position: relative; padding: 20px; padding-bottom: 0px;">
                                <el-avatar style="position: relative; left: 0px;" :size="50" :src="userAAvatarSrc" />
                                <el-avatar style="position: relative; left: -5px;" :size="50" :src="userBAvatarSrc" />
                            </div>
                            <div style="position: relative; padding: 10px;">
                                <div v-if="item.showContent == true" style="font-weight: 700; font-size: 20px; text-align: center;" class="balance-amount">{{ item.content }}</div>
                                <div v-else-if="item.showContent == false" style="font-weight: 700; font-size: 20px; text-align: center;" class="balance-amount">[No permission to view data.]</div>
                            </div>
                            <div style="position: relative; text-align: center; padding-bottom: 20px;">
                                <el-button v-if="item.showContent == true" color="#626aef" type="primary" round>分享数据</el-button>
                                <el-button color="#626aef" plain round>溯源数据</el-button>
                            </div>
                        </div>
                    </div>
                </Transition>
            </el-col>
            <!-- <el-col :span="12" class="flex justify-content-center">
                <div class="listData my-card-border-radius my-container-box-shadow">
                    <div class="leftContainer">
                        <div style="position: relative; padding: 20px; padding-bottom: 0px;">
                            <el-avatar style="position: relative; left: 0px;" :size="50" :src="userAAvatarSrc" />
                            <el-avatar style="position: relative; left: -5px;" :size="50" :src="userBAvatarSrc" />
                        </div>
                        <div style="position: relative; padding: 10px;">
                            <div style="font-weight: 700; font-size: 20px; text-align: center;" class="balance-amount">Mankind was born on Earth.</div>
                        </div>
                        <div style="position: relative; text-align: center; padding-bottom: 20px;">
                            <el-button color="#626aef" type="primary" round>分享数据</el-button>
                            <el-button color="#626aef" plain round>溯源数据</el-button>
                        </div>
                    </div>
                </div>
            </el-col>

            <el-col :span="12" class="flex justify-content-center">
                <div class="listData my-card-border-radius my-container-box-shadow">
                    <div class="leftContainer">
                        <div style="position: relative; padding: 20px; padding-bottom: 0px;">
                            <el-avatar style="position: relative; left: 0px;" :size="50" :src="userAAvatarSrc" />
                            <el-avatar style="position: relative; left: -5px;" :size="50" :src="userBAvatarSrc" />
                        </div>
                        <div style="position: relative; padding: 10px;">
                            <div style="font-weight: 700; font-size: 20px; text-align: center;" class="balance-amount">It was never meant to die here.</div>
                        </div>
                        <div style="position: relative; text-align: center; padding-bottom: 20px;">
                            <el-button color="#626aef" type="primary" round>分享数据</el-button>
                            <el-button color="#626aef" plain round>溯源数据</el-button>
                        </div>
                    </div>
                </div>
            </el-col> -->
        </el-row>
    </div>
</template>

<script>
import test from "../../views/test.vue"
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
    setup () {
        const $store = useStore()

        let allBlocks = computed(() => {
            return $store.getters["blocks/getAllBlocksInfo"]
        })

        return {
            allBlocks,
            userAAvatarSrc: "/src/assets/comp_gabi.jpg",
            userAAvatarSize: "",
            userBAvatarSrc: "/src/assets/comp_ildi.jpg",
            userBAvatarSize: ""
        }
    },
    components: {
        tTest: test
    },
    methods: {
        haveCurrentUser: function () {
            return true
        }
    }
}
</script>

<style scoped>
@import "../../assets/css/common-style.css";
.common-cards {
    height: 30%;
}
.shareList {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%
}
.listData {
    display: flex;
    max-width: 340px;
    max-height: 220px;
    background: rgb(239,240,242);
    background: linear-gradient(90deg, rgba(239,240,242,1) 0%, rgba(227,227,227,1) 100%);
}
.leftContainer {
    width: 100%;
}
.flex {
    display: flex;
}
.justify-content-center {
    justify-content: center;
}
</style>

<style>
.el-card__body {
    margin: 0px !important;
    padding: 0px !important;
    height: 100%;
}
.el-avatar img {
    transform: translateX(150px);
}
</style>
