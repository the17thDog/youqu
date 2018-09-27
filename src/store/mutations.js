import * as types from './mutation_types'

const mutations = {
    [types.CHANGE_TYPE] (state) {
        if (state.signInfo.signType == 'signUp') {
            state.signInfo.loginTip = '没有账号? '
            state.signInfo.signType = 'signIn'
            state.signInfo.tipType = '注册'
        }else {
            state.signInfo.loginTip =  '已有账号? ',
            state.signInfo.signType = 'signUp'
            state.signInfo.tipType = '登录'
        }
    },
    [types.LOGIN] (state) {
        state.signInfo.loginTip = '没有账号? '
        state.signInfo.signType = 'signIn'
        state.signInfo.tipType = '注册'
    },
    [types.REGISTER] (state) {
        state.signInfo.loginTip =  '已有账号? ',
        state.signInfo.signType = 'signUp'
        state.signInfo.tipType = '登录'
    },
    [types.FETCH_USER_INFO] (state, data) {
        state.userInfo = data
    },
    [types.LOGOUT] (state, data) {
        state.userInfo = data
    }
}

export default mutations