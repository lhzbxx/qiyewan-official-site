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