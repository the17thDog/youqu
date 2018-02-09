<template lang="pug">
    header
        .header-inner
            .logo 游趣
            .searchBar
                input(placeholder='搜索你想去的景点')
            .sign-container
                .sign-up 注册
                .sign-in 登陆
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
    header {
        width: 100%;
        background-color: #eee;
        .header-inner {
            width: 1110px;
            height: 45px;
            margin: 0 auto;
            div {
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
                font-weight: 100;
                margin-left: 50px;
            }
            .searchBar {
                position: relative;
                margin-left: 25%;
                transition: .5s;
                input {
                    display: block;
                    background-color: #fff;
                    height: 100%;
                    width: 180px;
                    font-size: 14px;
                    border-radius: 4px;
                    padding-left: 10px;
                    border: 1px solid #fff;
                    transition: .5s;
                }
                input:focus {
                    border: 1px solid #668aac;
                    box-shadow: 0 0 6px rgba(26,26,26,.1);
                    width: 260px;
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
            }
        }
    }
</style>
