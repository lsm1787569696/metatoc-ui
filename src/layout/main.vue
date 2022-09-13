<template>
    <div class="main">
        <t-top></t-top>
        <t-bottom></t-bottom>
    </div>
</template>

<style scoped>
.main {
    background: #f5f7fb;
}
</style>

<script>
import top from './main/top.vue'
import bottom from './main/bottom.vue'

export default {
    setup() {
        return {}
    },
    components: {
        tTop: top,
        tBottom: bottom
    }
}
</script>