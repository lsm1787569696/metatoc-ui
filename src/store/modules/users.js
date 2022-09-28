export default {
    // 设置私有命名空间
    namespaced: true,
    state: {
        userA: {
            name: "小明",
            address: "bptkjr6s7v2bh7xms3hf",
            privateKey: "9z5arey88rm6nf8q4gm6",
            avatar: ""
        },
        userB: {
            name: "小红",
            address: "smacmhphdfccp3gks5rg",
            privateKey: "5t7nruazyq7faxe5k3fj",
            avatar: ""
        }
    },
    getters: {
        getUserAInfo (state) {
            return state.userA
        },
        getUserBInfo (state) {
            return state.userB
        },
        getAllUsersInfo (state) {
            const allUsers = []
            allUsers.push(state.userA)
            allUsers.push(state.userB)
            return allUsers
        }
    },
    mutations: {},
    actions: {}
}
