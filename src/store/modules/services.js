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
            return state
        }
    },
    mutations: {
        changeServiceStatus (state, serviceStatus) {
            if (state.availableNodeNumber + state.notAvailableNodeNumber + state.fakeNodeNumber == 4) {
                if (serviceStatus == "available") {
                    // state.availableNodeNumber++
                    // state.notAvailableNodeNumber--
                    // state.fakeNodeNumber--
                } else if (serviceStatus == "notAvailable") {
                    // state.availableNodeNumber--
                    // state.notAvailableNodeNumber++
                    // state.fakeNodeNumber--
                } else if (serviceStatus == "fake") {

                }
                state.serviceStatus = serviceStatus
            }
        }
    },
    actions: {}
}