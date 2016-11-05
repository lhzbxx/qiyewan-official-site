/**
 * Created by lhzbxx on 2016/10/20.
 *
 * auth.js
 * 身份认证相关
 */

import * as types from '../mutation-types'

const state = {
    isLogin: false,
    user: {
        phone: "",
        token: ""
    }
}

const mutations = {
    [types.USER_LOGIN_SUCCESS] (state, {phone, token}) {
        state.isLogin = true
        state.user.phone = phone
        state.user.token = token
    },
    [types.USER_LOGOUT] (state) {
        state.isLogin = false
        state.user.phone = ""
        state.user.token = ""
    }
}

export default {
    state,
    mutations
}