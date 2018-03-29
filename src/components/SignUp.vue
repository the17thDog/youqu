<template lang="pug">
    .register-content
        h2 注册
        form(method='post' action='' accept-charset="UTF-8" @submit.prevent='')
            //呢称 
            label.signup-nickname
                input(type='text'
                    v-model='nickname'
                    name='nickname'
                    autocomplete='off'
                    placeholder='呢称(2-12位), 限字母数字汉字')
                transition(name='tips')
                    .legal-tips.iconfont(v-show='nickname!==""' :class='[ isLegalNickname? gou: cha ]')
            //用户名
            label.signup-username
                input(type='text'
                    v-model='username'
                    name='username'
                    autocomplete='off'
                    placeholder='用户名(6-16位), 仅限字母数字')
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

        //注册的提示
        .reg-tips.iconfont(v-show="regMsg !== ''" :class="[ isSuccess? 'icon-success': 'icon-err']")
            span {{ regMsg }}
</template>

<script>
export default {
    data () {
        return {
            nickname: '',
            username: '',
            password: '',
            rePassword: '',
            gou: 'icon-gou',
            cha: 'icon-cha',
            isSuccess: false,  //用来显示底部成功或失败的图标
            regMsg: ''            
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
        async subRegister () {  //提交注册表单
            if (!this.areAllLegal) {
                this.isSuccess = false
                this.regMsg = ' 你的输入不合法，请重新输入 !'
                return
            }
             //后台返回值
            let retMsg = await this.$http.post('/api/reg', { 
                nickname: this.nickname,
                username: this.username,
                password: this.password
            })
            //判断是否注册成功
            if (retMsg.data.ok) {  
                this.isSuccess = true
                this.regMsg = ' 注册成功 !'
                await this.sleep(800)
                eventBus.$emit('toSignIn')
            } else {
                this.isSuccess = false
                this.regMsg = ' 用户名已被注册 !'
            }
            console.log(retMsg)
        }
    },
    computed: {
        isLegalNickname () {  //检验昵称是否合法
            return /^[\u4e00-\u9fa5a-zA-Z0-9]{2,12}$/.test(this.nickname)
        },
        isLegalUsername () {  //检查用户名是否合法
            return /^[a-zA-Z0-9]{6,16}$/.test(this.username)
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
        console.log()
    }
}
</script>

<style lang="less" scoped>
.register-content {
    margin: 20px 0 0 0;
    padding: 10px 20px;
    h2 {
        text-align: left;
        font-size: 22px;
        font-weight: 500;
    }
    form {
        margin-bottom: 10px;
        input {
            display: block;
            height: 30px;
            width: 92%;
            padding-left: 40px;
            border-radius: 3px;
            margin: 15px 0 0 0;
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
    .reg-tips {
        margin-top: 10px;
        margin-left: 10px;
        height: 20px;
        font-size: 16px;
        text-align: left;
        color: red;
        span {
            color: #000;
            margin-left: 5px;
            font-size: 14px;
            color: #000;
        }
    }
    .icon-success {
        color: rgb(86, 163, 86)
    }
    .tips-enter-active, .tips-leave-active {
        transition: .3s;
    }
    .tips-enter, .tips-leave-to  {
        opacity: 0;
    }
    
}
</style>

