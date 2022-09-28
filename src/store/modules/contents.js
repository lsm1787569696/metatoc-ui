import store from ".."
import blocks from "./blocks"

export default {
    // 设置私有命名空间
    namespaced: true,
    state: {
        contentA: {
            name: "contentA",
            content: "Hello",
            path: "/metatoc/1024show/hello/" + Date.now(),
            drag: true,
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
            if (store.state.currentUser.address == "") {
                console.error("store.state.currentUser.address is empty")
            } else {
                if (state[name].drag == true) {
                    blocks.state[state.contentBlockMap[name]].users.push(store.state.currentUser)
                    blocks.mutations.changeShow(blocks.state, state.contentBlockMap[name])
                    state[name].drag = false
                } else {
                    console.error("This data has been to chain")
                }
            }
        }
    },
    actions: {
    }
}