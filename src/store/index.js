import vuex from 'vuex'
import block from './modules/block'
import chain from './modules/chain'
import content from './modules/content'
import service from './modules/service'
import user from './modules/user'

export default new vuex.Store({
    modules: {
        block,
        chain,
        content,
        service,
        user
    }
})