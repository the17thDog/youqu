import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/config/router.config'

Vue.use(Router)

export default new Router({
    routes,
    mode: 'history'
})
