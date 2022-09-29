import users from "./users"
import contents from "./contents"

export default {
    // 设置私有命名空间
    namespaced: true,
    state: {
        blockA: {
            name: "blockA",
            content: contents.state.contentA.content,
            showBlock: false,
            showContent: false,
            users: [],
            track: {}
        },
        blockB: {
            name: "blockB",
            content: contents.state.contentB.content,
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
            console.log("Execute [changeShow] methond")
            console.log("Parameter [name] is '", name, "'")

            if (users.state.currentUser.address != "") {
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
        shareBlock (state, name) {
            if (users.state.currentUser.address != "") {
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

                            // this.mutations.changeShowContent(state, name)
                            // this.mutations.changeShowBlock(state, name)
                        }
                    }
                }
            }
        }
    },
    actions: {}
}