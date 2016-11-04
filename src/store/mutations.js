/**
 * Created by lhzbxx on 2016/10/20.
 *
 * mutations.js
 */

import api from '../api'

export const login = function (state, payload) {
    api.login(payload.phone, payload.password,
        token => {
            console.log(token)
            if (token) {
                state.isLogin = true
                state.user.token = token
                state.user.phone = payload.phone
            }
        },
        error => {
        }
    );
}

export const changeRegion = function (state, payload) {
    state.region = payload
}

export const getProduct = function (state, payload) {
    api.getProductDetail(payload.serialId,
        product => {
            console.log(product)
            state.product = product
        },
        error => {
        }
    )
}