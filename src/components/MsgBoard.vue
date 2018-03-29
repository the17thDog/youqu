<template lang="pug">
    .msg-board
        h3.md-title 到此一游
        .md-location {{ location }}
        .md-score
            .score-title 总体评价：
            .star
            .score-info
        .md-commit
            .commit-title 你的评价：
            textarea
        .md-photo
        .md-summit
</template>

<script>
export default {
    data () {
        return {
            location: '曹家峪'
        }
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
            }
        
            .score-title {
                color: #666;
                background-color: #eee;
                padding: 3px 8px;
                border-radius: 2px;
            }
            .star {
                width: 200px;
                background-color: #eee; 
            }
            .score-info {
                width: 150px;
                background-color: #eee;
            }
        }
        .md-commit {
            margin: 15px 25px 15px 25px;

            .commit-title {
                color: #666;
                background-color: #eee;
                display: inline-block;
                padding: 5px 8px;
                border-radius: 2px;
            }
            textarea {
                background-color: #eee;
                width: 800px;
                height: 200px;
                margin-left: 15px;
                color: #333;
                border-radius: 4px;
                padding: 10px 15px;
                font-size: 16px;
                letter-spacing: 1px;
                color: #666;
                word-break: break-all;
                line-height: 20px;
            }
        }
    }
</style>
