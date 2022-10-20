<template>
    <el-card class="common-cards">
        <div class="imgBox">
            <div v-for="item in classList" :key="item.id" :class="item.isCheck ? 'backStyle' : 'backStyle1'"
                class="headPortrait" @click="changeList(item.id,item.isCheck,item.title)">
                <div class="imgTitle">{{item.title}}</div>
                <img :src="item.coverImg" alt="">
            </div>
        </div>
    </el-card>
</template>

<script >
import { reactive, onMounted, computed } from "vue";
import emitter from "../../utils/mitt";
import { useStore } from 'vuex'

export default {
    setup() {
        const $store = useStore()
        let classList = reactive([
            {
                isCheck: true,
                id: "001",
                coverImg: "src/assets/man.png",
                title: $store.state.users.userA.name
            },
            {
                isCheck: false,
                id: "002",
                coverImg: "src/assets/woman.png",
                title: $store.state.users.userB.name
            },
        ]);
        let nowUser = reactive({
            user: ''
        })

        onMounted(() => {
            $store.state.users.userA.headPortrait = '../../assets/man.png'
            $store.state.users.userB.headPortrait = '../../assets/man.png'
        })

        let userCheck = reactive({
            isCheck: ''
        })

        onMounted(() => {
            $store.commit("users/swithCurrentUser", 'userA')
            emitter.emit('isCheck', 'userA')
        })



        // 两个头像点击切换效果
        function changeList(id, isCheck, title) {
            if (isCheck == true) {
                return
            } else {
                for (let index in classList) {
                    classList[index].isCheck = !classList[index].isCheck
                }
            }
            $store.commit("users/swithCurrentUser", title)
            // 切换用户时更新区块数据是否显示
            $store.commit("blocks/changeShow", "")
            // 切换用户时更新链上节点数据是否显示
            $store.commit("chains/changeNodeStatus", { nodeKey: "", nodeStatus: "" })
            emitter.emit('isCheck', title)
        }

        return {
            changeList,
            classList,
            $store,
        }
    }
}

</script>

<style scoped>
.common-cards {
    margin-top: 12px;
    margin-right: 45px;
    padding: 3px 15px;
    display: flex;
    justify-content: center;
    align-content: center;
    border-radius: 10px;
    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    background: #f5f7fb;
    height: 194px;
}

img {
    width: 60px;
    height: 60px;
    padding: 0 30px;
}

.headPortrait {
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 10px;
}

.backStyle {
    /* border-radius: 22px;
    background: rgba(144, 147, 153, .3);
    box-shadow: 1px 1px 34px #3c3e40,
        1px 1px 34px #e4e8f2; */
    background-color: #fff;
    border-radius: 24px;
    border-style: none;
    box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0;
    box-sizing: border-box;
    color: #3c4043;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
    letter-spacing: .25px;
    line-height: normal;
    padding: 11px 24px;
    transition: background box-shadow 280ms ease;
}

.imgBox {
    display: flex;
}

.imgTitle {
    text-align: center;
    font-weight: 700;
    margin-bottom: 10px;
}
</style>
