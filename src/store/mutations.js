/**
 * Created by lhzbxx on 2016/10/20.
 *
 * mutations.js
 */

import api from '../api'

export const login = function (state, payload) {
    api.login(payload.phone, payload.password,
        token => {
            if (!token) {
                state.isLogin = true
                state.user.token = token
            }
        },
        error => {
        }
    );
}
