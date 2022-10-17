<template>
  <div class="userContent-container  my-container-border-radius my-glass">
    <div class="background-card" v-for="item in getAllUsersInfo" :key="item">

      <div class="user-info" @click="changeUser(item.name)"
        :class="$store.state.users.currentUser.name == item.name ? 'userChange' : 'userChange1' ,$store.state.users.currentUser.name == item.name ? '' : 'isCheck' ">

        <div style="position: relative; top: 20px;"
          :class="$store.state.users.currentUser.name == item.name ? 'imgUnshare' : 'imgShare'">
          <el-avatar :src="item.name =='userA' ? '/src/assets/comp_gabi.jpg'  : '/src/assets/comp_ildi.jpg'"
            style="position: relative; left: 0px;" :size="100" />
        </div>
        <div class="user-name">{{item.name}}</div>
      </div>

      <div class="opacity-card" :class="$store.state.users.currentUser.name == item.name ? 'toShare' : 'unToShare'">
        <div class="data-card">
          <div class="data-card-title">
            需上链数据
          </div>
          <div class="data-card-content">
            <div class="listData my-card-border-radius my-container-box-shadow" v-for="item in allContents" :key="item"
              style="margin-right:5%;background:rgb(239,240,242);background:linear-gradient(90deg,
                rgba(239,240,242,1)0%,rgba(227,227,227,1)100%);">
              <div style="padding:10% 0 0 10%">
                <!-- style="position: relative;top: -15px;left: -110px;"  -->
                <svg t="1665726718179" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="6362" width="32" height="32">
                  <path
                    d="M503.466667 706.133333h19.2v76.8h-19.2zM311.850667 604.416l68.992-33.749333 8.448 17.258666-68.992 33.749334zM503.466667 249.6h19.2v76.8h-19.2zM503.466667 614.4h19.2v76.8h-19.2zM228.906667 384.96l8.448-17.258667 68.970666 33.792-8.426666 17.237334zM229.973333 642.752l68.928-33.856 8.448 17.237333-68.928 33.856zM311.765333 423.978667l8.448-17.237334 68.970667 33.792-8.448 17.237334zM721.216 403.669333l68.992-33.749333 8.426667 17.258667-68.970667 33.749333zM625.066667 450.133333l-32 14.933334c-17.066667-27.733333-46.933333-46.933333-83.2-46.933334h10.666666V341.333333h-19.2v76.8h10.666667c-34.133333 0-64 17.066667-81.066667 44.8l-29.866666-14.933333-8.533334 17.066667 29.866667 14.933333c-4.266667 10.666667-6.4 21.333333-6.4 34.133333 0 12.8 2.133333 23.466667 6.4 36.266667l-29.866667 14.933333 8.533334 17.066667 29.866666-14.933333c17.066667 25.6 46.933333 44.8 81.066667 44.8 34.133333 0 66.133333-19.2 81.066667-46.933334l32 14.933334 8.533333-17.066667-32-14.933333c4.266667-10.666667 6.4-21.333333 6.4-32s-2.133333-21.333333-6.4-32l32-14.933334-8.533333-19.2z"
                    fill="#347DFF" p-id="6363"></path>
                  <path
                    d="M928 625.066667V392.533333c32-10.666667 53.333333-40.533333 53.333333-74.666666 0-42.666667-36.266667-78.933333-78.933333-78.933334-23.466667 0-42.666667 10.666667-57.6 25.6L590.933333 134.4c6.4-36.266667-12.8-70.4-46.933333-85.333333-40.533333-17.066667-85.333333 2.133333-102.4 42.666666-6.4 12.8-6.4 27.733333-4.266667 42.666667l-256 132.266667c-14.933333-17.066667-36.266667-25.6-57.6-25.6-42.666667 0-78.933333 36.266667-78.933333 78.933333 0 34.133333 23.466667 64 55.466667 74.666667v238.933333c-34.133333 8.533333-57.6 38.4-57.6 72.533333 0 42.666667 36.266667 78.933333 78.933333 78.933334 21.333333 0 40.533333-8.533333 55.466667-23.466667l258.133333 132.266667v10.666666c2.133333 42.666667 36.266667 76.8 81.066667 76.8 42.666667 0 74.666667-34.133333 76.8-76.8V896l273.066666-128c10.666667 6.4 25.6 10.666667 38.4 10.666667 42.666667 0 78.933333-34.133333 78.933334-78.933334-2.133333-36.266667-23.466667-64-55.466667-74.666666z m-93.866667 34.133333l-23.466666-10.666667-8.533334 17.066667 25.6 12.8c-2.133333 6.4-4.266667 14.933333-4.266666 21.333333 0 12.8 2.133333 25.6 8.533333 36.266667l-258.133333 121.6c-12.8-14.933333-32-27.733333-51.2-29.866667v-29.866666h-19.2v29.866666c-21.333333 2.133333-38.4 12.8-51.2 27.733334l-256-132.266667c2.133333-6.4 2.133333-10.666667 2.133333-17.066667 0-8.533333-2.133333-17.066667-4.266667-25.6l29.866667-14.933333-8.533333-17.066667-29.866667 14.933334c-10.666667-17.066667-27.733333-27.733333-46.933333-34.133334v-234.666666c19.2-4.266667 34.133333-14.933333 44.8-32l29.866666 14.933333 8.533334-17.066667-29.866667-14.933333c4.266667-8.533333 6.4-19.2 6.4-27.733333 0-4.266667 0-8.533333-2.133333-14.933334l256-132.266666c12.8 14.933333 29.866667 23.466667 49.066666 27.733333V234.666667h19.2V198.4c19.2-2.133333 36.266667-10.666667 49.066667-25.6l253.866667 132.266667c0 4.266667-2.133333 8.533333-2.133334 14.933333 0 10.666667 2.133333 21.333333 6.4 29.866667l-25.6 12.8 8.533334 17.066666 29.866666-14.933333c10.666667 14.933333 27.733333 25.6 44.8 29.866667v228.266666c-21.333333 4.266667-40.533333 17.066667-51.2 36.266667z"
                    fill="#347DFF" p-id="6364"></path>
                  <path
                    d="M720.256 625.664l8.448-17.237333 68.970667 33.792-8.448 17.237333zM638.336 584.746667l8.448-17.258667 68.970667 33.792-8.448 17.258667zM639.445333 441.877333l68.992-33.749333 8.426667 17.258667-68.992 33.749333z"
                    fill="#347DFF" p-id="6365"></path>
                </svg>
              </div>
              <div style="position: relative; top: 3%;">
                <div style="font-weight: 700; font-size: 1.2em; text-align: center;margin:5% auto; display: block;"
                  class="balance-amount">
                  {{item.content}}</div>
              </div>
              <div style="position: relative; top:2%; text-align: center;">
                <el-button :class="unToShare" color="#626aef" type="primary" round
                  :disabled="item.name == $store.state.contents.contentA.content?!$store.state.contents.contentA.drag:!$store.state.contents.contentB.drag"
                  @click="contentToBlock(item.name)">
                  数据上链</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

