// 定义“小明”和“小红”两个人
const state = {
    'xiaoming': {
        'address': '',
        'private_key': '',
        'content': {}
    },
    'xiaohong': {
        'address': '',
        'private_key': '',
        'content': {}
    }
}

const getter = {
    xiaoming(state) {
        return state.xiaoming
    },
    xiaohong(state) {
        return state.xiaohong
    }
}

const mutation = {
    setXiaoMingContent(state, content) {
        state.xiaoming.content = content
    },
    setXiaoHongContent(state, content) {
        state.xiaohong.content = content
    }
}

export default {
    state,
    getter,
    mutation
}