import { createStore } from 'vuex'
// 导入区块数据模块（演示右上角区域）
import blocks from './modules/blocks'
// 导入区块链模块（演示右下角区域）
import chains from './modules/chains'
// 导入数据模块（演示左下角区域）
import contents from './modules/contents'
// 导入服务模块（演示右侧中间区域）
import services from './modules/services'
// 导入用户模板（演示左上角区域）
import users from './modules/users'

let store = createStore({
    modules: {
        blocks,
        chains,
        contents,
        services,
        users
    }
})

export default store