import * as types from './mutation_types'

const mutations = {
    [types.CHANGE_LOGIN_TIP] (state, { loginTip }) {
        state.loginTip = loginTip
    },
    [types.CHANGE_SIGN_TYPE] (state, { signType }) {
        state.signType = signType
    },
    [types.CHANGE_TIP_TYPE] (state, { tipType }) {
        state.tipType = tipType
    }
}

export default mutations