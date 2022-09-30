import blocks from "./blocks"
import chains from "./chains"

export default {
    // 设置私有命名空间
    namespaced: true,
    state: {
        currentUser: {
            name: "",
            byName: "",
            address: "",
            privateKey: "",
            avatar: ""
        },
        userA: {
            name: "userA",
            byName: "小明",
            address: "bptkjr6s7v2bh7xms3hf",
            privateKey: "9z5arey88rm6nf8q4gm6",
            avatar: ""
        },
        userB: {
            name: "userB",
            byName: "小红",
            address: "smacmhphdfccp3gks5rg",
            privateKey: "5t7nruazyq7faxe5k3fj",
            avatar: ""
        }
    },
    getters: {
        getCurrentUserInfo(state) {
            return state.currentUser
        },
        getUserAInfo(state) {
            return state.userA
        },
        getUserBInfo(state) {
            return state.userB
        },
        getAllUsersInfo(state) {
            const allUsers = []
            allUsers.push(state.userA)
            allUsers.push(state.userB)
            return allUsers
        }
    },
    mutations: {
        // 切换用户
        swithCurrentUser(state, name) {
            if (typeof state[name] != "undefined") {
                console.log("Execute [swithCurrentUser] methond")
                console.log("Parameter [name] is '", name, "'")

                state.currentUser.name = state[name].name
                state.currentUser.byName = state[name].byName
                state.currentUser.address = state[name].address
                state.currentUser.privateKey = state[name].privateKey
                state.currentUser.avatar = state[name].avatar

                // 切换用户时更新区块数据是否显示
                blocks.mutations.changeShow(blocks.state, "")

                // 切换用户时更新链上节点数据是否显示
                chains.mutations.changeNodeStatus(chains.state, { nodeKey: "", nodeStatus: "" })
            }
        }
    },
    actions: {}
}