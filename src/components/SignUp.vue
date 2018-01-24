<template lang="pug">
    .register-content
        .reg-tips 注册
        form(method='post' accept-charset="UTF-8")
            label.signup-nickname
                input(type='text'
                    name='nickname'
                    placeholder='呢称(1-6位), 限字母数字汉字'
                    @blur='checkUsername'
                    v-model='nickname')
                .legal-tips
            label.signup-username
                input(type='text' name='username' placeholder='用户名(3-9位), 仅限字母数字')
                .legal-tips
            label.signup-password
                input(type='password' name='password' placeholder='密码(6-12位), 仅限字母数字')
                .legal-tips
            label.comfirm-pass
                input(type='password' name='rePassword' placeholder='请重新输入密码')
                .legal-tips
            label.signup-submit
                input(type='submit' value='注册')
        .err-tips.iconfont.icon-err
            span() 你输入的格式有误，请检查
</template>

<script>
export default {
    data () {
        return {
            nickname: '',
            username: '',
            password: '',
            rePassword: ''
        }
    },
    methods: {
        checkUsername () {
            console.log(/^[\u4e00-\u9fa5a-zA-Z0-9]{1,6}$/.test(this.nickname))
        }
    },
    computed: {
        haha () {
            return /^[\u4e00-\u9fa5a-zA-Z0-9]{1,6}$/.test(this.nickname)
        }
    },
    mounted () {
        console.log(this.bens)
        console.log(this.gouzi)
    }
}
</script>

<style lang="less" scoped>
@import url('//at.alicdn.com/t/font_552741_91e2h7co0vdt2o6r.css');
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
        input {
            display: block;
            height: 30px;
            width: 92%;
            padding-left: 40px;
            border-radius: 4px;
            margin: 20px 0 0 0;
            border: 1px solid rgba(0, 0, 0, .2);
            font-size: 13px;
        }
        input:focus {
            border: 1px solid #668aac;
            box-shadow: 0 0 6px rgba(26,26,26,.1);
        }
        label {
            position: relative;
            .legal-tips {
                height: 30px;
                width: 30px;
                background-color: #fff;
                position: absolute;
                left: 245px;
                top:-30px;
            }
        }
        label:after {
            content: '';
            position: absolute;
            height: 18px;
            width: 18px;
            top: -24px;
            left: 8px;
        }
        .signup-nickname:after {
            background: url('../assets/svg/nickname.svg')
        }
        .signup-username:after {
            background: url('../assets/svg/username.svg')
        }
        .signup-password:after {
            background: url('../assets/svg/password.svg')
        }
        .comfirm-pass:after {
            background: url('../assets/svg/password.svg')
        }
        .comfirm-pass {
            .legal-tips {
                left: 160px;
            }
            input {
                width: 60%;
            }
        }
        .signup-submit input {
            position: absolute;
            border: none;
            height: 28px;
            width: 45px;
            padding-left: 0;
            top: 0;
            margin: 15px auto 0 auto;
            background-color: #5b768f;
            color: #fff;
            left: 195px;
            top: -44px;
            cursor: pointer;
        }
        .signup-submit input:hover {
            background-color: #668aac;
        }
        label.signup-submit:after {
            content: '';
            height: 0;
            width: 0;
        }
        
    }
    .err-tips {
        margin-top: 5px;
        height: 20px;
        font-size: 12px;
        color: salmon;
        span {
            color: #000;
        }
    }
}
</style>

