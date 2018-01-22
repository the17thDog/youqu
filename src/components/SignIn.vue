<template lang="pug">
    .login-content
        form(method='post' accept-charset="UTF-8")
            input.sign-in-username(type='text' name='username' placeholder='请输入您的用户名')
            input.sign-in-password(type='password' name='password' placeholder='请输入您的密码')
            .sign-in-submit(value='登录' @click='bens') 登录
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        // async submitData() {
        //     let msg = await this.$http.post('/api/', {
        //         firstName: 'Fred',
        //         lastName: 'Flintstone'
        //     })
            
        //     console.log(msg)
        // },
        bens () {
            this.$router.push('/home')
        }
    }
}
</script>

<style lang="less" scoped>
    input {
        display: block;
        height: 30px;
        width: 80%;
        margin: 10px auto;
        border: 1px solid rgba(0, 0, 0, .3);
        padding-left: 10px;
        border-radius: 3px;
        font-size: 14px;
    }
    input:focus {
        border: 1px solid #668aac;
        box-shadow: 0 0px 6px rgba(26,26,26,.1);
        input::-webkit-input-placeholder{
            color: #000;
            opacity:1;
        }
    }
    input::-webkit-input-placeholder{
        color: rgb(101, 123, 149);
        opacity:1;
    }
// input:-moz-placeholder { 
// 　　color:#999;font-size:14px;
// 　　}
// input::-moz-placeholder { 
// 　　color:#999;font-size:14px;
// 　　}
// input:-ms-input-placeholder {
// 　　color:#999;font-size:14px;
// }
    .login-content {
        padding-top: 20px;
        height: 280px;
        width: 300px;
        margin: 0px auto;
    }
</style>

