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
}

.backStyle {
    border-radius: 50px;
    /* background: linear-gradient(145deg, #f0f0f0, #cacaca); */
    background: #e0e0e0;
    /* background: rgb(2, 0, 36); */
    background: linear-gradient(90deg, rgba(2, 0, 36, .4) 0%, rgba(45, 95, 255, .4) 31%, rgba(8, 41, 142, .4) 63%, rgba(0, 212, 255, .4) 100%);
    box-shadow: 20px 20px 40px rgba(45, 95, 255, .5),
        -20px -20px 40px #ffffff;
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
