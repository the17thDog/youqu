<template lang="pug">
    .slider
        .slider-photo(@mouseover="stop" @mouseout="go")
            ul
                li.pic.animated(
                    v-for="(item, index) in slideList"
                    :class="[slideType]"
                    v-show="picIndex === index"
                ) {{ item }}
            //- 点击切换按钮
            .iconfont.icon-prev(@click="toPrevPic")
            .iconfont.icon-next(@click="toNextPic")
        .slider-info
            h3.scenery-title 这是标题
            .scenery-content.animated.flipInX(
                v-for="(item, index) in infoList"
                v-show="index === picIndex"
            ) {{ item }}
</template>

<script>
export default {
    data () {
        return {
            slideList: [
                1111111111111111111,
                2222222222222222222,
                3333333333333333333
            ],
            infoList: [
                '丛林不摘下如何建造繁华丛林不摘下如何建造繁华丛林不摘下如何建造繁华丛林不摘下如何建造繁华',
                '恬静时如水影, 跃动时如跃动时如火星跃动时如火星火星',
                '剪影你的轮廓太好看, 凝跃动时如火星跃动时如火星住眼泪才敢细看'
            ],
            picIndex: 0,
            slideType: '',
            timer: ''
        }
    },
    methods: {
        toPrevPic () {
            let len = this.slideList.length
            this.slideType = 'fadeInLeft'
            this.picIndex --
            
            if (this.picIndex === -1) {
                this.picIndex = len-1
            }
        },
        toNextPic () {
            let len = this.slideList.length
            this.slideType = 'fadeInRight'
            this.picIndex ++

            if(this.picIndex === len) {
                this.picIndex = 0
            }
        },
        autoPlay () {
            let len = this.slideList.length
            this.slideType = 'fadeInRight'
            this.picIndex ++

            if(this.picIndex === len) {
                this.picIndex = 0
            }
            
        },
        go () {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 6000);
        },
        stop () {
            clearInterval(this.timer)
            this.timer = null
        }
    },
    async created () {
        await this.$nextTick()   //  DOM更新后开启轮播图
        this.go()
    }
}
</script>

<style lang="less" scoped>
    .slider {
        width: 1110px;
        height: 300px;
        margin: 0 auto;
        font-size: 0;
        margin-bottom: 30px;
        .slider-photo {
            position: relative;
            width: 700px;
            overflow: hidden;
            display: inline-block;
            box-shadow: 0 0 2px rgba(39, 40, 34, .2);
            border-radius: 4px;
            ul {
                font-size: 16px;
                height: 300px;
                li {
                    height: 300px;
                }
            }
            .icon-prev, .icon-next {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                width: 50px;
                height: 50px;
                font-size: 50px;
                color: #999;
                cursor: pointer;
            }
            .icon-prev:hover, .icon-next:hover {
                color: #666;
            }
            .icon-prev {
                left: 5px;
            }
            .icon-next {
                right: 5px;
            }
        }
        .slider-info {
            width: 380px;
            height: 300px;
            display: inline-block;
            margin-left: 30px;
            font-size: 16px;
            overflow: hidden;
            border-radius: 4px;
            background-color: #fff;
            box-shadow: 0 0 2px rgba(39, 40, 34, .2);
            .scenery-title {
                height: 50px;
                font-size: 20px;
                background-color: rgb(248, 247, 247);
                line-height: 50px;
                text-indent: 20px;
                color: rgb(55, 163, 86);
            }
            .scenery-content {
                padding: 20px;
                font-size: 20px;
            }
        }
    }
</style>


