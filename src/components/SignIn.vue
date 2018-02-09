<template lang="pug">
    .login-content
        .h2 登录
        form(method='post' accept-charset="UTF-8")
            input.sign-in-username(
                type='text'
                name='username'
                placeholder='请输入您的用户名'
                v-model='username')
            input.sign-in-password(
                type='password'
                name='password'
                placeholder='请输入您的密码'
                v-model='password')
            .sign-in-submit(@click='submitData') 登录
        //注册的提示
        .login-tips.iconfont(v-show="loginMsg !== ''" :class="[ isSuccess? 'icon-success': 'icon-err']")
            span {{ loginMsg }}
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            loginMsg: '',
            isSuccess: false //用来显示底部成功或失败的图标
        }
    },
    computed: {
        isInput () {  //判断表单是否有输入
            return this.username !== '' && this.password !== ''
        }
    },
    methods: {
        sleep (n) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve()
                }, n);
            })
        },
        async submitData() {
            if (!this.isInput) {
                this.isSuccess = false
                this.loginMsg = ' 用户名或密码不能为空!'
                return
            }
            //后台返回的数据
            let retMsg = await this.$http.post('/api/login', {  
                username: this.username,
                password: this.password
            })

            if (retMsg.data.ok) {
                await this.sleep(300)
                this.isSuccess = true
                this.loginMsg = ' 登陆成功!'
                await this.sleep(700)
                this.$router.push('/home')
            }else {
                await this.sleep(1000)
                this.isSuccess = false
                this.loginMsg = retMsg.data.msg
            }
        }
    }
}
</script>

<style lang="less" scoped>
.login-content {
    margin: 20px 0 0 0;
    padding: 10px 20px;
    form {
        position: relative;
    }
    input {
        display: block;
        height: 30px;
        width: 100%;
        padding-left: 10px;
        border-radius: 3px;
        margin: 15px 0px;
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
    .h2 {
        text-align: left;
        font-size: 22px;
        font-weight: 500;
    }
    .login-tips {
        margin-top: 10px;
        margin-left: 10px;
        height: 20px;
        font-size: 16px;
        text-align: left;
        color: red;
        span {
            margin-left: 5px;
            font-size: 14px;
            color: #000;
        }
    }
    .icon-success {
        color: rgb(86, 163, 86)
    }
}
</style>

