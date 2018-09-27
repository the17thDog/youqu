<template lang="pug">
    .scenic-container
        page-header
        .scenic-info
            .detail
                h2.scenic-name {{ scenicInfo.name }}
                .scenic-img
                    img.main-img(:src="scenicInfo.pictrue[0]")
                    .smaller
                        img.smaller-img(:src="scenicInfo.pictrue[1]")
                        img.smaller-img(:src="scenicInfo.pictrue[2]")
                .scenic-summary {{ scenicInfo.summary }}
            scenic-chart
        .leave-word
            .lw-title 旅游分享区
            .commit
                LeaveMsg(:shareInfo="shareInfo")
        msg-board(
            :s_id="s_id"
            :scenicName="scenicInfo.name"
            @upload="upload()"
        )
</template>

<script>
import { PageHeader, ScenicChart, LeaveMsg, MsgBoard } from '@/components'
export default {
    components: {
        PageHeader,
        ScenicChart,
        LeaveMsg,
        MsgBoard,
    },
    data () {
        return {
            scenicInfo: {
                pictrue: new Array(3)
            },
            shareInfo: [],
            s_id: ''
        }
    },
    created () {
        this.init()
    },
    methods: {
        async init () {
            let scenic_id = this.$route.params.id
            let res = await this.$http.get(`/api/scenic/${scenic_id}`)
            
            this.s_id = res.data.scenicInfo._id
            this.scenicInfo = res.data.scenicInfo
            this.shareInfo = res.data.shareInfo
        },
        upload () {
            this.init()
        }
    }
}
</script>

<style lang="less" scoped>
.scenic-container {
    background-color: rgb(248, 247, 247);

    .scenic-info {
        width: 1110px;
        background-color: #fff;
        border-radius: 4px;
        padding: 10px;
        margin: 30px auto 70px auto;
        box-shadow: 0 0 2px rgba(39, 40, 34, .2);
        border-bottom: 1px solid #eee;
        .detail {
            padding: 20px;
            background-color: rgb(248, 247, 247);

            .scenic-img {
                margin: 30px 0;
                display: flex;
                justify-content: space-between;

                .main-img {
                    height: 370px;
                    width: 720px;
                    flex: none;
                }
                .smaller {
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                    .smaller-img {
                        width: 325px;
                        height: 183px;
                    }
                }
                
            }
            .scenic-name {
                padding: 10px;
                color: rgb(55, 163, 86);
                border-bottom: 2px solid rgb(197, 190, 190);
            }
            .scenic-summary {
                padding: 0 10px;
                text-indent: 30px;
            }
        }
    }
    .leave-word {
        width: 1110px;
        margin: 40px auto;
        background-color: #fff;
        padding: 40px;
        box-shadow: 0 0 2px rgba(39, 40, 34, .2);
        border-bottom: 1px solid #eee;
        border-radius: 4px;
        .lw-title {
            height: 50px;
            color: rgb(226, 123, 111);
            font-size: 25px;
            text-indent: 10px;
            border-bottom: 2px solid rgb(197, 190, 190);
        }
        .commit {
            width: 800px;
            padding: 20px;
            margin: 0 auto;
            background-color: #fff;

        }
    }
}
    
</style>
