/**
 * Created by lhzbxx on 2016/10/20.
 *
 * actions.js
 */

export const regions = [
    { name: "北京", code: 'BJBJ' },
    { name: "上海", code: 'SHSH' }
]

export const getRegions = function () {
    return regions
}

export const getRegion = state => {
    return regions[state.region]
}

export const getRegionCode = state => {
    return regions[state.region].code
}