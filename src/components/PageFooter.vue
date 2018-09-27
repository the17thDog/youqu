<template lang="pug">
    .con
        .inner 
            .fileImg(:class='fileType')
            .fileDescribe 
                p.haha {{ msg }}
                p(v-show="ft !== 'png'") {{ msg }}
</template>

<script>
export default {
    data () {
        return {
            msg: '123123',
            ft: 'png'
        }
    },
    computed: {
        fileType () {
            switch (this.ft) {
                case 'txt':
                    this.msg = 'txt'
                    return 'uu'
                case 'json':
                    this.msg = 'json'
                    return 'gg'
                case 'png':
                    this.msg = 'png'
                    return 'aa'
                default:
                    return ''
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .con {
        border-top: 1px solid #666;

        .inner {
            display: flex;
            height: 80px;
            width: 300px;
            background-color: salmon;
            margin: 0 auto;
            align-items: center;
            padding: 0 6px;
            
            .fileImg {
                height: 50px;
                width: 50px;
                border-radius: 4px;
                background-color: #eee;
                margin-right: 6px;
            }
            .fileDescribe {
                flex: 1;
                height: 50px;
                background-color: #eee;
                display: flex;
                padding-left: 6px;
                justify-content: center;
                flex-direction: column;
            }
            p:first-child {
                margin-bottom: 2px;
            }
            .uu {
                background-color: blue;
            }
            .gg {
                background-color: brown;
            }
            .aa {
                background-color: blueviolet;
            }
        }
    }
</style>
