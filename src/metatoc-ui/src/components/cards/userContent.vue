<template>
  <div class="userContent-container">

    <!-- <div class="my-container-border-radius my-container-box-shadow" v-for="item in getAllUsersInfo" :key="item"
      :class="handleBackgroundCard(item.name)">
      <div class="user-info" @click="changeUser()" :class="handleUserInfoClass(item.name)">
        <el-avatar :src="item.avatar" :size="100" />
      </div>
      <div class="opacity-card my-container-border-radius"
        :class="$store.state.users.currentUser.name == item.name ? 'toShare' : 'unToShare'">
        <div class="data-card-title" @click="changeUser()">
          待上链数据
        </div>
        <div class="data-card-content">
          <div class="listData my-card-border-radius my-container-box-shadow" v-for="item, index in allContents"
            :key="(item, index)" :class="handleListData(index)">
            <div class="leftContainer">
               <div style="position: relative;">
                  <el-image style="width: 30px;" :src="imageSrc" :fit="fit" />
                </div>   
              <div style="position: relative;  padding: 20px; padding-bottom: 0px;">
                <img style="width:32px ;height:32px ;" src="../../assets/images/logo.png" alt="">
              </div>
              <div style="width:80%;position: absolute;top: 40%;left: 10%;">
                <div class="textContent" style="font-weight: 700; font-size: 20px; text-align: center;">
                  <el-tooltip class="box-item" effect="dark" :content=item.content placement="top-start">
                    {{item.content}}
                  </el-tooltip>
                </div>
              </div>
              <div style="position: absolute; text-align: center;bottom: 8%;left: calc(50% - 44px);">
                <el-button color="#2d5fff" type="primary" round :disabled="!item.drag"
                  @click="contentToBlock(item.name)">
                  数据上链
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="my-container-border-radius background-card"
      :class="$store.state.users.currentUser.name == 'userA' ?'userABackground':'userBBackground'">
      <div class="imgContainer">
        <div class="user-info" v-for="item in getAllUsersInfo" :key="item">
          <!-- :class="$store.state.users.currentUser.name != item.name?'unCheckImgInfo':''" -->
          <div class="imgBack">
            <el-avatar @click="changeUser(item.name)" :src="item.avatar" :class="$store.state.users.currentUser.name == 'userA' && item.name == 'userA' ? 'checkImg':'unCheckImg' && 
            $store.state.users.currentUser.name == 'userB' && item.name == 'userB' ? 'checkImg':'unCheckImg'"
              style=" margin:15% 0px;" :size="100" />
          </div>
        </div>
      </div>
      <div class="contentContainer">
        <!-- <div class="data-card-title">
          待上链数据
        </div> -->
        <div class="contentInfoContainer my-card-border-radius " v-for="item, index in allContents"
          :key="(item, index)">

          <div class="logoContainer">
            <img src="../../assets/images/logo.png" alt="">
          </div>

          <div class="textContainer">
            {{item.content}}
          </div>

          <div class="btnContainer">
            <el-button style="border: 1px ;"
              :color="$store.state.users.currentUser.name == 'userA' ? '#337ecc':'#e9bcbd'" type="primary" round
              @click="contentToBlock(item.name)" :disabled="!item.drag">
              数据上链
            </el-button>
            <!-- :class="$store.state.users.currentUser.name == 'userA' ?'userABackground':'userBBackground'" -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { computed, reactive } from "@vue/reactivity"
import { useStore } from "vuex"

const $store = useStore()

// userA=true  userB=false
const isCheck = ref(true)

// 获取全部用户信息
const getAllUsersInfo = computed(() => {
  return $store.getters["users/getAllUsersInfo"]
})

// 切换用户
const changeUser = (name) => {
  if (typeof name != "undefined") {
    if ($store.state.users.currentUser.name == name) {
      return
    } else {
      isCheck.value = !isCheck.value
      $store.dispatch("users/swithCurrentUser", name)
    }
  } else {
    if ($store.state.users.currentUser.name == "userA") {
      isCheck.value = !isCheck.value
      $store.dispatch("users/swithCurrentUser", "userB")
    } else {
      isCheck.value = !isCheck.value
      $store.dispatch("users/swithCurrentUser", "userA")
    }
  }
}

// 获取需上链数据
const allContents = computed(() => {
  return $store.getters["contents/getAllContentsInfo"]
})

