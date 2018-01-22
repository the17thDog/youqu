<template lang="pug">
    .login-content
        .login-tips 登录
        form(method='post' accept-charset="UTF-8")
            input(type='text' name='username' placeholder='请输入' class='username')
            input(type='password' name='password' placeholder='请输入' class='password')
        
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
        async submitData() {
        let msg = await this.$http.post('/api/', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
        
        console.log(msg)
        }
    }
}
</script>

<style lang="less" scoped>
    input {
        display: block;
        height: 30px;
        width: 90%;
        padding-left: 10px;
        border-radius: 2px;
        margin: 20px auto;
        border: 1px solid rgba(0, 0, 0, .2);
    }
    .login-content {
        height: 310px;
        width: 280px;
        margin: 20px auto;
        padding: 10px 0;
        .login-tips {
            text-align: left;
            font-size: 22px;
            font-weight: 500;
        }
    }
</style>

