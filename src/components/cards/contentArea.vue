<template>
    <el-card class="common-cards card" style="margin-right:45px">
        <div class="flex ">
            <div class="imgContainer">
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

            let blockName = ""
            if (e.item.__draggable_context.element.name == "contentA") {
                blockName = "blockA"
            } else {
                blockName = "blockB"
            }

            $store.commit("contents/contentToBlock", e.item.__draggable_context.element.name)
            $store.commit("blocks/contentToBlock", blockName)
            $store.commit("blocks/changeShow", blockName)

            $store.commit("chains/changeNodeStatus", { nodeKey: "", nodeStatus: "" })
            $store.commit("services/refreshServices")
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
    margin-top: 20px;
    margin-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
    height: 700px;
    border-radius: 10px;
    background: #f5f7fb;
    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
}

.flex {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column
}

.content1 {
    margin: 20px 20px 0 20px;
    margin-top: 80px;
    width: 240px;
    height: 150px;
    border-radius: 5px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    background: #fff;
}
</style>
                    