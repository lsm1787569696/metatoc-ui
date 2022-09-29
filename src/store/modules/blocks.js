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
        changeShowBlock (state, name) {

        },
        changeShowContent (state, name) {
            console.log("Execute [changeShowContent] methond")
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
                        }


                    }
                }
            }
        }
    },
    actions: {}
}