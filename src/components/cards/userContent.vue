<template>
  <div class="userContent-container">
    <div class="background-card" :class="isCheck ? 'user-change':'user-change-n'">
      <div class="user-info" @click.stop="changeUserA">
        <img class=" man-png" src="../../assets/avatar16 (1).png" alt="">
        <div class="user-name">userA</div>
      </div>
      <div class="opacity-card">
        <div class="data-card">
          <div class="data-card-title">
            需上链数据
          </div>
          <div class="data-card-content">
            <div class="data-card-content-list" v-for="item in allContents" :key="item">
              {{item.content}}
              <button class="up-chain-btn">点击进行上链</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="background-card" :class="isCheck ?'user-change-n': 'user-change'">
      <div class="user-info" @click.stop="changeUserB">
        <img class="man-png" src="../../assets/avatar21 (1).png" alt="">
        <div class="user-name">userB</div>
      </div>
      <div class="opacity-card">
        <div class="data-card">
          <div class="data-card-title">
            需上链数据
          </div>
          <div class="data-card-content">
            <div class="data-card-content-list" v-for="item in allContents" :key="item">
              {{item.content}}
              <button class="up-chain-btn">点击进行上链</button>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
const $store = useStore()
const isCheck = ref(true)
// 获取需上链数据
const allContents = computed(() => {
  return $store.getters["contents/getAllContentsInfo"]
})

onMounted(() => {
  $store.commit("users/swithCurrentUser", 'userA')
})

let changeUserA = () => {
  console.log(123);
  // isCheck.value = true

  // $store.commit("users/swithCurrentUser", 'userA')

  // // 切换用户时更新区块数据是否显示
  // $store.commit("blocks/changeShow", "")

  // // 切换用户时更新链上节点数据是否显示
  // $store.commit("chains/changeNodeStatus", { nodeKey: "", nodeStatus: "" })
}

let changeUserB = () => {
  isCheck.value = false

  $store.commit("users/swithCurrentUser", 'userB')

  // 切换用户时更新区块数据是否显示
  $store.commit("blocks/changeShow", "")

  // 切换用户时更新链上节点数据是否显示
  $store.commit("chains/changeNodeStatus", { nodeKey: "", nodeStatus: "" })
}


</script>
<style scoped>
.userContent-container {
  width: 100%;
  height: calc(100vh - 40px);
  margin: 0 auto;
  /* background: #eff0f2; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
}

.background-card {
  position: relative;
  width: 400px;
  height: 900px;
  background-image: url(../../assets/circle-scatter-haikei.png);
  border-radius: 30px;

  box-shadow: 0 2.8px 2.2px rgb(0 0 0 / 2%), 0 6.7px 5.3px rgb(0 0 0 / 3%), 0 12.5px 10px rgb(0 0 0 / 4%), 0 22.3px 17.9px rgb(0 0 0 / 4%), 0 41.8px 33.4px rgb(0 0 0 / 5%), 0 100px 80px rgb(0 0 0 / 7%);
}

.data-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.opacity-card {
  width: 100%;
  height: 67%;
  background: #eff0f2;
  position: absolute;
  bottom: 0;
  border-radius: 30px;
}

.data-card-title {
  width: 200px;
  height: 60px;
  text-align: center;
  font-weight: 900;
  line-height: 60px;
  margin: 20px;
  color: #333;
  font-family: "Open Sans";
  font-size: 20px;
}

.data-card-content-list {
  width: 340px;
  height: 220px;
  text-align: center;
  line-height: 130px;
  margin: 10px auto;
  background: rgb(255, 135, 100);
  background: linear-gradient(90deg, rgba(255, 135, 100, 1) 0%, rgba(255, 106, 98, 1) 100%, rgba(255, 106, 98, 1) 100%, rgba(255, 111, 99, 1) 100%);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 22px;
  font-weight: 900;
}

.user-info {
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
}

.man-png {
  margin-top: 60px;
}

.user-name {
  margin-top: 30px;
  font-size: 24px;
  font-weight: 900;
  color: #fff;
}



/* 用户切换 */
.user-change-n {}

.user-change {
  transform: scaleX(1.02);
}

/* @keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
} */



/* 按钮样式 */
button {
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  letter-spacing: .25px;
  line-height: normal;
  padding: 11px 24px;
  transition: background box-shadow 280ms ease;
}

button:hover {
  background: #F6F9FE;
  color: #174ea6;
}

button:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
  border: 2px solid #4285f4;
}
</style>