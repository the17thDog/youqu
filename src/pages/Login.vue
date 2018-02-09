<template lang="pug">
    .container
        .cover
        .sign-tips
            //- p 欢迎来到武陵源
            //- p 你可以在武陵游趣上分享你弥足珍贵的回忆 !
        .sign-container
            .sign-header     
                h1.sign-header-logo  游趣
                .sign-header-slogan 旅游乐趣, &nbsp;历久弥新
            transition(name='sign')
                .sign-inner
                    //- loading
                    sign-in.animated.fadeIn(
                        v-if="signType== 'signIn'")
                    sign-up.animated.fadeIn(v-else gouzi='bens' bens='gouzi')
                    .sign-switch {{ tipMsg }}
                        span(@click='changeType') {{ type }}
</template>

<script>

import { SignIn, SignUp, Loading } from '@/components'
export default {
    data () {
        return {
            tipMsg: '没有账号？',
            signType: 'signIn',
            type: '注册'
        }
    },
    methods: {
        changeType () {
            if (this.signType == 'signUp') {
                this.tipMsg = '没有账号? '
                this.signType = 'signIn'
                this.type = '注册'
            }else {
                this.tipMsg =  '已有账号? ',
                this.signType = 'signUp'
                this.type = '登录'
            }
        }
    },
    components: {
        SignIn,
        SignUp,
        Loading
    },
    created () {
        eventBus.$on('toSignIn', () => {
            this.tipMsg = '没有账号? '
            this.signType = 'signIn'
            this.type = '登录'
        })
    },
    beforeDestroy () {
        eventBus.$off('toSignIn')
    }
}
</script>

<style lang="less" scoped>
.container {
    width: 1110px;
    height: 600px;
    position: relative;
    margin: 0 auto;
   .cover {
        position: fixed;
        background-color: rgba(0, 0, 0, .5);
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        // background: url('https://static.zhihu.com/heifetz/bg.8ca8122d44fc9a0f7b04.png');
        background-repeat: no-repeat;
        background-size: cover;
        overflow: auto;
        z-index: -1;
    }
    .sign-tips {
        position: relative;
        top: 35%;
        left: 0%;
        font-size: 30px;
        color: #fff;
    }
    .sign-container {
        width: 302px;
        position: absolute;
        top: 25%;
        left: 70%;
        // box-shadow: 0 1px 3px rgba(26,26,26,.1);
        text-align: left;
        .sign-header {
            padding: 10px 0;
            background-color: #fff;
            border-radius: 2px;
            border: 1px solid rgba(0, 0, 0, .1);
            text-indent: 10%;
            .sign-header-logo {
                font-size: 28px;
                color: #668aac;
                font-weight: 100;
            }
            .sign-header-slogan {
                margin-top: 5px;
                font-size: 16px;
                color: rgb(59, 122, 77)
            } 
        }
        .sign-inner {
            background-color: rgb(243, 240, 240);
            border-radius: 2px;
            position: relative;
            .sign-switch {
                text-align: center;
                font-size: 14px;
                height: 30px;
                border-top: 1px solid #ddd;
                line-height: 30px;
                span {
                    color: #668aac;
                    cursor: pointer;
                }
                span:hover {
                    color: #666;
                }
            }
        }
    } 
}

    
</style>

