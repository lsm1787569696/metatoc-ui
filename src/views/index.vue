<template>
    <t-header></t-header>
    <t-main></t-main>
    <t-footer></t-footer>
</template>

<style>

</style>

<script>
import header from '../layout/header.vue'
import main from '../layout/main.vue'
import footer from '../layout/footer.vue'

export default {
    setup() {
        return {}
    },
    components: {
        tHeader: header,
        tMain: main,
        tFooter: footer
    }
}
</script>