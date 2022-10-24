import ajax from "../../api/ajax.js"

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
            byName: "Gabi",
            address: "FRuOpzY0OpSgKGWKFX3R",
            privateKey: "LbF0soI33uFxiTV5cJkE",
            avatar: "/src/assets/images/man.png",
            shareAvatar: '/src/assets/images/newCheckMan.png'
        },
        userB: {
            name: "userB",
            byName: "Ildi",
            address: "C48zPoaBKvxYmwvJ1H90",
            privateKey: "bUYLGUw5mZ3w93S01lsD",
            avatar: "/src/assets/images/girl.png",
            shareAvatar: '/src/assets/images/newCheckWoman.png'
        }
    },
    getters: {
        getCurrentUserInfo(state) {
            console.log("Execute [getCurrentUserInfo] methond")
            return state.currentUser
        },
        getAllUsersInfo(state) {
            const allUsers = []
            allUsers.push(state.userA)
            allUsers.push(state.userB)
            return allUsers
        }
    },
    mutations: {
        // 重置用户
        refreshUsers(state, name) {
            if (typeof name == "undefined") {
                let cookieKey
                cookieKey = ("metatoc_1024show_users_userA").toUpperCase()
                $cookies.remove(cookieKey)
                cookieKey = ("metatoc_1024show_users_userB").toUpperCase()
                $cookies.remove(cookieKey)
            }
        },
        // 切换用户
        swithCurrentUser(state, { name, context }) {
            console.log("Execute [swithCurrentUser] methond")

            const beginSwitchCurrentUser = () => {
                console.log("Execute [swithCurrentUser.beginSwitchCurrentUser] methond")
                    // console.log("sleep 2 seconds")
                    // const beginTime = new Date().getTime()
                    // while (new Date().getTime()  < beginTime + 2000) {}

                const cookieKey = ("metatoc_1024show_users_" + name).toUpperCase()
                const cookieValue = $cookies.get(cookieKey)

                if (cookieValue == null) {
                    if (
                        import.meta.env.VITE_DISABLE_REQUEST_WEBSERVICE === "DISABLED") {
                        endSwitchCurrentUser(state[name].address, state[name].privateKey)
                    } else {
                        (async function() {
                            let resData = {}
                            await ajax({
                                method: "GET",
                                url: "/signup"
                            }).then((res) => {
                                if (res.status == 200) {
                                    resData = JSON.parse(res.data)
                                }
                            }).catch((err) => {
                                console.error("Failed to request the signup interface. Please check.")
                            })
                            if (resData.code == 0) {
                                endSwitchCurrentUser(resData.data.address, resData.data.private_key)
                            }
                        })()
                    }
                } else {
                    endSwitchCurrentUser(cookieValue.address, cookieValue.privateKey)
                }
            }

            const endSwitchCurrentUser = (address, privateKey) => {
                console.log("Execute [swithCurrentUser.endSwitchCurrentUser] methond")

                if (typeof state[name] != "undefined") {
                    state[name].address = address
                    state[name].privateKey = privateKey

                    state.currentUser = state[name]

                    const cookieKey = ("metatoc_1024show_users_" + name).toUpperCase()
                    const cookieValue = {
                        address: address,
                        privateKey: privateKey
                    }
                    if (
                        import.meta.env.VITE_DISABLE_SETCOOKIE === "") {
                        $cookies.set(cookieKey, cookieValue)
                    }
                }

                const { commit } = context
                commit("blocks/changeShow", null, { root: true })
                commit("chains/changeNodeStatus", { "nodeKey": "", "nodeStatus": "" }, { root: true })
            }

            beginSwitchCurrentUser()
        }
    },
    actions: {
        // 切换用户
        swithCurrentUser(context, name) {
            const { commit } = context
            commit("swithCurrentUser", { name, context })
        }
    }
}