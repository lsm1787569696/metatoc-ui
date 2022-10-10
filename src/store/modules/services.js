import chains from "./chains"

export default {
    // 设置私有命名空间
    namespaced: true,
    state: {
        serviceStatus: "available", // available, notAvailable, fake
        availableNodeNumber: 4,
        notAvailableNodeNumber: 0,
        fakeNodeNumber: 0
    },
    getters: {
        getAllServicesInfo (state) {
            let availableNodeNumber = 0
            let notAvailableNodeNumber = 0
            let fakeNodeNumber = 0
            for (let key in chains.state) {
                if (chains.state[key].nodeStatus == "available") {
                    availableNodeNumber++
                } else if (chains.state[key].nodeStatus == "notAvailable") {
                    notAvailableNodeNumber++
                } else if (chains.state[key].nodeStatus == "fake") {
                    fakeNodeNumber++
                }
            }
            if (availableNodeNumber <= 2) {
                state.serviceStatus = "notAvailable"
            }
            state.availableNodeNumber = availableNodeNumber
            state.notAvailableNodeNumber = notAvailableNodeNumber
            state.fakeNodeNumber = fakeNodeNumber
            return state
        }
    },
    mutations: {
        refreshServices (state) {
            let availableNodeNumber = 0
            let notAvailableNodeNumber = 0
            let fakeNodeNumber = 0
            for (let key in chains.state) {
                if (chains.state[key].nodeStatus == "available") {
                    availableNodeNumber++
                } else if (chains.state[key].nodeStatus == "notAvailable") {
                    notAvailableNodeNumber++
                } else if (chains.state[key].nodeStatus == "fake") {
                    fakeNodeNumber++
                }
            }
            if (availableNodeNumber <= 2) {
                state.serviceStatus = "notAvailable"
            } else {
                state.serviceStatus = "available"
            }
            state.availableNodeNumber = availableNodeNumber
            state.notAvailableNodeNumber = notAvailableNodeNumber
            state.fakeNodeNumber = fakeNodeNumber
        }
    },
    actions: {}
}