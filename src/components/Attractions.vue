<template lang="pug">
    .attractions
        .attr-title 所有景点
        ul
            li(v-for="(item, index) in attrs" :key="index")
                img.attr-img(:src="item.img" @click="goScenic(item.id)")
                .attr-name {{ item.name }}
</template>

<script>
export default {
    name: 'attractions',

    props : {
        attrs: Array
    },

    data () {
        return {

        }
    },

    methods: {
        goScenic (id) {
            const { href } = this.$router.resolve({
                name: `scenicId`,
                params: { id }
            })
            window.open(href, '_blank')
        }
    }
}
</script>

<style lang="less" scoped>
    .attractions {
        width: 290px;
        padding: 20px 8px;
        margin-left: 20px;
        box-shadow: 0 0 2px rgba(39, 40, 34, .4);
        background-color: #fff;
        border-radius: 4px;
        display: inline-block;
        overflow: hidden;

        .attr-title {
            height: 50px;
            color: rgb(55, 163, 86);
            font-size: 25px;
            text-indent: 10px;
            border-bottom: 2px solid rgb(197, 190, 190);
        }
        ul {
            font-size: 0;
            margin-top: 10px;
            li {
                display: inline-block;
                width: 130px;
                background-color: rgb(248, 247, 247);
                border-radius: 2px;
                margin: 5px 3px;
                border: 1px solid #eee;
                border-radius: 2px;

                .attr-img {
                    height: 98px;
                    width: 124px;
                    margin: 2px;
                    border-radius: 2px;
                    cursor: pointer;
                }
                .attr-name {
                    font-size: 14px;
                    height: 24px;
                    line-height: 24px;
                    text-align: center;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    padding: 0 5px;
                }
            }
        }
    }
</style>

