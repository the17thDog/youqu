import * as types from './mutation_types'

const actions = {
    changeLoginTip ({ commit }) {
        commit(types.CHANGE_LOGIN_TIP)
    },
    changeSignType ({ commit }) {
        commit(types.CHANGE_SIGN_TYPE)
    },
    changeTipType ({ commit }) {
        commit(types.CHANGE_TIP_TYPE)
    }
}

export default actions