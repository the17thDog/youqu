<template lang="pug">
    .attractions
        ul
            li(
                v-for="(item, index) in attractionsList"
            )
</template>

<script>
export default {
    data () {
        return {
            attractionsList: new Array(10).fill(1)
        }
    }
}
</script>

<style lang="less" scoped>
    .attractions {
        width: 280px;
        height: 1000px;
        padding: 12px;
        margin-left: 30px;
        box-shadow: 0 0 2px rgba(39, 40, 34, .4);
        border-radius: 4px;
        display: inline-block;
        overflow: hidden;
        background-color: rgb(248, 247, 247);
        
        ul {
            font-size: 0;
            li {
                display: inline-block;
                height: 130px;
                width: 120px;
                background-color: rgb(248, 247, 247);
                border-radius: 2px;
                margin: 5px 3px;
            }
        }
    }
</style>

