import users from "./users"
import services from "./services"

export default {
    // 设置私有命名空间
    namespaced: true,
    state: {
        contentA: {
            name: "contentA",
            content: "Mankind was born on Earth.",
            fakeContent: "Welcome",
            path: "",
            drag: true
        },
        contentB: {
            name: "contentB",
            content: "It was never meant to die here.",
            fakeContent: "1024show",
            path: "",
            drag: true
        }
    },
    getters: {
        getAllContentsInfo (state) {
            console.log("Execute [getAllContentsInfo] methond")

            const allContets = []

            const handleContents = (name) => {
                const cookieKey = ("metatoc_1024show_contents_" + name).toUpperCase()
                const cookieValue = $cookies.get(cookieKey)

                if (cookieValue == null) {
                    state[name].path = "/metatoc/1024show/" + name + "/" + Date.now()
                    state[name].drag = true
                    // $cookies.set(cookieKey, {
                    //     path: state[name].path,
                    //     drag: state[name].drag
                    // })
                } else {
                    state[name].path = cookieValue.path
                    state[name].drag = cookieValue.drag
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

            if (users.state.currentUser.address != "" && services.state.serviceStatus == "available") {
                if (typeof state[name] != "undefined" && state[name].drag == true) {
                    state[name].drag = false

                    const cookieKey = ("metatoc_1024show_contents_" + name).toUpperCase()
                    const cookieValue = $cookies.get(cookieKey)
                    if (cookieValue != null) {
                        // $cookies.set(cookieKey, {
                        //     path: cookieValue.path,
                        //     drag: false
                        // })
                    }
                }
            }
        }
    }
}