import users from "./users"
import contents from "./contents"
import chains from "./chains"
import services from "./services"
import ajax from "../../api/ajax.js"

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
            showFakeContent: false,
            users: [],
            track: {}
        },
        blockB: {
            name: "blockB",
            content: contents.state.contentB.content,
            fakeContent: contents.state.contentB.fakeContent,
            showBlock: false,
            showContent: false,
            showFakeContent: false,
            users: [],
            track: {}
        },
        blocksToContentsMap: {
            blockA: "contentA",
            blockB: "contentB"
        }
    },
    getters: {
        // getBlockAInfo (state) {
        //     return state.blockA
        // },
        // getBlockBInfo (state) {
        //     return state.blockB
        // },
        getAllBlocksInfo (state) {
            const allBlocks = []

            const handleBlocks = (name) => {
                let cookieKey, cookieValue
                cookieKey = ("metatoc_1024show_blocks_" + name).toUpperCase()
                cookieValue = $cookies.get(cookieKey)
                if (cookieValue != null) {
                    state[name].showBlock = cookieValue.showBlock
                    state[name].users = cookieValue.users
                } else {
                    state[name].showBlock = false
                    state[name].users = []
                    $cookies.set(cookieKey, {
                        showBlock: state[name].showBlock,
                        users: state[name].users
                    })
                }
                allBlocks.push(state[name])
            }

            // handle blockA
            handleBlocks("blockA")
            // handle blockB
            handleBlocks("blockB")

            return allBlocks
        }
    },
    mutations: {
        refreshBlocks (state, name) {
            if (typeof name == "undefined") {
                let cookieKey
                cookieKey = ("metatoc_1024show_blocks_blockA").toUpperCase()
                $cookies.remove(cookieKey)
                cookieKey = ("metatoc_1024show_blocks_blockB").toUpperCase()
                $cookies.remove(cookieKey)
            }
        },
        changeShow (state, name) {
            console.log("Execute [blocks.changeShow] methond")
            console.log("users.state.currentUser.address:", users.state.currentUser.address)
            console.log("services.state.serviceStatus:", services.state.serviceStatus)

            console.log(users.state.currentUser)
            if (users.state.currentUser.address != "" && services.state.serviceStatus == "available") {
                for (let key in state) {
                    if (key == "blockA" || key == "blockB") {
                        if (state[key].showBlock == true) {
                            let showContent = false
                            let showFakeContent = false
                            for (let index in state[key].users) {
                                if (users.state.currentUser.name == state[key].users[index].name) {
                                    showContent = true
                                    showFakeContent = true
                                    break
                                }
                            }
                            state[key].showContent = showContent
                            state[key].showFakeContent = showFakeContent
                        }
                    }
                }
            }
        },
        contentToBlock (state, name) {
            console.log("Execute [blocks.contentToBlock] methond")
            console.log("users.state.currentUser.address:", users.state.currentUser.address)
            console.log("services.state.serviceStatus:", services.state.serviceStatus)
            if (users.state.currentUser.address != "" && services.state.serviceStatus == "available") {
                if (typeof state[name] != "undefined" && state[name].showBlock == false) {
                    let existsCurrentUser = false
                    for (let index in state[name].users) {
                        if (users.state.currentUser.name == state[name].users[index].name) {
                            existsCurrentUser = true
                            break
                        }
                    }
                    if (existsCurrentUser == false) {
                        const beginToBlock = async () => {
                            let resData = {}

                            // await ajax({
                            //     method: "POST",
                            //     url: "../paths",
                            //     transformRequest: [function (data, headers) {
                            //         return JSON.stringify({
                            //             "private_key": "wallet.private.key",
                            //             "address": "wallet.address",
                            //             "path": "/HDFS/storage/path",
                            //             "content": "content.of.the.path.HDFS.storaged"
                            //         })
                            //     }],
                            //     headers: {'accept': 'application/json', 'Content-Type': 'application/json'},
                            // }).then((res) => {

                            // }).catch((err) => {
                            //     console.error("Failed to request the post paths interface. Please check.")
                            // }).finally(() => {
                            //     console.log("Unknown error. Please check.")
                            // })
                        }

                        const endToBlock = async () => {
                            state[name].showBlock = true
                            const currentUser = {
                                name: users.state.currentUser.name,
                                byName: users.state.currentUser.byName,
                                address: users.state.currentUser.address,
                                privateKey: users.state.currentUser.privateKey,
                                avatar: users.state.currentUser.avatar
                            }
                            state[name].users.push(currentUser)

                            const cookieKey = ("metatoc_1024show_blocks_" + name).toUpperCase()
                            $cookies.set(cookieKey, {
                                showBlock: state[name].showBlock,
                                users: state[name].users
                            })
                        }

                        (async function () {
                            await beginToBlock()
                            await endToBlock()
                        })()
                    }
                }
            }
        },
        shareBlock (state, name) {
            console.log("Execute [blocks.shareBlock] methond")
            console.log("users.state.currentUser.address:", users.state.currentUser.address)
            console.log("services.state.serviceStatus:", services.state.serviceStatus)
            if (users.state.currentUser.address != "" && services.state.serviceStatus == "available") {
                if (typeof state[name] != "undefined" && state[name].showBlock == true) {
                    let existsCurrentUser = false
                    for (let index in state[name].users) {
                        if (users.state.currentUser.name == state[name].users[index].name) {
                            existsCurrentUser = true
                            break
                        }
                    }
                    if (existsCurrentUser == true) {
                        const beginShareBlock = async () => {

                        }

                        const endShareBlock = async () => {
                            let otherUserName = ""
                            if (users.state.currentUser.name == "userA") {
                                otherUserName = "userB"
                            } else if (users.state.currentUser.name == "userB") {
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

                            const cookieKey = ("metatoc_1024show_blocks_" + name).toUpperCase()
                            const cookieValue = $cookies.get(cookieKey)
                            if (cookieValue != null) {
                                $cookies.set(cookieKey, {
                                    showBlock: cookieValue.showBlock,
                                    users: state[name].users
                                })
                            }
                        }

                        (async function () {
                            await beginShareBlock()
                            await endShareBlock()
                        })()
                    }
                }
            }
        },
        viewTrack (state, name) {
            if (users.state.currentUser.address != "" && services.state.serviceStatus == "available") {
            }
        }
    },
    actions: {}
}