// 上链
const contentToBlock = (name) => {
  if (name == "contentA") {
    $store.dispatch("blocks/contentToBlock", "blockA")
  } else {
    $store.dispatch("blocks/contentToBlock", "blockB")
  }
}

const handleBackgroundCard = (name) => {
  let ret = ""
  ret += $store.state.users.currentUser.name == name ? "background-card active" : "background-card"
  return ret
}

const handleUserInfoClass = (name) => {
  let ret = ""
  ret += $store.state.users.currentUser.name == name ? "userChange active" : "userChange"
  ret += " "
  ret += $store.state.users.currentUser.name == name ? "" : "isCheck"
  return ret
}

const handleListData = (index) => {
  return index == 0 ? "listDataFirst" : "listDataSecond"
}

const imageSrc = "/src/assets/images/logo.png"

// 默认用户
onMounted(() => {
  $store.dispatch("users/swithCurrentUser", "userA")
})
</script>

<style scoped>
@import "../../assets/css/common-style.css";

.userContent-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.background-card {
  position: relative;
  width: 70%;
  height: 100%;
  /* background: rgb(239, 240, 242);
  background: linear-gradient(0deg, rgba(239, 240, 242, 1) 0%, rgba(179, 179, 179, 1) 100%);
  overflow: hidden; */
}

.background-card.active {
  width: 45%;
  height: 85%;
  /* background: rgb(239, 240, 242); */
  /* background: linear-gradient(0deg, rgba(239, 240, 242, 1) 0%, rgba(45, 95, 255, 1) 100%); */
  overflow: hidden;
}

.unCheckImgInfo {
  background: #b0b0b0;
  border-top-right-radius: 10%;
}

.user-info {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* margin: 0px 8%; */
  /* position: relative; */
  /* width: 100%; */
  /* transition: all 0.5s; */
  /* transform: translateY(0%) scale(0.5);
  margin-top: -10px; */
}

.isCheck {
  top: 45%;
  transform: translateY(-45%) scale(1);
  margin-top: 0px;
}

.opacity-card {
  width: 100%;
  height: calc(100% - 90px);
  background: #fff;
  position: relative;
  transition: all 0.5s;
}

.toShare {
  position: relative;
  top: 0px;
}

.unToShare {
  position: relative;
  top: calc(100% - 160px);
}

.data-card-title {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 900;
  font-size: 1.125em;
}

.data-card-content {
  width: 100%;
  height: 88%;
  /* height: calc (100% - 42px); */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
}

.listData {
  display: flex;
  width: 90%;
  height: 35%;
  /* max-height: 220px; */
  background: rgb(239, 240, 242);
  background: linear-gradient(90deg, rgba(239, 240, 242, 1) 0%, rgba(227, 227, 227, 1) 100%);
  margin-left: auto;
  margin-right: auto;
}

.listDataFirst {
  /* margin-top: -20%; */
  position: relative;
  top: 15%;
  transform: translateY(-15%);
}

.listDataSecond {
  /* margin-top: 10%; */
  position: relative;
  top: 30%;
  transform: translateY(-30%);
}

.leftContainer {
  width: 100%;
  max-height: 220px;
}

.imgContainer {
  /* border-bottom: 1px solid #eeeeee; */
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
}

.userName {
  font-size: 1.125em;
  font-weight: 900;
}

.contentContainer {
  width: 100%;
  height: 75%;
  /* background: #337ecc; */
  position: absolute;
  bottom: 0px;
}

.contentInfoContainer {
  width: 90%;
  height: 35%;
  margin: 10% auto;
  background: white;
}

.logoContainer {
  width: 100%;
  height: 25%;
  position: relative;
}

.logoContainer img {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 10%;
  top: 30%;
}

.textContainer {
  width: 100%;
  height: 50%;
  font-size: 1.125em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
}

.btnContainer {
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.userABackground {
  background-color: #337ecc;
}

.userBBackground {
  background-color: #e9bcbd;
}

.el-avatar img {
  /* transform: translateX(150px); */
}
</style>
<style>
.el-avatar img {
  cursor: pointer;
}

.checkImg img {
  transform: translateX(50px) !important;
}

.unCheckImg img {
  transform: translateX(-50px) !important;
}

/* .textContent { */
/* word-break: break-all; */
/* text-overflow: ellipsis; */
/* display: -webkit-box; */
/* -webkit-box-orient: vertical; */
/* -webkit-line-clamp: 2; */
/* overflow: hidden; */


/* -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis; */
/* } */
</style>