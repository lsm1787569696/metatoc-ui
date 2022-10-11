import blocks from "./blocks"
import chains from "./chains"
import ajax from "../../api/ajax.js"
import { useStore } from 'vuex'

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
            byName: "Lily",
            address: "bptkjr6s7v2bh7xms3hf",
            privateKey: "9z5arey88rm6nf8q4gm6",
            avatar: ""
        },
        userB: {
            name: "userB",
            byName: "Lucy",
            address: "smacmhphdfccp3gks5rg",
            privateKey: "5t7nruazyq7faxe5k3fj",
            avatar: ""
        }
    },
    getters: {
        getCurrentUserInfo (state) {
            return state.currentUser
        },
        // getUserAInfo (state) {
        //     return state.userA
        // },
        // getUserBInfo (state) {
        //     return state.userB
        // },
        getAllUsersInfo (state) {
            const allUsers = []
            allUsers.push(state.userA)
            allUsers.push(state.userB)
            return allUsers
        }
    },
    mutations: {
        // 切换用户
        swithCurrentUser (state, {name, reset}) {
            console.log("Execute [swithCurrentUser] methond")

            const beginSwitch = () => {
                const cookieKey = ("metatoc_1024show_users_" + name).toUpperCase()
                const cookieValue = $cookies.get(cookieKey)

                if (cookieValue == null || reset == true) {
                    (async function () {
                        let resData = {}
                        await ajax({
                            method: "GET",
                            url: "../signup"
                        }).then((res) => {
                            if (res.status == 200) {
                                resData = JSON.parse(res.data)
                            }
                        }).catch((err) => {
                            console.error("Failed to request the signup interface. Please check.")
                        })
                        if (resData.code == 0) {
                            endSwitch(resData.data.address, resData.data.private_key)
                        }
                    })()
                } else {
                    endSwitch(cookieValue.address, cookieValue.privateKey)
                }
            }

            const endSwitch = (address, privateKey) => {
                // var beginTime=new Date().getTime();
                // while(new Date().getTime()  < beginTime + 5000) {   }
                // console.log("1")
                if (typeof state[name] != "undefined") {
                    state[name].address = address
                    state[name].privateKey = privateKey

                    state.currentUser.name = state[name].name
                    state.currentUser.byName = state[name].byName
                    state.currentUser.address = state[name].address
                    state.currentUser.privateKey = state[name].privateKey
                    state.currentUser.avatar = state[name].avatar

                    const cookieKey = ("metatoc_1024show_users_" + name).toUpperCase()
                    const cookieValue = {
                        address: address,
                        privateKey: privateKey
                    }
                    $cookies.set(cookieKey, cookieValue)
                }
            }

            beginSwitch()
        }
    }
}