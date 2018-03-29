import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)
console.log(getters)

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
