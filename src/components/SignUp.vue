<template lang="pug">
    .register-content
        .reg-tips 注册
        form(method='post' accept-charset="UTF-8")
            input.sign-up-username(type='text' name='username' placeholder='请输入3 - 6位的用户名, 字母与数字结合')
            input.sign-up-password(type='password' name='password' placeholder='请输入6 - 12 位的密码, 字母与数字结合')
            input.comfirm-pass(type='password' name='rePassword' placeholder='请重新输入密码')
            input.sign-up-submit(type='submit' value='注册')
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.register-content {
    margin: 20px 0 0 0;
    padding: 10px 20px;
    .reg-tips {
        text-align: left;
        font-size: 22px;
        font-weight: 500;
        text-indent: 10%;
    }
    form {
        position: relative;
        input {
            display: block;
            height: 30px;
            width: 100%;
            padding-left: 10px;
            border-radius: 2px;
            margin: 20px 0;
            border: 1px solid rgba(0, 0, 0, .2);
            font-size: 12px;
        }
        input:focus {
            border: 1px solid #668aac;
            box-shadow: 0 0 6px rgba(26,26,26,.1);
        }
    }
}
</style>

