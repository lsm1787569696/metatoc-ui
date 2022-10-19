<template>
  <div class="userContent-container">
    <div class="my-container-border-radius my-container-box-shadow" v-for="item in getAllUsersInfo" :key="item"
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
              <!-- <div style="position: relative;">
                  <el-image style="width: 30px;" :src="imageSrc" :fit="fit" />
                </div>  -->

              <div style="position: relative;  padding: 20px; padding-bottom: 0px;">
                <img style="width:32px ;height:32px ;" src="../../assets/images/logo.png" alt="">
              </div>

              <div style="width:80%;position: absolute;top: 40%;left: 10%;">
                <div class="textContent" style="font-weight: 700; font-size: 20px; text-align: center;">{{ item.content
                }}</div>
              </div>

              <div style="position: absolute; text-align: center;bottom: 8%;left: calc(50% - 44px);">
                <el-button color="#2d5fff" type="primary" round
                  :disabled="item.name == $store.state.contents.contentA.content?!$store.state.contents.contentA.drag:!$store.state.contents.contentB.drag"
                  @click="contentToBlock(item.name)">
                  数据上链
                </el-button>
              </div>
            </div>
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
  width: 45%;
  height: 85%;
  background: rgb(239, 240, 242);
  background: linear-gradient(0deg, rgba(239, 240, 242, 1) 0%, rgba(179, 179, 179, 1) 100%);
  overflow: hidden;
}

.background-card.active {
  width: 45%;
  height: 85%;
  background: rgb(239, 240, 242);
  background: linear-gradient(0deg, rgba(239, 240, 242, 1) 0%, rgba(45, 95, 255, 1) 100%);
  overflow: hidden;
}

.user-info {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: all 0.5s;
  top: 10px;
  transform: translateY(0%) scale(0.5);
  margin-top: -10px;
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
  text-align: center;
  font-weight: 900;
  padding-top: 18px;
  font-size: 1.125em;
  cursor: pointer;
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
</style>
<style>
.el-avatar img {
  cursor: pointer;
}

.userChange.active img {
  transform: translateX(0px) !important;
}

.userChange img {
  transform: translateX(0px) !important;
}

.textContent {
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
</style>