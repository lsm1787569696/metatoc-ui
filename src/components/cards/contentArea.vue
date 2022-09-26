<template>
    <el-card class="common-cards" style="margin-right:45px">
        <div class="flex">
            <div class="imgContainer">
                <div class="headerTitle">
                    需上链数据
                </div>
            </div>
            <draggable :list="arr1" ghost-class="listData" :force-fallback="true" animation="300" :group="groupA"
                :sort="false" :move="moveSuccess" filter=".undraggable">
                <template #item="{ element , index}">
                    <div :class="element.canEdit ? 'draggable' : 'undraggable'" class="content1 flex">
                        {{index}}{{ element.name }}
                    </div>
                </template>
            </draggable>
        </div>
    </el-card>
</template>
                    
<script setup>
import draggable from 'vuedraggable'
import { reactive } from 'vue'
const arr1 = reactive([
    { id: 0, name: 'content1', src: 'src/assets/man.png', src1: 'src/assets/woman.png', className: 'contentClass1', canEdit: true },
    { id: 1, name: 'content2', src: 'src/assets/man.png', src1: 'src/assets/woman.png', className: 'contentClass2', canEdit: true },
])
const groupA = reactive({
    name: 'itxst',
    pull: 'clone',
    put: false,
})

//  
const moveSuccess = (e) => {
    for (let index in arr1) {
        if (arr1[index].id == e.draggedContext.index) {
            arr1[index].canEdit = !arr1[index].canEdit
        }
    }
}
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
</style>
                    