<template>
    <div class="common-cards my-container-border-radius my-container-box-shadow my-glass">
        <el-row class="shareList">
            <el-col :span="12" class="flex justify-content-center">
                <div class="listData my-card-border-radius my-container-box-shadow" style="background: rgb(239,240,242); background: linear-gradient(90deg, rgba(239,240,242,1) 0%, rgba(227,227,227,1) 100%);">
                    <div class="leftContainer">
                        <div style="position: relative; padding: 20px 20px 0px 20px;">
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
                <div class="listData my-card-border-radius my-container-box-shadow" style="background: rgb(239,240,242); background: linear-gradient(90deg, rgba(239,240,242,1) 0%, rgba(227,227,227,1) 100%);">
                    <div class="leftContainer">
                        <div style="position: relative; padding: 20px 20px 0px 20px;">
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
            </el-col>
        </el-row>
    </div>
</template>

<script>
import test from "../../views/test.vue"

export default {
    setup () {
        return {
            userAAvatarSrc: "/src/assets/comp_gabi.jpg",
            userAAvatarSize: "",
            userBAvatarSrc: "/src/assets/comp_ildi.jpg",
            userBAvatarSize: ""

        }
    },
    components: {
        tTest: test
    }
}
// import { ElMessageBox, ElMessage } from 'element-plus'
// import { reactive, ref } from 'vue'
// import { useStore } from 'vuex'
// import draggable from 'vuedraggable'
// let arr2 = reactive([{canEdit:false},{canEdit:true}])
// const $store = useStore()

// //  B 禁止拖动
// let onEnd = () => {
//     if (arr2.length == 2) {
//         for (let index in arr2) {
//             arr2[index].canEdit == true
//         }
//     }
// }

// // 无分享权限提示
// let shareWaring = () => {
//     setTimeout(() => {
//         ElMessage({
//             message: '暂无权限',
//             type: 'waring'
//         })
//     }, 300)
// }

// //  分享成功提示
// let shareSuccess = () => {
//     setTimeout(() => {
//         ElMessage({
//             message: '分享成功!',
//             type: 'success'
//         })
//     }, 300)
// }

// // 已分享提示
// let shared = () => {
//     ElMessageBox.alert('数据已经分享成功 !', '提示', {
//         confirmButtonText: 'OK',
//     })
// }

// // 分享
// let confirmEvent = (btnIndex) => {
//     for (let index in arr2) {
//         if (arr2[index].content == 'Hello' && btnIndex == arr2[index].id) {
//             if (arr2[index].src != '' && arr2[index].src1 != '') {
//                 shared()
//             } else {
//                 if (arr2[index].src == "") {
//                     if ($store.state.users.currentUser.name == 'userA') {
//                         shareWaring()
//                         return
//                     }
//                 } else if (arr2[index].src1 == "") {
//                     if ($store.state.users.currentUser.name == 'userB') {
//                         shareWaring()
//                         return
//                     }
//                 }
//                 arr2[index].src = 'src/assets/man.png'
//                 arr2[index].src1 = 'src/assets/woman.png'
//                 $store.commit("blocks/shareBlock", arr2[index].id == '0' ? 'blockA' : 'blockB')
//                 shareSuccess()
//             }
//         } else if (arr2[index].content == 'World' && btnIndex == arr2[index].id) {
//             if (arr2[index].src != '' && arr2[index].src1 != '') {
//                 shared()
//             } else {
//                 if (arr2[index].src == "") {
//                     if ($store.state.users.currentUser.name == 'userA') {
//                         shareWaring()
//                         return
//                     }
//                 } else if (arr2[index].src1 == "") {
//                     if ($store.state.users.currentUser.name == 'userB') {
//                         shareWaring()
//                         return
//                     }
//                 }
//                 arr2[index].src = 'src/assets/man.png'
//                 arr2[index].src1 = 'src/assets/woman.png'
//                 $store.commit("blocks/shareBlock", arr2[index].id == '0' ? 'blockA' : 'blockB')
//                 shareSuccess()
//             }
//         }
//     }
// }
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
    /* width: 340px; */
    /* height: 220px; */
    background: #fff;
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
