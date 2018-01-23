<template lang="pug">
    .login-content
        .login-tips 登录
        form(method='post' accept-charset="UTF-8")
            input.sign-in-username(type='text' name='username' placeholder='请输入您的用户名')
            input.sign-in-password(type='password' name='password' placeholder='请输入您的密码')
            .sign-in-submit(@click='bens') 登录
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
.login-content {
    margin: 20px 0px;
    padding: 10px 20px;
    font-size: 0;
    form {
        position: relative;
    }
    input {
        display: block;
        height: 30px;
        width: 100%;
        padding-left: 10px;
        border-radius: 2px;
        margin: 20px 0px;
        border: 1px solid rgba(0, 0, 0, .2);
        font-size: 14px;
    }
    input[type=password] {
        width: 200px;
        margin: 0;
    }
    input:focus {
        border: 1px solid #668aac;
        box-shadow: 0 0 6px rgba(26,26,26,.1);
    }
    .sign-in-submit {
        position: absolute;
        background-color: #5b768f;
        width: 50px;
        height: 30px;
        color: #fff;
        font-size: 13px;
        text-align: center;
        border-radius: 4px;
        line-height: 30px;
        right: 0;
        bottom: 0;
        cursor: pointer;
    }
    .sign-in-submit:hover {
        background-color: #668aac;
    }
    .login-tips {
        text-align: left;
        font-size: 22px;
        font-weight: 500;
        text-indent: 10%;
    }
}
</style>

