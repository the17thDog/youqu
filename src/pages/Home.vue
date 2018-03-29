<template lang="pug">
    .home-container
        page-header
        slider
        #main
            hot-msg
            attractions
        MsgBoard
</template>

<script>
import { PageHeader, Slider, HotMsg, Attractions, MsgBoard } from '@/components'
export default {
    data () {
        return {
            
        }
    },
    components: {
        PageHeader,
        Slider,
        HotMsg,
        Attractions,
        MsgBoard
    }
}
</script>

<style lang="less" scoped>
    .home-container {
        background-color: #f6f6f6;

        #main {
            width: 1110px;
            margin: 0 auto;
        }
    }
</style>
