/**
 * Created by lhzbxx on 2016/10/20.
 *
 * actions.js
 */

const regions = [
    { name: "北京", code: 'BJBJ' },
    { name: "上海", code: 'SHSH' }
]

export const getRegions = state => {
    return regions
}

export const getRegion = state => {
    return regions[state.region]
}

export const getRegionCode = state => {
    return regions[state.region].code
}

export const isLogin = state => {
    return state.isLogin
}

export const getPhone = state => {
    return state.user.phone
}