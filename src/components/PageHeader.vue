<template lang="pug">
    header
        .header-inner
            h1.logo 游趣
            .searchBar
                input(placeholder='搜索你想去的景点')
            .sign-container
                .sign-up 注册
                .sign-in 登陆
            .user-container
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
    header {
        width: 100%;
        margin-bottom: 40px;
        background-color:#fff; 
        border-bottom: 1px solid #ddd;
        box-shadow: 0 0 1px rgba(0, 0, 0, .2);
        .header-inner {
            width: 1110px;
            height: 45px;
            margin: 0 auto;
            .logo, .searchBar, .sign-container {
                float: left;
                height: 28px;
                margin: 8px 0;
                line-height: 30px;
                text-align: center;
            }
            .logo {
                width: 80px;
                font-size: 28px;
                color: #668aac;
                font-weight: 400;
                margin-left: 50px;
            }
            .searchBar {
                position: relative;
                margin-left: 20%;
                transition: .5s;
                input {
                    display: block;
                    background-color: #fff;
                    height: 100%;
                    width: 200px;
                    font-size: 14px;
                    border-radius: 4px;
                    padding-left: 10px;
                    transition: .5s;
                    background-color: #eee;
                }
                input:focus {
                    background-color: rgb(252, 246, 246);
                    box-shadow: 0 0 3px rgba(26,26,26,.3);
                    width: 280px;
                    transition: .5s;
                }
            }
            .searchBar:after {
                content: '';
                cursor: pointer;
                position: absolute;
                height: 20px;
                width: 20px;
                background-color: #668aac;
                right: 8px;
                top: 5px;
                background: url('../assets/svg/search.svg');
            }
            .sign-container {
                font-size: 16px;
                float: right;
                width: 100px;
                margin-right: 100px;
                color: #666;
                line-height: 30px;
                margin-top: 12px;
                .sign-in, .sign-up {
                    display: inline-block;
                    cursor: pointer; 
                    margin-left: 10px;
                }
                .sign-in:hover, .sign-up:hover {
                    color: #999;
                }
            }
        }
    }
</style>
