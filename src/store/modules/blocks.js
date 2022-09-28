import store from ".."
import contents from "./contents"

export default {
    // 设置私有命名空间
    namespaced: true,
    state: {
        blockA: {
            name: "blockA",
            content: contents.state.contentA.content,
            show: false,
            users: [],
            track: {}
        },
        blockB: {
            name: "blockB",
            content: contents.state.contentB.content,
            show: false,
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
            console.log("state:", state)
            console.log("name:", name)
            for (let index in state[name].users) {
                // console.log(index)
                console.log(state[name].users[index])
            }
        },
        pushUser (state) {

        }
    },
    actions: {

    }
}