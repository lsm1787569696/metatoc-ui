import users from "./users"
import contents from "./contents"
import chains from "./chains"
import services from "./services"

export default {
    // 设置私有命名空间
    namespaced: true,
    state: {
        blockA: {
            name: "blockA",
            content: contents.state.contentA.content,
            fakeContent: contents.state.contentA.fakeContent,
            showBlock: false,
            showContent: false,
            users: [],
            track: {}
        },
        blockB: {
            name: "blockB",
            content: contents.state.contentB.content,
            fakeContent: contents.state.contentB.fakeContent,
            showBlock: false,
            showContent: false,
            users: [],
            track: {}
        }
    },
    getters: {
        getBlockAInfo (state) {
            return state.blockA
        },
        getBlockBInfo (state) {
            return state.blockB
        },
        getAllBlocksInfo (state) {
            const allBlocks = []
            allBlocks.push(state.blockA)
            allBlocks.push(state.blockB)
            return allBlocks
        }
    },
    mutations: {
        changeShow (state, name) {
            if (users.state.currentUser.address != "" && services.state.serviceStatus == "available") {
                console.log("Execute [changeShow] methond")
                console.log("Parameter [name] is '", name, "'")

                if (name == "") {
                    for (let key in state) {
                        if (state[key].users.length > 0) {
                            let canShowContent = false
                            for (let index in state[key].users) {
                                if (state[key].users[index].name == users.state.currentUser.name) {
                                    canShowContent = true
                                    break
                                }
                            }
                            state[key].showContent = canShowContent
                        }
                    }
                } else if (typeof state[name] != "undefined") {
                    // change showBlock
                    if (state[name].users.length > 0) {
                        state[name].showBlock = true
                    }
                    // change showContent
                    if (state[name].users.length > 0) {
                        for (let index in state[name].users) {
                            if (state[name].users[index].name == users.state.currentUser.name) {
                                state[name].showContent = true
                                break
                            }
                        }
                    }
                }
            }
        },
        contentToBlock (state, name) {
            if (users.state.currentUser.address != "" && services.state.serviceStatus == "available") {
                if (typeof state[name] != "undefined") {
                    const currentUser = {
                        name: users.state.currentUser.name,
                        byName: users.state.currentUser.byName,
                        address: users.state.currentUser.address,
                        privateKey: users.state.currentUser.privateKey,
                        avatar: users.state.currentUser.avatar
                    }
                    state[name].users.push(currentUser)
                }
            }
        },
        shareBlock (state, name) {
            if (users.state.currentUser.address != "" && services.state.serviceStatus == "available") {
                if (typeof state[name] != "undefined") {
                    if (state[name].users.length == 1) {
                        const userName = state[name].users[0].name
                        if (userName == users.state.currentUser.name) {
                            console.log("Execute [shareBlock] methond")
                            console.log("Parameter [name] is '", name, "'")

                            // TODO: PUT https://example.io/v1/paths

                            let otherUserName = ""
                            if (userName == "userA") {
                                otherUserName = "userB"
                            } else if (userName == "userB") {
                                otherUserName = "userA"
                            }

                            const otherUser = {
                                name: users.state[otherUserName].name,
                                byName: users.state[otherUserName].byName,
                                address: users.state[otherUserName].address,
                                privateKey: users.state[otherUserName].privateKey,
                                avatar: users.state[otherUserName].avatar
                            }
                            state[name].users.push(otherUser)

                            // 更新区块数据是否显示
                            // blocks.mutations.changeShow(blocks.state, "")

                            // 更新链上节点数据是否显示
                            // chains.mutations.changeNodeStatus(chains.state, {nodeKey: "", nodeStatus: ""})
                        }
                    }
                }
            } else {
                alert("Sorry, [users.state.currentUser.address] is empty")
            }
        },
        viewTrack (state, name) {
            if (users.state.currentUser.address != "" && services.state.serviceStatus == "available") {
            }
        }
    },
    actions: {}
}