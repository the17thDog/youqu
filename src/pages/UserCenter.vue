<template lang="pug">
    .user-container
        .user-header
            h1 {{ userInfo.username }} 的个人中心
        .main
            .menu
                .user-info(@click="toInfo" :class="{active: contentType == 'info'}") 个人信息
                .user-share(@click="toShare(userInfo.u_id)" :class="{active: contentType == 'share'}") 旅游分享
            .content
                .info.animated.fadeIn(
                    v-if="contentType == 'info'"
                    )
                    .picture
                        img.head-pic(src="../../static/caoyi.png")
                        input.select(type="file" value="选择头像")
                    .nick-name
                        .title 昵称 :
                        input.nickname
                    .modify 修改
                .share.animated.pulse(v-else)
                    leave-msg(:shareInfo="commits")
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { LeaveMsg } from '@/components'
export default {
    name: 'userCenter',
    components: {
        LeaveMsg
    },
    data () {
        return {
            contentType: 'info',
            commits: []
        }
    },
    computed: {
        ...mapState(['userInfo'])
    },
    created () {
        this.fetchUserInfo()
    },
    methods: {
        ...mapActions(['fetchUserInfo']),
        toInfo () {
            this.contentType = 'info'
        },
        async toShare (u_id) {
            this.contentType = 'share'
            try {
                let res = await this.$http.get(`/api/commit?id=${u_id}`) 
                this.commits = res.data.data.commits
                console.log(this.commits)
            } catch (error) {
                throw error
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .user-container {
        .active {
            border: 2px solid #aaa;
        }
        .user-header {
            height: 50px;
            margin-bottom: 20px;
            background-color: #eee;
            
            h1 {
                height: 50px;
                width: 1110px;
                margin: 0 auto;
                line-height: 50px;
                font-size: 20px;
                color: #668aac;
            }
        }
        .main {
            display: flex;
            width: 1110px;
            min-height: 800px;
            margin: 0 auto;
            border-radius: 6px;
            background-color: #eee;
            padding: 20px;

            .menu {
                height: 200px;
                width: 200px;
                background-color: #F1D1A8;
                border-radius: 6px;
                font-size: 18px;
                padding: 40px 20px;
                margin-right: 20px;

                .user-info, .user-share {
                    background-color: #fff;
                    border-radius: 4px;
                    margin-bottom: 20px;
                    padding: 5px 10px;
                    color: #666;
                    cursor: pointer;
                    transition: .3s;
                }
                .user-info:hover, .user-share:hover {
                    color: #fff;
                    background-color:rgb(115, 172, 131);
                }
            }
            .content {
                position: relative;
                flex: 1;
                min-height: 760px;
                background-color: #fff;
                padding: 40px 60px;
                border-radius: 6px;
                box-shadow: 0 0 4px rgba(0, 0, 0, .3);
                color: #666;

                .info {
                    .picture {
                        margin-bottom: 30px;
                        padding: 10px;
                        background-color: rgb(248, 247, 247);
                        border-radius: 4px;

                        .head-pic {
                            height: 100px;;
                            width: 100px;
                            border-radius: 50%;
                            background-color: salmon;
                            margin-right: 25px;
                        }
                        .select {
                            padding: 5px 10px;
                            border-radius: 4px;
                            cursor: pointer;
                            color: #aaa;
                            
                        }
                        // .select:hover {
                        //     color: #fff;
                        //     background-color: #666;
                        // }

                    }
                    
                }
                .nick-name {
                    display: flex;
                    align-items: center;
                    .title {
                        font-size: 18px;
                        color: #666;
                        margin-right: 30px;
                    }
                    .nickname {
                        border: 1px solid #999;
                        height: 40px;
                        width: 400px;
                        border-radius: 6px;
                        padding-left: 10px;
                        font-size: 16px;
                        color: #668aac;
                    }
                }
                .modify {
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: #668aac;
                    padding: 10px 20px;
                    border-radius: 4px;
                    cursor: pointer;
                    color: #fff;
                }
                .modify:hover {
                    background-color: #4d6d8b
                }
            }
        }
    }
</style>