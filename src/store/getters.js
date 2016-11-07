/**
 * Created by lhzbxx on 2016/10/20.
 *
 * actions.js
 */

import dataApi from '../api/data'

export const getRegions = () => {
    return dataApi.regions
}

export const getRegion = state => {
    return dataApi.regions[state.global.region]
}

export const getRegionIndex = state => {
    return state.global.region
}

export const hotProducts = () => {
    return dataApi.hotProducts
}

export const isLogin = state => {
    return state.auth.isLogin
}

export const getPhone = state => {
    return state.auth.user.phone
}

export const cartNum = state => {
    var num = 0
    for (var cart of state.carts.all) {
        num += cart.totalElements
    }
    return num
}

export const getCarts = state => {
    return state.carts.all[state.orders.page]
}

export const getOrders = state => {
    return state.orders.all[state.orders.page]
}

export const getOrder = ( state, serialId ) => {
    for (var page of state.orders.all) {
        for (var order of page.content) {
            if (order.serialId == serialId) {
                return order
            }
        }
    }
}

export const needLogin = state => {
    return state.global.needLogin
}