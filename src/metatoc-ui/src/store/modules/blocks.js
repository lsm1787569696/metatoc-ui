import users from "./users"
import contents from "./contents"
import services from "./services"
import ajax from "../../api/ajax.js"
import moment from "moment/moment"

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
        getAllBlocksInfo (state) {
            console.log("Execute [getAllBlocksInfo] methond")

            const allBlocks = []

            const handleBlocks = (name) => {
                const cookieKey = ("metatoc_1024show_blocks_" + name).toUpperCase()
                const cookieValue = $cookies.get(cookieKey)

                if (cookieValue == null) {
                    state[name].showBlock = false
                    state[name].users = []
                    if (import.meta.env.VITE_DISABLE_SETCOOKIE === "") {
                        $cookies.set(cookieKey, {
                            showBlock: state[name].showBlock,
                            users: state[name].users
                        })
                    }
                } else {
                    state[name].showBlock = cookieValue.showBlock
                    state[name].users = cookieValue.users
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
        // 重置区块
        refreshBlocks (state, name) {
            if (typeof name == "undefined") {
                let cookieKey
                cookieKey = ("metatoc_1024show_blocks_blockA").toUpperCase()
                $cookies.remove(cookieKey)
                cookieKey = ("metatoc_1024show_blocks_blockB").toUpperCase()
                $cookies.remove(cookieKey)
            }
        },
        contentToBlock (state, { name, context }) {
            console.log("Execute [blocks.contentToBlock] methond")

            if (users.state.currentUser.address != "" && services.state.serviceStatus == "available") {
                if (typeof state[name] != "undefined" && state[name].showBlock == false) {
                    // 判断数据拥有者中是否存在当前用户
                    // 如果不存在则允许进行数据上链
                    let existCurrentUser = false
                    for (let index in state[name].users) {
                        if (users.state.currentUser.name == state[name].users[index].name) {
                            existCurrentUser = true
                            break
                        }
                    }

                    if (existCurrentUser == false) {
                        const beginContentToBlock = () => {
                            console.log("Execute [blocks.contentToBlock.beginContentToBlock] methond");

                            (async function () {
                                if (import.meta.env.VITE_DISABLE_REQUEST_WEBSERVICE === "DISABLED") {
                                    endContentToBlock()
                                } else {
                                    let resData = {}
                                    await ajax({
                                        method: "POST",
                                        url: "/paths",
                                        transformRequest: [function (data, headers) {
                                            return JSON.stringify({
                                                "address": users.state.currentUser.address,
                                                "private_key": users.state.currentUser.privateKey,
                                                "path": contents.state[state.blocksToContentsMap[name]].path,
                                                "content": contents.state[state.blocksToContentsMap[name]].content
                                            })
                                        }],
                                        headers: {
                                            "accept": "application/json",
                                            "Content-Type": "application/json"
                                        }
                                    }).then((res) => {
                                        if (res.status == 200) {
                                            resData = JSON.parse(res.data)
                                        }
                                    }).catch((err) => {
                                        console.error("Failed to request the post paths interface. Please check.")
                                    })
                                    if (resData.code == 0) {
                                        endContentToBlock()
                                    }
                                }
                            })()
                        }

                        const showtime = () => {
                            var nowdate = new Date();
                            var year = nowdate.getFullYear(),
                                month = nowdate.getMonth() + 1,
                                date = nowdate.getDate(),
                                h = nowdate.getHours(),
                                m = nowdate.getMinutes(),
                                s = nowdate.getSeconds();
                            return year + "-" + month + "-" + date + " " + h +":" + m + ":" + s;

                        }

                        const endContentToBlock = () => {
                            console.log("Execute [blocks.contentToBlock.endContentToBlock] methond");

                            state[name].showBlock = true
                            state[name].showContent = true
                            state[name].showFakeContent = true
                            state[name].users.push({
                                name: users.state.currentUser.name,
                                byName: users.state.currentUser.byName,
                                address: users.state.currentUser.address,
                                privateKey: users.state.currentUser.privateKey,
                                avatar: users.state.currentUser.avatar,
                                timestamp: moment().format("YYYY-MM-DD HH:mm:ss")
                            })

                            const cookieKey = ("metatoc_1024show_blocks_" + name).toUpperCase()
                            if (import.meta.env.VITE_DISABLE_SETCOOKIE === "") {
                                $cookies.set(cookieKey, {
                                    showBlock: state[name].showBlock,
                                    users: state[name].users
                                })
                            }

                            const { commit } = context
                            commit("contents/contentToBlock", state.blocksToContentsMap[name], { root: true })
                            commit("chains/changeNodeStatus", {"nodeKey": "", "nodeStatus": ""}, { root: true })
                        }

                        beginContentToBlock()
                    }
                }
            }
        },
        shareBlock (state, { name, context }) {
            console.log("Execute [shareBlock] methond")

            if (users.state.currentUser.address != "" && services.state.serviceStatus == "available") {
                if (typeof state[name] != "undefined" && state[name].showBlock == true) {
                    // 判断数据拥有者中是否存在当前用户
                    // 如果存在则允许进行数据分享
                    let existCurrentUser = false
                    for (let index in state[name].users) {
                        if (users.state.currentUser.name == state[name].users[index].name) {
                            existCurrentUser = true
                            break
                        }
                    }

                    // 判断数据拥有者中是否存在另一用户
                    // 如果存在则不允许进行数据分享
                    let otherUserName = ""
                    if (users.state.currentUser.name == "userA") {
                        otherUserName = "userB"
                    } else if (users.state.currentUser.name == "userB") {
                        otherUserName = "userA"
                    }
                    let existOtherUser = false
                    for (let index in state[name].users) {
                        if (otherUserName == state[name].users[index].name) {
                            existOtherUser = true
                            break
                        }
                    }

                    if (existCurrentUser == true && existOtherUser == false) {
                        const beginShareBlock = () => {
                            console.log("Execute [shareBlock.beginShareBlock] methond");

                            (async function () {
                                const cookieKey = ("metatoc_1024show_users_" + otherUserName).toUpperCase()
                                const cookieValue = $cookies.get(cookieKey)

                                if (cookieValue == null) {
                                    if (import.meta.env.VITE_DISABLE_REQUEST_WEBSERVICE === "DISABLED") {
                                        if (typeof users.state[otherUserName] != "undefined") {
                                            const cookieKey = ("metatoc_1024show_users_" + otherUserName).toUpperCase()
                                            const cookieValue = {
                                                address: users.state[otherUserName].address,
                                                privateKey: users.state[otherUserName].private_key
                                            }
                                            if (import.meta.env.VITE_DISABLE_SETCOOKIE === "") {
                                                $cookies.set(cookieKey, cookieValue)
                                            }
                                        }

                                        endShareBlock()
                                    } else {
                                        (async function () {
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
                                                if (typeof users.state[otherUserName] != "undefined") {
                                                    const cookieKey = ("metatoc_1024show_users_" + otherUserName).toUpperCase()
                                                    const cookieValue = {
                                                        address: resData.data.address,
                                                        privateKey: resData.data.private_key
                                                    }
                                                    if (import.meta.env.VITE_DISABLE_SETCOOKIE === "") {
                                                        $cookies.set(cookieKey, cookieValue)
                                                    }
                                                }

                                                const transformRequestData = {
                                                    "from_address": users.state.currentUser.address,
                                                    "private_key": users.state.currentUser.privateKey,
                                                    "to_address": resData.data.address,
                                                    "token_name": contents.state[state.blocksToContentsMap[name]].path
                                                }

                                                resData = {}
                                                await ajax({
                                                    method: "PUT",
                                                    url: "/paths",
                                                    transformRequest: [function (data, headers) {
                                                        return JSON.stringify(transformRequestData)
                                                    }],
                                                    headers: {
                                                        "accept": "application/json",
                                                        "Content-Type": "application/json"
                                                    }
                                                }).then((res) => {
                                                    if (res.status == 200) {
                                                        resData = JSON.parse(res.data)
                                                    }
                                                }).catch((err) => {
                                                    console.error("Failed to request the post paths interface. Please check.")
                                                })
                                                if (resData.code == 0) {
                                                    endShareBlock()
                                                }
                                            }
                                        })()
                                    }
                                } else {
                                    const transformRequestData = {
                                        "from_address": users.state.currentUser.address,
                                        "private_key": users.state.currentUser.privateKey,
                                        "to_address": cookieValue.address,
                                        "token_name": contents.state[state.blocksToContentsMap[name]].path
                                    }

                                    if (import.meta.env.VITE_DISABLE_REQUEST_WEBSERVICE === "DISABLED") {
                                        endShareBlock()
                                    } else {
                                        let resData = {}
                                        await ajax({
                                            method: "PUT",
                                            url: "/paths",
                                            transformRequest: [function (data, headers) {
                                                return JSON.stringify(transformRequestData)
                                            }],
                                            headers: {
                                                "accept": "application/json",
                                                "Content-Type": "application/json"
                                            }
                                        }).then((res) => {
                                            if (res.status == 200) {
                                                resData = JSON.parse(res.data)
                                            }
                                        }).catch((err) => {
                                            console.error("Failed to request the post paths interface. Please check.")
                                        })
                                        if (resData.code == 0) {
                                            endShareBlock()
                                        }
                                    }
                                }
                            })()
                        }

                        const endShareBlock = () => {
                            console.log("Execute [shareBlock.beginShareBlock] methond")

                            const otherUser = {
                                name: users.state[otherUserName].name,
                                byName: users.state[otherUserName].byName,
                                address: users.state[otherUserName].address,
                                privateKey: users.state[otherUserName].privateKey,
                                avatar: users.state[otherUserName].avatar,
                                timestamp: moment().format("YYYY-MM-DD HH:mm:ss")
                            }
                            state[name].users.push(otherUser)

                            const cookieKey = ("metatoc_1024show_blocks_" + name).toUpperCase()
                            const cookieValue = $cookies.get(cookieKey)
                            if (cookieValue != null) {
                                if (import.meta.env.VITE_DISABLE_SETCOOKIE === "") {
                                    $cookies.set(cookieKey, {
                                        showBlock: cookieValue.showBlock,
                                        users: state[name].users
                                    })
                                }
                            }

                            const { commit } = context
                            commit("chains/changeNodeStatus", {"nodeKey": "", "nodeStatus": ""}, { root: true })
                        }

                        beginShareBlock()
                    }
                }
            }
        },
        viewTrack (state, name) {
            console.log("Execute [viewTrack] methond")

            if (users.state.currentUser.address != "" && services.state.serviceStatus == "available") {
                if (typeof state[name] != "undefined" && state[name].showBlock == true) {
                    // fake data
                    if (name == "blockA") {
                        state[name].track = {
                            "0": "a->b",
                            "1": "b->c"
                        }
                    } else if (name == "blockB") {
                        state[name].track = {
                            "0": "z->y",
                            "1": "y->x"
                        }
                    }
                }
            }
        },
        changeShow (state) {
            console.log("Execute [changeShow] methond")

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
        }
    },
    actions: {
        async contentToBlock (context, name) {
            const { commit } = context
            await commit("contentToBlock", { name, context })
        },
        async shareBlock (context, name) {
            const { commit } = context
            await commit("shareBlock", { name, context })
        }
    }
}