<template lang="pug">
    .container
        .cover
        .sign-tips 你可以在武陵游趣上分享你在当地弥足珍贵的回忆 !
        .sign-container
            .sign-header     
                h1.sign-header-logo  游趣
                .sign-header-slogan 旅游乐趣, &nbsp;历久弥新
            transition(name='sign')
                .sign-inner
                    sign-in.animated.swing(v-if="signType== 'signIn'")
                    sign-up.animated.fadeIn(v-else)
                    .sign-switch(@click='changeType') {{ type }}   
</template>

<script>

import { SignIn, SignUp } from '@/components'
export default {
    data () {
        return {
            signType: 'signIn',
            type: '注册'
        }
    },
    methods: {
        changeType () {
            if (this.signType == 'signUp') {
                this.signType = 'signIn'
                this.type = '注册'
            }else {
                this.signType = 'signUp'
                this.type = '登录'
            }
        }
    },
    components: {
        SignIn,
        SignUp
    },
    mounted () {
        
    }
}
</script>

<style lang="less" scoped>
@import url(../styles/animated.less);

.container {
    min-width: 1062px;
    height: 600px;
    position: relative;
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
        position: absolute;
        top: 25%;
        left: 12%;
        font-size: 30px;
        color: #fff;
    }
    .sign-container {
        width: 302px;
        position: absolute;
        top: 10%;
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
                color: rgb(110, 160, 125)
            } 
        }
        .sign-inner {
            background-color: #fff;
            border-radius: 2px;
            .sign-switch {
                text-indent: 0;
                text-align: center;
                width: 50px;
                background-color: #eee;
                height: 30px;
            }
        }
    } 
}

    
</style>

