<template lang="pug">
    .msg-board
        h3.md-title 到此一游
        .md-location {{ scenicName }}
        .md-score
            .score-title.tip 总体评价：
            .star
                ul
                    li.iconfont.icon-star(
                        v-for="(item, index) in 5"
                        :key='index'
                        @click.self='giveStar(index)'
                        :class='{ active: activeList[index] }'
                    )
            .score-info(v-if="scoreInfo") {{ scoreInfo }}
        .md-commit
            .commit-title.tip 你的评价：
            textarea(v-model='commitContent')
            .input-tip 您还可以输入 {{ amount }} 字
        button.md-submit(@click="submitCommit") 提交
        //- 提示框
        .tip-con 
            .eroor.animated.bounce(v-if="eroorInfo") ! {{ eroorInfo }}
            .success.animated.bounce(v-if="successInfo") ! {{ successInfo }}
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'msgBoard',
    data () {
        return {
            commitContent: '',
            activeList: Array(5).fill(0),  //绑定active类的列表
            scoreInfo: '',
            score: 0,
            eroorInfo: '',
            successInfo: ''
        }
    },
    props: {
        s_id: {
            type: String
        },
        scenicName: String
    },
    computed: {
        ...mapGetters(['u_id']),
        amount () {
            let total = 200
            let surplus = total - this.commitContent.trim().length
            return surplus
        }
    },
    async mounted () {
        setTimeout(() => {
            console.log(this.u_id)
            console.log(this.s_id)
        },1000)
        
    },
    methods: {
        async submitCommit () {
            let isLeagal = this.check()

            if (!isLeagal) return

            const postData = {
                content: this.commitContent.trim(),
                score: this.score,
                s_id: this.s_id,
                u_id: this.u_id
            }
            
            try {
                let res = await this.$http.post('/api/addMsg', postData)
                if (res.data.code === 200) {
                    this.$emit('upload')
                    this.resetMsg()
                    this.successInfo = '分享成功了！'
                    await this.sleep(2000)
                    this.successInfo = ''
                }
            } catch (error) {
                throw error
            }
        },
        check () {
            let isLeagal = true
            if (!this.commitContent.trim()) {
                this.eroorInfo = '请输入您的旅游分享'
                isLeagal = false
            }
            if (this.amount < 0) {
                this.eroorInfo = '您输入的太长啦'
                isLeagal = false
            }
            if (!this.score) {
                this.eroorInfo = '请输入评分！'
                isLeagal = false
            }
            if (!this.u_id) {  //未登录
                this.eroorInfo = '请登录后评论'
                isLeagal = false
            }
            return isLeagal
        },
        resetMsg () {
            this.scoreInfo = ''
            this.score = 0
            this.commitContent = ''
            this.activeList = Array(5).fill(0)
            this.eroorInfo = ''
        },
        giveStar (num) {
            this.activeList = [0,0,0,0,0]
            this.score = num+1

            for(let i=0; i<=num; i++) {
                this.activeList[i] = 1
            }

            switch (this.score) {
                case 1:
                    this.scoreInfo = '感觉糟透了！'
                    break
                case 2:
                    this.scoreInfo = '感觉不怎么样'
                    break
                case 3:
                    this.scoreInfo = '感觉一般般啦'
                    break
                case 4:
                    this.scoreInfo = '感觉挺不错的'
                    break
                case 5:
                    this.scoreInfo = '感觉棒极了！'
                    break
                default:
                    break;
            }
        },
        sleep (n) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve()
                }, n);
            })
        },
    }
}
</script>

<style lang="less" scoped>
    .msg-board {
        width: 1110px;
        margin: 10px auto;
        padding: 20px;
        background-color: #fff;
        box-shadow: 0 0 2px rgba(39, 40, 34, .4);
        border-radius: 4px;
        
        div {
            vertical-align: top;
        }

        .tip {
            color: #666;
            background-color: #eee;
            padding: 3px 8px;
            border-radius: 2px;
            display: inline-block;
        }

        .md-title {
            height: 50px;
            color: #668aac; 
            font-size: 25px;
            text-indent: 10px;
            border-bottom: 2px solid rgb(197, 190, 190);
        }
        .md-location {
            font-size: 20px;
            margin: 15px 25px;
            display: inline-block;
            padding: 3px 8px;
            background-color: rgb(55, 163, 86);
            color: #fff;
            border-radius: 2px;
        }
        .md-score {
            margin: 5px 10px;

            div {
                display: inline-block;
                vertical-align: top;
                margin-left: 15px;
                height: 30px;
                border-radius: 4px;
            }
        
            .star {
                background-color: #eee;
                padding: 0 10px 0 5px;

                .active {
                    color: rgb(228, 203, 13);
                }

                ul {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 30px;
                    cursor: pointer;

                    li {
                        margin: 0 2px;
                        height: 25px;
                        width: 25px;
                        font-size: 25px;
                        line-height: 22px;
                        color: #999;
                    }
                }
            }
            .score-info {
                padding: 0 10px;
                line-height: 30px;
                color: #666;
            }
        }
        .md-commit {
            margin: 15px 25px 15px 25px;

            .commit-title {
                padding: 5px 8px;
                border-radius: 4px;
            }
            textarea {
                background-color: #eee;
                width: 800px;
                height: 200px;
                margin-left: 15px;
                color: #333;
                border-radius: 4px;
                padding: 10px 15px;
                font-size: 18px;
                letter-spacing: 1px;
                color: #666;
                word-break: break-all;
                line-height: 20px;
            }
            .input-tip {
                margin-left: 770px;
                color: #666;
            }
        }
        .md-submit {
            height: 40px;
            width: 150px;
            display: block;
            background-color: #eee;
            margin: 0 auto;
            border-radius: 4px;
            font-size: 18px;
            color: #fff;
            cursor: pointer;
            background-color: #668aac;
        }
        .md-submit:hover {
            background-color: #36628d;
            transition: .3s;
        }
        .tip-con {
            height: 40px;
            text-align: center;
            .eroor, .success {
                position: relative;
                display: inline-block;
                margin-top: 10px;
                padding: 10px 20px;
                border-radius: 4px;
                background-color: #eee;
                font-size: 16px;
                color: red;
                font-weight: 600
            }
            .success {
                color: rgb(55, 163, 86);
            }
        }
    }
</style>
