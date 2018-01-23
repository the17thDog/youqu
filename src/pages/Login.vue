<template lang="pug">
    .container
        .cover
        .sign-container
            .sign-header     
                h1.sign-header-logo  游趣
                .sign-header-slogan 旅游乐趣, &nbsp;历久弥新
            transition(name='sign')
                .sign-inner
                    sign-in.animated.zoomInUp(v-if="signType== 'signIn'")
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
                this.type = '登陆'
            }else {
                this.signType = 'signUp'
                this.type = '注册'
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
.cover {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .3);
    // background: url('https://static.zhihu.com/heifetz/bg.8ca8122d44fc9a0f7b04.png');
    // background-repeat: no-repeat;
    // background-size: cover;
    // overflow: auto;
    z-index: -1;
    
}
.sign-container {
    width: 298px;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 100px;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    text-align: center;
    .sign-header-logo {
        padding-top: 30px;
        font-size: 35px;
        color: #668aac;
        font-weight: 100;
    }
    .sign-header-slogan {
        margin-top: 5px;
        font-size: 20px;
    }
    .sign-switch {
        color: #1a1a1a;
        height: 30px;
        background-color: #f6f6f6;
    }
}

    
</style>

