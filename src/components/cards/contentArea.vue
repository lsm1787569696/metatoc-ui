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
                        {{ element.content }}
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
            $store.commit("contents/contentToBlock", e.item.__draggable_context.element.name)
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
    /* background-color: rgba(45, 95, 255, .4) !important; */
}

.ghost {
    /* background-color: rgba(45, 95, 255, .4) !important; */
}


/* From www.lingdaima.com */
.card {
    --color-1: rgba(178, 12, 211, .3);
    --color-2: rgba(5, 252, 248, 0.3);
    --color-3: rgba(45, 95, 255, .4);
    background: var(--color-3);
    box-shadow: -10px -10px var(--color-1),
        15px 10px var(--color-2);
    transition: box-shadow 0.25s ease-in-out,
        transform 0.25s ease-in-out;
}

.card:hover {
    box-shadow: -10.275px -10.275px var(--color-1),
        15.4px 10.275px var(--color-2);
}
</style>
                    