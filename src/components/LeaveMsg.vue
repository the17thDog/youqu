<template lang="pug">
    .commit-con
        .commit-info.animated.fadeIn(
            v-if="shareInfo.length"
            v-for="(item, index) in shareInfo"
            :key="index"
            )
            img.user-pic(v-if="item.userpic" :src="item.userpic")
            .user-name(v-if="item.username") {{ item.username }}
            .evaluation
                span.star.iconfont.icon-star(v-for="starItem in item.score")
            .scenicName(v-if="item.scenicName") {{item.scenicName}}
            .praise.iconfont.icon-zan(@click='like(u_id, item.c_id, item.like)')
                .likeNum {{ item.like }}
            .content(:class="{ flex: !item.username}")
                .content-text {{ item.content }}
                .content-date {{ item.date | sliceTime }}
                .del 删除
                
        .nothing(v-if="!shareInfo.length")
            img(src="../../static/nothing.png")
            .nothing-tip 这里啥也木有 ~
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'leaveMsg',
    props: {
        shareInfo: {
            type: Array,
            default () {
                return []
            }
        }
    },
    computed: {
        ...mapGetters(['u_id']),
    },
    filters: {
        sliceTime (val) {
            return val.slice(0, 10)
        }
    },
    methods: {
        async like(u_id, c_id, likeNum) {  //传入user_id, commit_id
            if (!u_id){
                alert('登录后才能点赞哦！')
                return
            }
            let res = await this.$http.post('/api/like', { u_id, c_id })
            likeNum++
        }
    },
    mounted () {
        setTimeout(() => {
            console.log(this.shareInfo)
        }, 2000)
    }
}
</script>

<style lang="less" scoped>
.flex {
    margin-left: 10px !important;
}
.commit-info {
    background-color: #eee;
    margin: 20px 0;
    border-radius: 4px;
    padding: 10px;

    .user-pic {
        float: left;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-color: #fff;
    }
    .user-name {
        display: inline-block;
        color: #1a1a1a;
        height: 25px;
        background-color: #fff;
        margin: 0 20px;
        font-size: 14px;
        padding: 0 10px;
        line-height: 25px;
        border-radius: 4px;
        vertical-align: top;
    }
    .evaluation {
        display: inline-block;
        color: rgb(231, 116, 135);
        height: 25px;
        vertical-align: top;
        .star {
            font-size: 25px;
        }
    }
    .scenicName {
        display: inline-block;
        height: 25px;
        vertical-align: top;
        line-height: 25px;
        color: #fff;
        background-color: rgb(55, 163, 86);
        padding: 0 10px;
        border-radius: 4px;
        margin-left: 20px;
    }
    .praise {
        float: right;
        height: 30px;
        width: 30px;
        text-align: center;
        font-size: 22px;
        color: #666;
        cursor: pointer;
        .likeNum {
            font-size: 14px;
            margin-top: 5px;
        }
    }
    .content {
        background-color: #fff;
        border-radius: 4px;
        margin: 10px 40px 10px 70px;

        .content-text {
            padding: 20px;
            min-height: 180px;

        }
        .content-date {
            text-align: right;
            padding-right: 30px;
            color: #999;
            font-size: 14px;
            padding: 10px;
        }
        .del {
            height: 40px;
            width: 60px;
            background-color: salmon;
            border-radius: 4px; 
            line-height: 40px;
            text-align: center;
            position: relative;
            float: left;
            top: -50px;
            left: 10px;
        }
    }
}
.nothing {
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .nothing-tip {
        font-size: 20px;
        color: #666;
        margin-top: 30px;
        letter-spacing: 3px;
    }
}
</style>
