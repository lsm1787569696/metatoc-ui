import users from "./users"
import blocks from "./blocks"

export default {
    // 设置私有命名空间
    namespaced: true,
    state: {
        contentA: {
            name: "contentA",
            content: "Hello",
            path: "/metatoc/1024show/hello/" + Date.now(),
            drag: true
        },
        contentB: {
            name: "contentB",
            content: "World",
            path: "/metatoc/1024show/world/" + Date.now(),
            drag: true
        },
        contentBlockMap: {
            contentA: "blockA",
            contentB: "blockB"
        }
    },
    getters: {
        getContentAInfo (state) {
            return state.contentA
        },
        getContentBInfo (state) {
            return state.contentB
        },
        getAllContentsInfo (state) {
            const allContets = []
            allContets.push(state.contentA)
            allContets.push(state.contentB)
            return allContets
        }
    },
    mutations: {
        contentToBlock (state, name) {
            if (users.state.currentUser.address != "") {
                if (state[name].drag == true) {
                    if (typeof blocks.state[state.contentBlockMap[name]] != "undefined") {
                        console.log("Execute [contentToBlock] methond")
                        console.log("Parameter [name] is '", name, "'")

                        // TODO: POST https://example.io/v1/paths

                        const currentUser = {
                            name: users.state.currentUser.name,
                            byName: users.state.currentUser.byName,
                            address: users.state.currentUser.address,
                            privateKey: users.state.currentUser.privateKey,
                            avatar: users.state.currentUser.avatar
                        }
                        blocks.state[state.contentBlockMap[name]].users.push(currentUser)
                        blocks.mutations.changeShow(blocks.state, state.contentBlockMap[name])
                        state[name].drag = false
                    }
                }
            }
        }
    },
    actions: {}
}