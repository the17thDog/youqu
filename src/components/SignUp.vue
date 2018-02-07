<template lang="pug">
    .register-content
        .reg-tips 注册
        form(method='post' action='' accept-charset="UTF-8" @submit.prevent='')
            //呢称 
            label.signup-nickname
                input(type='text'
                    v-model='nickname'
                    name='nickname'
                    autocomplete='off'
                    placeholder='呢称(2-6位), 限字母数字汉字')
                transition(name='tips')
                    .legal-tips.iconfont(v-show='nickname!==""' :class='[ isLegalNickname? gou: cha ]')
            //用户名
            label.signup-username
                input(type='text'
                    v-model='username'
                    name='username'
                    autocomplete='off'
                    placeholder='用户名(3-9位), 仅限字母数字')
                transition(name='tips')
                    .legal-tips.iconfont(v-show='username!==""' :class='[ isLegalUsername? gou: cha ]')
            //密码
            label.signup-password  
                input(type='password'
                    v-model='password'
                    name='password'
                    placeholder='密码(6-12位), 字母数字结合')
                transition(name='tips')
                    .legal-tips.iconfont(v-show='password!==""' :class='[ isLegalPassword? gou: cha ]')
            //确认密码
            label.comfirm-pass  
                input(type='password'
                    v-model='rePassword'
                    name='rePassword'
                    placeholder='请重新输入密码')
                transition(name='tips')
                    .legal-tips.iconfont(v-show='rePassword!==""' :class='[ isLegalRePassword? gou: cha ]')
            //提交
            label.signup-submit
                input(type='submit' value='注册' @click='subRegister')

        //注册失败的提示
        .err-tips.iconfont.icon-err(v-show="errMsg !== ''")
            span {{ errMsg }}
</template>

<script>
export default {
    data () {
        return {
            nickname: '123',
            username: 'gouzi',
            password: 'Gouzi5844',
            rePassword: 'Gouzi5844',
            gou: 'icon-gou',
            cha: 'icon-cha',
            errMsg: ''            
        }
    },
    methods: {
        async subRegister () {  //提交注册表单
            if (!this.areAllLegal) {
                this.errMsg = ' 你的输入不合法，请重新输入 !'
                return
            }
            let retMsg = await this.$http.post('/api/reg', {  //后台返回值
                nickname: this.nickname,
                username: this.username,
                password: this.password
            })
            console.log(retMsg)
        }
    },
    computed: {
        isLegalNickname () {  //检验昵称是否合法
            return /^[\u4e00-\u9fa5a-zA-Z0-9]{2,6}$/.test(this.nickname)
        },
        isLegalUsername () {  //检查用户名是否合法
            return /^[a-zA-Z0-9]{3,9}$/.test(this.username)
        },
        isLegalPassword () {  //检查密码是否合法
            return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(this.password)
        },
        isLegalRePassword () {  //检查重复密码是否合法
            return this.password && this.rePassword === this.password
        },
        areAllLegal () { //检查表单是否全部合法
            return this.isLegalNickname && this.isLegalUsername && this.isLegalPassword && this.isLegalRePassword
        }
    },
    mounted () {
        // console.log(this)
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
        margin-bottom: 10px;
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
                position: absolute;
                left: 245px;
                top:-30px;
            }
            .icon-gou {
                font-size: 25px;
                color: rgb(86, 163, 86)
            }
            .icon-cha {
                font-size: 18px;
                top: -25px;
                left: 247px;
                color: salmon;
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
        margin-top: 10px;
        height: 20px;
        font-size: 14px;
        text-align: left;
        color: salmon;
        span {
            color: #000;
            margin-left: 5px;
            font-size: 12px;
            color: #333;
        }
    }
    .tips-enter-active, .tips-leave-active {
        transition: .3s;
    }
    .tips-enter, .tips-leave-to  {
        opacity: 0;
    }
}
</style>

