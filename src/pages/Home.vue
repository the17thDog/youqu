<template lang="pug">
    .home-container(v-cloak)
        page-header
        slider(
            :news_info="homeInfo.news_info"
            :news_length="news_length"
        )
        #main
            .commit
                .commit-title 热门留言
                leave-msg(:shareInfo="homeInfo.hot_msg")
            attractions(:attrs="homeInfo.attrs_info")
        PageFooter
</template>

<script>
import { PageHeader, Slider, LeaveMsg, Attractions, MsgBoard, PageFooter } from '@/components'
export default {
    name: 'home',

    components: {
        PageHeader,
        Slider,
        LeaveMsg,
        Attractions,
        MsgBoard,
        PageFooter
    },

    data () {
        return {
            homeInfo: {},
            news_length: 0
        }
    },

    async created () {
        this.getAllAttrs()
    },

    methods: {
        async getAllAttrs () {  //获取所有的景点信息
            try {
                let res = await this.$http.get('/api/home_info')
                this.homeInfo = res.data.data
                this.news_length = this.homeInfo.news_info.length
            } catch (error) {
                throw error
            }
        }   
    }
}
</script>

<style lang="less" scoped>
.home-container {
    background-color: rgb(248, 247, 247);

    [v-cloak] {
        display: none
    }
    #main {
        width: 1110px;
        margin: 0 auto;

        .commit {
            width: 800px;
            padding: 20px;
            display: inline-block;
            overflow: hidden;
            background-color: #fff;
            box-shadow: 0 0 2px rgba(39, 40, 34, .4);
            border-radius: 4px;
            vertical-align: top;
            
            .commit-title {
                height: 50px;
                color: rgb(226, 123, 111);
                font-size: 25px;
                text-indent: 10px;
                border-bottom: 2px solid rgb(197, 190, 190);
            }
        }
    }
}
</style>
