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
    return dataApi.regions[state.region]
}

export const getRegionCode = state => {
    return dataApi.regions[state.region].code
}

export const isLogin = state => {
    return state.isLogin
}

export const getPhone = state => {
    return state.user.phone
}

export const getProductDetail = state => {
    return state.products.productDetail
}

export const hotProducts = () => {
    return dataApi.hotProducts
}