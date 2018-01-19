<template lang="pug">
    .login-content
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
        height: 40px;
        width: 90%;
        margin: 40px auto;
        border-bottom: 1px solid #eee;
    }
    .login-content {
        padding-top: 30px;
        height: 310px;
        width: 300px;
        margin: 10px auto;
    }
</style>

