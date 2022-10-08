<template>
    <h2>Users</h2>
    <ul>
        <li>当前用户姓名：{{ currentUser.name }}</li>
        <li>当前用户别名姓名：{{ currentUser.byName }}</li>
        <li>当前用户钱包地址：{{ currentUser.address }}</li>
        <li>当前用户私钥：{{ currentUser.privateKey }}</li>
        <li>当前用户头像：{{ currentUser.avatar }}</li>
        <li><button @click="swithCurrentUser('userA')">切换至小明</button></li>
        <li><button @click="swithCurrentUser('userB')">切换至小红</button></li>
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
        <li>是否显示区块：{{ item.showBlock }}</li>
        <li>是否数据内容：{{ item.showContent }}</li>
        <li>数据拥有者：{{ item.users }}</li>
        <li>溯源数据：{{ item.track }}</li>
        <li><button @click="shareBlock(item.name)">分享</button></li>
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
        <li>节点名称：{{ item.name }}</li>
        <li>节点地址：{{ item.address }}</li>
        <li>数据内容：{{ item.content }}</li>
        <li>节点状态：{{ item.nodeStatus }}</li>
        <li><button @click="changeNodeStatus(item.name, 'available')">恢复</button></li>
        <li><button @click="changeNodeStatus(item.name, 'notAvailable')">损坏</button></li>
        <li><button @click="changeNodeStatus(item.name, 'fake')">造假</button></li>
    </ul>
    <hr/>

    <tDom></tDom>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
import dom from '../components/cards/dom.vue'

export default {
  setup() {
    const $store = useStore()

    const currentUser = computed(() => {
        return $store.getters["users/getCurrentUserInfo"]
    })

    const swithCurrentUser = (name) => {
        $store.commit("users/swithCurrentUser", name)
    }

    const allContents = computed(() => {
        return $store.getters["contents/getAllContentsInfo"]
    })

    const contentToBlock = (name) => {
        $store.commit("contents/contentToBlock", name)
        $store.commit("chains/changeNodeStatus", {nodeKey: "", nodeStatus: ""})
    }

    const allBlocks = computed(() => {
        return $store.getters["blocks/getAllBlocksInfo"]
    })

    const shareBlock = (name) => {
        $store.commit("blocks/shareBlock", name)
    }

    const allServices = computed(() => {
        return $store.getters["services/getAllServicesInfo"]
    })

    const allNodes = computed(() => {
        return $store.getters["chains/getAllNodes"]
    })

    const changeNodeStatus = (nodeKey, nodeStatus) => {
        $store.commit("chains/changeNodeStatus", {"nodeKey": nodeKey, "nodeStatus": nodeStatus})
    }

    return {
      currentUser,
      swithCurrentUser,
      allContents,
      contentToBlock,
      allBlocks,
      shareBlock,
      allServices,
      allNodes,
      changeNodeStatus
    }
  },
  components: {
    tDom: dom
  }
}
</script>

<style>
</style>
