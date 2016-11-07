/**
 * Created by lhzbxx on 2016/10/20.
 *
 * actions.js
 */

import * as types from './mutation-types'
import authApi from '../api/auth'
import cartApi from '../api/cart'
import orderApi from '../api/order'

export const userLogin = ({ commit }, { phone, password }) => {
    return new Promise((resolve, reject) => {
        authApi.login(phone, password,
            token => {
                console.log(token)
                if (token) {
                    commit(types.USER_LOGIN_SUCCESS, {phone, token})
                    cartApi.getCarts(token,
                        carts => {
                            commit(types.RECIVE_CART, carts)
                        }
                    )
                    resolve()
                }
            },
            error => {
                console.log(error)
                reject(error)
            }
        );
    })
}

export const addToCart = ({ commit, state }, cart) => {
    return new Promise((resolve, reject) => {
        cartApi.addCart(state.auth.user.token, cart,
            response => {
                console.log(response)
                commit(types.ADD_TO_CART, response)
                resolve(cart)
            },
            error => {
                console.log(error)
                reject(error)
            }
        )
    })
}

export const addToOrder = ({ commit, state }, order) => {
    return new Promise((resolve, reject) => {
        orderApi.addOrder(state.auth.user.token, order,
            response => {
                console.log(response)
                commit(types.ADD_TO_ORDER, response)
                resolve(order)
            },
            error => {
                console.log(error)
                reject(error)
            }
        )
    })
}