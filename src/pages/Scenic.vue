<template lang="pug">
    .scenic-container
        page-header
        .scenic-info
            h2.scenic-name
            .scenic-img
            .scenic-description
        .leave-word

</template>

<script>
import { PageHeader } from '@/components'
export default {
    data () {
        return {

        }
    },
    beforeRouteEnter  (to, from, next) {
        console.log(this)
        next()
        
    },
    components: {
        PageHeader
    },
    mounted () {
        console.log(this.$route)
    }
}
</script>

<style lang="less" scoped>
    .scenic-info {
        height: 600px;
        width: 1110px;
        background-color: #eee;
        border-radius: 4px;
        margin: 30px auto;
    }
</style>
