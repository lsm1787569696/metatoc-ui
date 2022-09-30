import users from "./users"
import blocks from "./blocks"
import services from "./services"

export default {
    // 设置私有命名空间
    namespaced: true,
    state: {
        nodeA: {
            name: "nodeA",
            address: "",
            content: [],
            nodeStatus: "available" //available, notAvailable, fake
        },
        nodeB: {
            name: "nodeB",
            address: "",
            content: [],
            nodeStatus: "available" //available, notAvailable, fake
        },
        nodeC: {
            name: "nodeC",
            address: "",
            content: [],
            nodeStatus: "available" //available, notAvailable, fake
        },
        nodeD: {
            name: "nodeD",
            address: "",
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
            if (users.state.currentUser.address != "") {
                console.log("Execute [contentToBlock] methond")
                console.log("Parameter [nodeKey] is '", nodeKey, "'")
                console.log("Parameter [nodeStatus] is '", nodeStatus, "'")

                if (nodeStatus == "fake") {

                } else {
                    if (nodeKey != "") {
                        if (typeof state[nodeKey] != "undefined" && ["available", "notAvailable", "fake"].indexOf(nodeStatus) > -1) {
                            state[nodeKey].nodeStatus = nodeStatus
                        }
                    }

                    // 清空content
                    for (let key in state) {
                        if (state[key].nodeStatus == "available") {
                            state[key].content = []
                        }
                    }

                    for (let key in blocks.state) {
                        if (blocks.state[key].users.length > 0) {
                            for (let index in blocks.state[key].users) {
                                if (blocks.state[key].users[index].name == users.state.currentUser.name) {
                                    const content = blocks.state[key].content
                                    for (let key in state) {
                                        if (state[key].nodeStatus == "available") {
                                            state[key].content.push(content)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            services.mutations.refreshServices(services.state)
        }
    },
    actions: {}
}