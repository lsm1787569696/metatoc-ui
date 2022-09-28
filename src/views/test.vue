<template>
    <h2>Users</h2>
    <ul>
        <li>当前用户姓名：{{ currentUser.name }}</li>
        <li>当前用户钱包地址：{{ currentUser.address }}</li>
        <li>当前用户私钥：{{ currentUser.privateKey }}</li>
        <li>当前用户头像：{{ currentUser.avatar }}</li>
        <li><button @click="swithUser('userA')">切换至小明</button></li>
        <li><button @click="swithUser('userB')">切换至小红</button></li>
    </ul>
    <hr />

    <h2>Contents</h2>
    <ul v-for="item in allContents" :key="item">
        <li>数据内容：{{ item.content }}</li>
        <li>数据地址：{{ item.path }}</li>
        <li>能否拖拽：{{ item.drag }}</li>
        <li><button @click="contentToBlock(item.name)">上链</button></li>
    </ul>
    <hr/>

    <h2>Blocks</h2>
    <ul v-for="item in allBlocks" :key="item">
        <li>数据内容: {{ item.content }}</li>
        <li>是否显示：{{ item.show }}</li>
        <li>数据拥有者：{{ item.users }}</li>
        <li>溯源数据：{{ item.track }}</li>
        <li><button @click="contentToBlock(item.name)">分享</button></li>
    </ul>
    <hr/>

    <h2>Services</h2>
    <ul>
        <li>服务状态: {{ allServices.serviceStatus }}</li>
        <li>可用节点数: {{ allServices.availableNodeNumber }}</li>
        <li>损坏节点数: {{ allServices.notAvailableNodeNumber }}</li>
        <li>造假节点数: {{ allServices.fakeNodeNumber }}</li>
    </ul>
    <hr/>

    <h2>Chains</h2>
    <ul v-for="item in allNodes" :key="item">
        <li>数据内容：</li>
        <li>节点状态：{{ item.nodeStatus }}</li>
        <li><button @click="changeNodeStatus(item.name, 'available')">恢复</button></li>
        <li><button @click="changeNodeStatus(item.name, 'notAvailable')">损坏</button></li>
        <li><button @click="changeNodeStatus(item.name, 'fake')">造假</button></li>
    </ul>
    <hr/>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
  setup() {
    const $store = useStore()

    const currentUser = computed(() => {
        return $store.getters["getCurrentUserInfo"]
    })
    const swithUser = (name) => {
        $store.commit("setCurrentUser", name)
    }
    const allContents = computed(() => {
        return $store.getters["contents/getAllContentsInfo"]
    })
    const contentToBlock = (name) => {
        $store.commit("contents/contentToBlock", name)
    }

    const allBlocks = computed(() => {
        return $store.getters["blocks/getAllBlocksInfo"]
    })

    const allServices = computed(() => {
        return $store.getters["services/getAllServicesInfo"]
    })

    const allNodes = computed(() => {
        return $store.getters["chains/getAllNodes"]
    })
    const changeNodeStatus = (nodeKey, nodeStatus) => {
        $store.commit("chains/changeNodeStatus", {"nodeKey": nodeKey, "nodeStatus": nodeStatus})
    }

    // const userAInfo = computed(() => {
    //   return $store.getters["users/userAInfo"]
    // })
    // const userBInfo = computed(() => {
    //   return $store.getters["users/userBInfo"]
    // })

    // const contentAInfo = computed(() => {
    //   return $store.getters["contents/contentAInfo"]
    // })
    // const contentBInfo = computed(() => {
    //   return $store.getters["contents/contentBInfo"]
    // })
    // const contentAToBlock = () => {
    //   $store.commit("contents/contentAToBlock")
    // }
    // const contentBToBlock = () => {
    //   $store.commit("contents/contentBToBlock")
    // }

    // const blockAInfo = computed(() => {
    //     return $store.getters["blocks/blockAInfo"]
    // })
    // const blockBInfo = computed(() => {
    //     return $store.getters["blocks/blockBInfo"]
    // })

    return {
      currentUser,
      swithUser,
      allContents,
      contentToBlock,
      allBlocks,
      allServices,
      allNodes,
      changeNodeStatus
    //   userAInfo,
    //   userBInfo,
    //   contentAInfo,
    //   contentBInfo,
    //   contentAToBlock,
    //   contentBToBlock,
    //   blockAInfo,
    //   blockBInfo
    }
  }
}
</script>

<style>

</style>
