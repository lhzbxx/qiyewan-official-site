/**
 * Created by lhzbxx on 2016/10/20.
 *
 * actions.js
 */

import * as types from './mutation-types'
import authApi from '../api/auth'
import cartApi from '../api/cart'
import orderApi from '../api/order'

export const checkToken = ({commit}) => {
    if (localStorage.createAt) {
        if (new Date().valueOf() - localStorage.createAt < 15 * 24 * 60 * 60 * 1000) {
            commit(types.GET_TOKEN_FROM_STORAGE)
        }
    }
}

export const userLogin = ({commit}, {phone, password}) => {
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

export const userRegister = ({commit}, {phone, password, captcha}) => {
    return new Promise((resolve, reject) => {
        authApi.register(phone, password, captcha,
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
        )
    })
}

export const getCarts = ({commit, state}, page) => {
    return new Promise((resolve, reject) => {
        cartApi.getCarts(state.auth.user.token, page,
            carts => {
                commit(types.RECEIVE_CART, carts)
                resolve(carts)
            },
            error => {
                console.log(error)
                reject(error)
            }
        )
    })
}

export const addToCart = ({commit, state}, cart) => {
    return new Promise((resolve, reject) => {
        cartApi.addCart(state.auth.user.token, cart,
            response => {
                commit(types.ADD_TO_CART)
                resolve(cart)
            },
            error => {
                console.log(error)
                reject(error)
            }
        )
    })
}

export const removeCart = ({commit, state}, cart) => {
    return new Promise((resolve, reject) => {
        cartApi.removeCart(state.auth.user.token, cart,
            response => {
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

export const updateCart = ({commit, state}, cart) => {
    return new Promise((resolve, reject) => {
        cartApi.updateCart(state.auth.user.token, cart,
            response => {
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

export const getOrders = ({commit, state}, page) => {
    return new Promise((resolve, reject) => {
        orderApi.getOrders(state.auth.user.token, page,
            orders => {
                commit(types.RECEIVE_ORDER, orders)
                resolve(orders)
            },
            error => {
                console.log(error)
                reject(error)
            }
        )
    })
}

export const addToOrder = ({commit, state}, carts, payment) => {
    return new Promise((resolve, reject) => {
        orderApi.addOrder(state.auth.user.token, carts, payment,
            order => {
                commit(types.ADD_TO_ORDER)
                resolve(order)
            },
            error => {
                console.log(error)
                reject(error)
            }
        )
    })
}

export const cancelOrder = ({commit, state}, serialId) => {
    return new Promise((resolve, reject) => {
        orderApi.removeOrder(state.auth.user.token, serialId,
            response => {
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
