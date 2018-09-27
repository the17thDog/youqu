<template lang="pug">
    header
        .header-inner
            h1.logo 游趣
            .searchBar
                input(
                    v-model="searchText"
                    placeholder='搜索你想去的景点'
                )
                //- .xx
                //-     ul
                //-         li 张家界国家森林公园
                //-         li 张家界玻璃桥
            .user-container(v-if="userInfo.isLogin")
                router-link(target="_blank" to="/center")
                    img.user-pic()
                .user-name {{ userInfo.username }}
                .logout(@click="logout") 退出
            .sign-container.animated.zoomIn(v-else)
                .sign-up(@click="goSignUp") 注册
                .sign-in(@click="goSignIn") 登陆
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { debounce } from '@/utils/tools'
import axios from 'axios'
export default {
    name: 'pageHeader',
    data () {
        return {
            searchText: ''
        }
    },
    created () {
        this.fetchUserInfo()
    },
    watch: {
        searchText: debounce(async text => {  // 函数防抖
            if (!text.length) return
            let res = await axios.get(`/api/search?text=${text}`)
            console.log(res)
        }, 400)
    },
    computed: {
        ...mapState(['userInfo'])
    },
    methods: {
        ...mapActions([
            'fetchUserInfo',
            'logout'
        ]),
        goSignUp () {
            this.$router.push('/login')
            this.$store.commit('REGISTER')
        },
        goSignIn () {
            this.$router.push('/login')
            this.$store.commit('LOGIN')
        }
    }
}
</script>

<style lang="less" scoped>
    header {
        width: 100%;
        margin-bottom: 40px;
        background-color:#fff; 
        box-shadow: 0 0 1px rgba(0, 0, 0, .2);
        .header-inner {
            width: 1110px;
            height: 45px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .logo, .searchBar, .sign-container {
                height: 28px;
                line-height: 30px;
            }
            .logo {
                width: 80px;
                font-size: 28px;
                color: #668aac;
                font-weight: 400;
            }
            .searchBar {
                position: relative;  
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
                .xx {
                    background-color: #eee;
                    margin-top: 10px;
                    z-index: 2000;
                    border: 1px solid #666;
                    text-indent: 20px;
                    padding: 10px 0;
                    border-radius: 4px;
                    li {
                        width: 280px;
                        border-bottom: 2px splid #fff;
                        color: #666;
                        cursor: pointer;
                    }
                    li:hover {
                        background-color: #fff;
                    }
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
            .user-container {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                width: 200px;
                font-size: 14px;
                color: #666;

                .user-pic {
                    height: 30px;
                    width: 30px;
                    border-radius: 50%;
                    background-color: #eee;
                    cursor: pointer;
                }
                .user-name {
                    margin: 0 20px 0 10px;
                    color: #000;
                }
                .logout {
                    background-color: rgb(245, 243, 243);
                    font-size: 12px;
                    padding: 4px 8px;
                    border-radius: 4px;
                    cursor: pointer;
                }
                .logout:hover {
                    color: salmon;
                }
            }
            .sign-container {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 16px;
                width: 200px;
                color: #666;
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
