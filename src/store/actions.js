/**
 * Created by lhzbxx on 2016/10/20.
 *
 * actions.js
 */

import * as types from './mutation-types'
import authApi from '../api/auth'
import cartApi from '../api/cart'
import orderApi from '../api/order'

export const checkToken = ({ commit }) => {
    if (localStorage.createAt) {
        if (new Date().valueOf() - localStorage.createAt < 15 * 24 * 60 * 60 * 1000) {
            commit(types.GET_TOKEN_FROM_STORAGE)
        }
    }
}

export const userLogin = ({ commit }, { phone, password }) => {
    return new Promise((resolve, reject) => {
        authApi.login(phone, password,
            token => {
                console.log(token)
                if (token) {
                    commit(types.USER_LOGIN_SUCCESS, {phone, token})
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

export const getCarts = ({ commit, state}) => {
    cartApi.getCarts(state.auth.user.token,
        carts => {
            commit(types.RECEIVE_CART, carts)
        },
        error => {
            console.log(error)
        }
    )
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

export const removeCart = ({ commit, state }, cart) => {
    return new Promise((resolve, reject) => {
        cartApi.removeCart(state.auth.user.token, cart,
            response => {
                console.log(response)
                commit(types.REMOVE_CART, cart)
                resolve(cart)
            },
            error => {
                console.log(error)
                reject(error)
            }
        )
    })
}

export const updateCart = ({ commit, state }, cart) => {
    return new Promise((resolve, reject) => {
        cartApi.updateCart(state.auth.user.token, cart,
            response => {
                console.log(response)
                commit(types.REMOVE_CART, cart)
                resolve(cart)
            },
            error => {
                console.log(error)
                reject(error)
            }
        )
    })
}

export const getOrders = ({ commit, state}) => {
    orderApi.getOrders(state.auth.user.token,
        orders => {
            commit(types.RECEIVE_ORDER, orders)
        },
        error => {
            console.log(error)
        }
    )
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

export const cancelOrder = ({ commit, state }, serialId) => {
    return new Promise((resolve, reject) => {
        orderApi.removeOrder(state.auth.user.token, serialId,
            response => {
                console.log(response)
                commit(types.REMOVE_ORDER, serialId)
                resolve(serialId)
            },
            error => {
                console.log(error)
                reject(error)
            }
        )
    })
}