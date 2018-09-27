import * as types from './mutation_types'
import axios from 'axios'

const actions = {
    changeType ({ commit }) {
        commit(types.CHANGE_TYPE)
    },
    async fetchUserInfo ({ commit }) {
        let res = await axios.get('/api/userinfo')
        if (res.data.code === 200) {
            let user_info = res.data.data
            user_info.isLogin = true
            user_info.userpic = `${user_info.u_id}.jpg`
            commit('FETCH_USER_INFO', user_info)
        }
    },
    async logout ({ commit }) {
        let res = await axios.get('/api/logout')
        if (res.data.code === 200) {
            let user_info = {
                isLogin: false,
                username: '',
                userpic: '',
                u_id: ''
            }
            commit('LOGOUT', user_info)
        }
    }
}

export default actions