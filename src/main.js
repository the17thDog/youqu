import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from "./router";
import animate from "animate.css";

Vue.config.productionTip = false
Vue.prototype.$http = axios

window.eventBus = new Vue();
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
