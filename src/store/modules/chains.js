import users from "./users"
import blocks from "./blocks"
import services from "./services"
import contents from "./contents"

export default {
    // 设置私有命名空间
    namespaced: true,
    state: {
        nodeA: {
            name: "nodeA",
            byName: "节点A",
            address: "",
            content: [],
            allContent: [],
            nodeStatus: "available" //available, notAvailable, fake
        },
        nodeB: {
            name: "nodeB",
            byName: "节点B",
            address: "",
            content: [],
            allContent: [],
            nodeStatus: "available" //available, notAvailable, fake
        },
        nodeC: {
            name: "nodeC",
            byName: "节点C",
            address: "",
            content: [],
            allContent: [],
            nodeStatus: "available" //available, notAvailable, fake
        },
        nodeD: {
            name: "nodeD",
            byName: "节点D",
            address: "",
            content: [],
            allContent: [],
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
            if (true || users.state.currentUser.address != "") {
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

                    for (let key in contents.state) {
                        if (contents.state[key].drag === false) {
                            const content = contents.state[key].content
                            for (let key in state) {
                                if (state[key].nodeStatus == "available") {
                                    if (state[key].allContent.indexOf(content) == -1) {
                                        state[key].allContent.push(content)
                                    }
                                }
                            }
                        }
                    }
                }
            }

            // services.mutations.refreshServices(services.state)
        }
    },
    actions: {}
}