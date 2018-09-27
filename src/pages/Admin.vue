<template lang="pug">
    .admin-container
        .admin-header
            h1 管理中心
        .main
            .menu
                .admin-info(@click="toInfo" :class="{active: contentType == 'user'}") 用户信息
                .admin-share(@click="toShare" :class="{active: contentType == 'share'}") 旅游分享
            .content
                .info.animated.fadeIn(
                    v-if="contentType == 'user'"
                    )
                    table
                        thead
                            tr
                                th pic
                                th id
                                th username
                                th nickname
                                th 删除
                        tbody
                            tr(
                                v-for="(user, index) in admin_info.users"
                                :key="index"
                            )
                                td
                                    img(:src="user.userpic")
                                td {{ user._id }}
                                td {{ user.username }}
                                td {{ user.nickname }}
                                td
                                    button 删除
                .share.animated.pulse(v-else)
                    leave-msg(:shareInfo="admin_info.commits")
</template>

<script>
import { LeaveMsg } from '@/components'
export default {
    name: 'adminCenter',
    components: {
        LeaveMsg
    },
    data () {
        return {
            contentType: 'user',
            admin_info: {}

        }
    },
    created () {
        this.init()
    },
    methods: {
        toInfo () {
            this.contentType = 'user'
        },
        toShare () {
            this.contentType = 'share'
        },
        async init () {
            let res = await this.$http.get('/api/admin')
            this.admin_info = res.data.data
        }
    }
}
</script>

<style lang="less" scoped>
    .admin-container {
        .active {
            border: 2px solid #aaa;
        }
        .admin-header {
            height: 50px;
            margin-bottom: 20px;
            background-color: #aaa;
            
            h1 {
                height: 50px;
                width: 1110px;
                margin: 0 auto;
                line-height: 50px;
                font-size: 20px;
                color: #fff;
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

                .admin-info, .admin-share {
                    background-color: #fff;
                    border-radius: 4px;
                    margin-bottom: 20px;
                    padding: 5px 10px;
                    color: #666;
                    cursor: pointer;
                    transition: .3s;
                }
                .admin-info:hover, .admin-share:hover {
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
                    table {
                        border-collapse:collapse;
                        th {
                            height: 40px;
                            width: 120px;
                            background-color: #eee;
                            border: 1px solid #666;
                        }
                        td {
                            height: 40px;
                            width: 120px;
                            border: 1px solid #999;
                            padding: 0 15px;
                            text-align: center;
                            img {
                                height: 30px;
                                width: 30px;
                                border-radius: 50%;
                            }
                            button {
                                width: 80px;
                                height: 28px;
                                background-color: salmon;
                                border-radius: 4px;
                                cursor: pointer;
                            }
                        }
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