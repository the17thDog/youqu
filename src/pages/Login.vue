<template lang="pug">
    .container
        .cover
        .sign-container
            .sign-header     
                h1.sign-header-logo  武陵游趣
                .sign-header-slogan 旅游乐趣, &nbsp;历久弥新
            .sign-inner
                sign-in
                    
</template>

<script>

import { SignIn, SignUp } from '@/components'
export default {
    components: {
        SignIn,
        SignUp
    },
    mounted () {
        // console.log(a)
    }
}
</script>

<style lang="less" scoped>
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
    .sign-container {
        width: 302px;
        margin: 0 auto;
        margin-top: 120px;
        // box-shadow: 0 1px 3px rgba(26,26,26,.1);
        text-align: left;
        text-indent: 10%;
        .sign-header {
            padding: 10px 0;
            background-color: #fff;
            border-radius: 2px;
            border: 1px solid rgba(0, 0, 0, .1);
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
        }
    }
</style>

