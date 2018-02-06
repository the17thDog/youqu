// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from "./router";
import animate from "animate.css";

Vue.config.productionTip = false
Vue.prototype.$http = axios
// Object.assign(Vue.prototype, {
//     $http: axios,
//     $isLogin: false
// })

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
