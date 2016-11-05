/**
 * Created by lhzbxx on 2016/11/5.
 *
 * global.js
 * 管理全局的状态
 */

import * as types from '../mutation-types'

const state = {
    region: 1
}

const mutations = {
    [types.CHANGE_REGION] (state, regionCode) {
        state.region = regionCode
    }
}

export default {
    state,
    mutations
}