import { onMounted, ref } from 'vue'
import { computed, reactive } from '@vue/reactivity'
import { useStore } from 'vuex'

const $store = useStore()


// userA=true  userB=false
const isCheck = ref(true)

const result = ref(false)

// 获取全部用户信息
let getAllUsersInfo = computed(() => {
  return $store.getters["users/getAllUsersInfo"]
})

// 默认用户
onMounted(() => {
  $store.dispatch("users/swithCurrentUser", 'userA')
  console.log($store.state.users.currentUser.name);
  RemoveScroll()
})

// 上链
const contentToBlock = (name) => {
  if (name == "contentA") {
    $store.dispatch("blocks/contentToBlock", "blockA")
  } else {
    $store.dispatch("blocks/contentToBlock", "blockB")
  }
}

// 切换用户时样式改变会出现滚动条 将此禁用
let RemoveScroll = () => {
  document.body.style.overflow = "hidden";
}




// 切换用户
let changeUser = (name) => {

  if ($store.state.users.currentUser.name == name) {
    return
  } else {
    isCheck.value = !isCheck.value
    $store.dispatch("users/swithCurrentUser", name)
  }
}

// 获取需上链数据
const allContents = computed(() => {
  return $store.getters["contents/getAllContentsInfo"]
})


</script>

<style scoped>
@import '../../assets/css/common-style.css';



.listData {
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  width: 90%;
  height: 28%;
  background: #ffffff;
  margin: 15px auto;
}

.leftContainer {
  width: 100%;
  height: 100%;
}


.userContent-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.background-card {
  position: relative;
  width: 45%;
  height: 80%;
  border-radius: 30px;
  box-shadow: 0 2.8px 2.2px rgb(0 0 0 / 2%), 0 6.7px 5.3px rgb(0 0 0 / 3%), 0 12.5px 10px rgb(0 0 0 / 4%), 0 22.3px 17.9px rgb(0 0 0 / 4%), 0 41.8px 33.4px rgb(0 0 0 / 5%), 0 100px 80px rgb(0 0 0 / 7%);
  position: relative;
  overflow: hidden;
  background-image: url(../../assets/circle-scatter-haikei.png);
}

.overflow-hidden {
  /* overflow: inherit; */
}

.data-card {
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  width: 100%;
  height: 100%;
}




.avatar {
  position: absolute;
  top: 0;
}

.data-card-title {
  width: 90%;
  height: 25px;
  text-align: center;
  font-weight: 900;
  line-height: 25px;
  margin: 10px auto;
  color: #333;
  font-family: "Open Sans";
  font-size: 1em;
}

.data-card-content {
  width: 100%;
  height: 100%;
}

.user-info {
  width: 100%;
  height: 30%;
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;

  /* position: absolute;
  top: 30px; */
  /* margin-top: 30px; */
  position: relative;
  top: 4%;
  transition: all 1.5s;
}

.user-name {
  margin-top: 30px;
  font-size: 1em;
  font-weight: 900;
  color: #fff;
  text-align: center;
}

.opacity-card {
  width: 100%;
  height: 100%;
  background: #eff0f2;
  border-radius: 30px;
  position: absolute;
  top: 30%;
  transition: all 1.5s;
}

.unToShare {
  position: absolute;
  top: 90%;
}

.toShare {
  /* position: absolute; */
}

.imgUnshare {
  position: absolute;
  top: 300px
}

.isCheck {
  position: absolute;
  top: 300px
}
</style>
<style>
.el-avatar img {
  cursor: pointer;
}

.userChange img {
  transform: translateX(400px)!important;
}


.userChange1 img {
  transform: translateX(300px)!important;
}
</style>