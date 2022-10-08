<template>
    <el-card class="common-cards card" style="margin-right:45px">
        <div class="flex ">
            <div class="imgContainer">
                <div class="headerTitle">
                    需上链数据
                </div>
            </div>
            <draggable :list="arr1" :force-fallback="true" animation="300" :group="groupA" :sort="false"
                @remove="moveSuccess" @start="startDraggable" filter=".undraggable" chosenClass="chosen">
                <template #item="{ element , index}">
                    <div :class="element.drag ? 'draggable' : 'undraggable'" class="content1 flex" :id="index">
                        {{ element.name }}
                    </div>
                </template>
            </draggable>
        </div>
    </el-card>
</template>
                    
<script setup>
import draggable from 'vuedraggable'
import { reactive, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import emitter from '../../utils/mitt';
const $store = useStore()
const amount = ref('');
// 展示数据
const arr1 = reactive([
    {
        id: 0, name: $store.state.contents.contentA.name, content: $store.state.contents.contentA.content, src: 'src/assets/man.png', src1: 'src/assets/woman.png', className: 'contentClass1', drag: $store.state.contents.contentA.drag,
        button: `<el-button class="el-button" type="success" @click="share">分享</el-button>`
    },
    { id: 1, name: $store.state.contents.contentB.name, content: $store.state.contents.contentB.content, src: 'src/assets/man.png', src1: 'src/assets/woman.png', className: 'contentClass2', drag: $store.state.contents.contentB.drag },
])

// 拖拽数据
const groupA = reactive({
    name: 'itxst',
    pull: 'clone',
    put: false,
})



//  拖拽成功后禁止拖拽
const moveSuccess = (e) => {
    for (let index in arr1) {
        if (arr1[index].id == e.oldDraggableIndex) {
            arr1[index].drag = !arr1[index].drag
            $store.commit("contents/contentToBlock", e.item.innerHTML)
        } else { }
    }

    if ($store.state.users.currentUser.name == 'userA') {
        e.item.__draggable_context.element.src1 = ''
    } else if ($store.state.users.currentUser.name == 'userB') {
        e.item.__draggable_context.element.src = ''
    }

}

// 开始拖动时判断用户
// const startDraggable = (e) => {
//     emitter.on('isCheck', (res) => {
//         if (res == 'userA') {
//             e.item.__draggable_context.element.src1 = ''
//         } else if (res == 'userB') {
//             e.item.__draggable_context.element.src = ''
//         }
//     });
// }

</script>
                    
<style scoped>
.common-cards {
    margin-top: 12px;
    margin-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
    height: 610px;
}

.flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column
}

img {
    width: 50px;
    height: 50px;
    cursor: pointer;
    margin: 0 20px;
}

.content1 {
    margin-top: 20px;
    border: 1px solid black;
    width: 300px;
    height: 150px;
}

.chosen {
    background-color: #000 !important;
    color: #fff;
}

.ghost {
    background-color: red !important;
}

.card {
    --border-radius: 15px;
    --border-width: 4px;
    appearance: none;
    position: relative;
    padding: 1em 2em;
    border: 0;
    background: rgba(45, 95, 255, .2);
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    z-index: 2;
    border-radius: 15px;
}

.card::after {
    --m-i: linear-gradient(#000, #000);
    --m-o: content-box, padding-box;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: var(--border-width);
    border-radius: var(--border-radius);
    background-image: conic-gradient(#488cfb,
            #29dbbc,
            #ddf505,
            #ff9f0e,
            #e440bb,
            #655adc,
            #488cfb);
    -webkit-mask-image: var(--m-i), var(--m-i);
    mask-image: var(--m-i), var(--m-i);
    -webkit-mask-origin: var(--m-o);
    mask-origin: var(--m-o);
    -webkit-mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    filter: hue-rotate(0);
    animation: rotate-hue linear 500ms infinite;
    animation-play-state: paused;
}

.card:hover::after {
    animation-play-state: running;
}

@keyframes rotate-hue {
    to {
        filter: hue-rotate(1turn);
    }
}

.card,
.card::after {
    box-sizing: border-box;
}

.card:active {
    --border-width: 5px;
}
</style>
                    