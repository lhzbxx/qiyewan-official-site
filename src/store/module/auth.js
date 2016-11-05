/**
 * Created by lhzbxx on 2016/10/20.
 *
 * auth.js
 * 身份认证相关
 */

import api from '../../api'

const mutations = {
    [types.USER_LOGIN] (state, {phone, password}) {
        api.login(phone, password,
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