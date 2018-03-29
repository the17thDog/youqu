<template lang="pug">
    .commit
        .commit-title 热门留言
        .commit-con
            ul
                li(

                )
                    .user-pic
                    .user-name  狗子狗子狗子
                    .evaluation
                    .praise
                    .content
                        .content-text {{ msg }}
                        .content-img 
                        .content-date {{ date }}
</template>

<script>
export default {
    data () {
        return {
            msg: '从未跟你饮过冰零度天气看风景，从未躺进发上贴身瘙痒怎会当寻常，从未听你的拇指，撩动花瓣的声响，从未真正放手所以以为拥抱会漫长',
            date: Date.now()
        }
    }
}
</script>

<style lang="less" scoped>
    .commit {
        width: 800px;
        height: 1000px;
        padding: 20px;
        // background-color: rgb(248, 247, 247);
        display: inline-block;
        overflow: hidden;
        background-color: #fff;
        box-shadow: 0 0 2px rgba(39, 40, 34, .4);
        border-radius: 4px;
        
        .commit-title {
            height: 50px;
            color: rgb(226, 123, 111);
            font-size: 25px;
            text-indent: 10px;
            border-bottom: 2px solid rgb(197, 190, 190);
        }

        .commit-con {
            background-color: #eee;
            margin: 20px 0;
            border-radius: 4px;
            padding: 10px;

            .user-pic {
                float: left;
                height: 50px;
                width: 50px;
                border-radius: 50%;
                background-color: #fff;
            }
            .user-name {
                display: inline-block;
                color: #1a1a1a;
                font-size: 12px;
                height: 20px;
                background-color: #fff;
                margin: 0 20px;
                vertical-align: top;
            }
            .evaluation {
                display: inline-block;
                height: 20px;
                background-color: salmon;
                width: 200px;
                vertical-align: top;
            }
            .praise {
                float: right;
                height: 30px;
                width: 30px;
                background-color: #fff; 
            }
            .content {
                background-color: #fff;
                border-radius: 4px;
                margin: 10px 40px 10px 70px;
                
                .content-text {
                    padding: 10px;
                }
                .content-img {
                    height: 150px;
                }
                .content-date {
                    text-align: right;
                    padding-right: 30px;
                }
            }
        }
    }
</style>