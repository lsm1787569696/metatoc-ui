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
            console.log("Execute [getAllNodes] methond")

            const allNodes = []
            for (let key in state) {
                let cookieKey = ("metatoc_1024show_nodes_" + state[key].name).toUpperCase()
                let cookieValue = $cookies.get(cookieKey)
                if (cookieValue != null) {
                    state[key].content = cookieValue.content
                    state[key].allContent = cookieValue.allContent
                    state[key].nodeStatus = cookieValue.nodeStatus
                }
                allNodes.push(state[key])
            }
            return allNodes
        }
    },
    mutations: {
        changeNodeStatus (state, {nodeKey, nodeStatus}) {
            if (true || users.state.currentUser.address != "") {
                console.log("Execute [changeNodeStatus] methond")

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
                        if (key == "blockA" || key == "blockB") {
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

                    if (nodeKey != "") {
                        let cookieKey = ("metatoc_1024show_nodes_" + nodeKey).toUpperCase()
                        if (import.meta.env.VITE_DISABLE_SETCOOKIE === "") {
                            $cookies.set(cookieKey, state[nodeKey])
                        }
                    }
                }
            }
        }
    },
    actions: {

    }
}