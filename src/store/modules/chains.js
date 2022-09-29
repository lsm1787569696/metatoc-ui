import store from ".."

export default {
    // 设置私有命名空间
    namespaced: true,
    state: {
        nodeA: {
            name: "nodeA",
            content: [],
            nodeStatus: "available" //available, notAvailable, fake
        },
        nodeB: {
            name: "nodeB",
            content: [],
            nodeStatus: "available" //available, notAvailable, fake
        },
        nodeC: {
            name: "nodeC",
            content: [],
            nodeStatus: "available" //available, notAvailable, fake
        },
        nodeD: {
            name: "nodeD",
            content: [],
            nodeStatus: "available" //available, notAvailable, fake
        }
    },
    getters: {
        getAllNodes (state) {
            const allNodes = []
            allNodes.push(state.nodeA)
            allNodes.push(state.nodeB)
            allNodes.push(state.nodeC)
            allNodes.push(state.nodeD)
            return allNodes
        }
    },
    mutations: {
        changeNodeStatus (state, {nodeKey, nodeStatus}) {
            console.log("nodeKey:", nodeKey)
            console.log("nodeStatus:", nodeStatus)
            console.log(state[nodeKey])
            if (nodeStatus == "available") {

            } else if (nodeStatus == "notAvailable") {

            } else if (nodeStatus == "fake") {

            }
        }
    },
    actions: {}
}