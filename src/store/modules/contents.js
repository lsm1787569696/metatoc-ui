import users from "./users"
import blocks from "./blocks"
import chains from "./chains"
import services from "./services"

export default {
    // 设置私有命名空间
    namespaced: true,
    state: {
        contentA: {
            name: "contentA",
            content: "Hello",
            fakeContent: "Welcome",
            path: "/metatoc/1024show/contentA/" + Date.now(),
            drag: true
        },
        contentB: {
            name: "contentB",
            content: "World",
            fakeContent: "1024show",
            path: "/metatoc/1024show/contentB/" + Date.now(),
            drag: true
        }
    },
    getters: {
        // getContentAInfo (state) {
        //     return state.contentA
        // },
        // getContentBInfo (state) {
        //     return state.contentB
        // },
        getAllContentsInfo (state) {
            const allContets = []

            const handleContents = (name) => {
                let cookieKey, cookieValue
                cookieKey = ("metatoc_1024show_contents_" + name).toUpperCase()
                cookieValue = $cookies.get(cookieKey)
                if (cookieValue != null) {
                    state[name].path = cookieValue.path
                    state[name].drag = cookieValue.drag
                } else {
                    state[name].path = "/metatoc/1024show/" + name + "/" + Date.now()
                    state[name].drag = true
                    $cookies.set(cookieKey, {
                        path: state[name].path,
                        drag: state[name].drag
                    })
                }
                allContets.push(state[name])
            }

            // handle contentA
            handleContents("contentA")
            // handle contentB
            handleContents("contentB")

            return allContets
        }
    },
    mutations: {
        refreshContents (state, name) {
            if (typeof name == "undefined") {
                let cookieKey
                cookieKey = ("metatoc_1024show_contents_contentA").toUpperCase()
                $cookies.remove(cookieKey)
                cookieKey = ("metatoc_1024show_contents_contentB").toUpperCase()
                $cookies.remove(cookieKey)
            }
        },
        contentToBlock (state, name) {
            console.log("Execute [contents.contentToBlock] methond")
            console.log("users.state.currentUser.address:", users.state.currentUser.address)
            console.log("services.state.serviceStatus:", services.state.serviceStatus)
            if (users.state.currentUser.address != "" && services.state.serviceStatus == "available") {
                console.log("state[name].drag:", state[name].drag)
                if (typeof state[name] != "undefined" && state[name].drag == true) {
                    state[name].drag = false

                    const cookieKey = ("metatoc_1024show_contents_" + name).toUpperCase()
                    const cookieValue = $cookies.get(cookieKey)
                    if (cookieValue != null) {
                        $cookies.set(cookieKey, {
                            path: cookieValue.path,
                            drag: false
                        })
                    }
                }
            }
        }
    }
}