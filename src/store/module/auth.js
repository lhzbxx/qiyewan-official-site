/**
 * Created by lhzbxx on 2016/10/20.
 *
 * auth.js
 * 身份认证相关
 */

import authApi from '../../api/auth'
import * as types from '../mutation-types'

const mutations = {
    [types.USER_LOGIN] (state, {phone, password}) {
        authApi.login(phone, password,
            token => {
                console.log(token)
                if (token) {
                    state.isLogin = true
                    state.user.token = token
                    state.user.phone = phone
                }
            },
            error => {
            }
        );
    }
}

export default {
    mutations
}