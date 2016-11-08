/**
 * Created by lhzbxx on 2016/11/5.
 *
 * global.js
 * 管理全局的状态
 */

import * as types from '../mutation-types'

const state = {
    region: 1,
    needLogin: 0
}

const mutations = {
    [types.CHANGE_REGION] (state, regionCode) {
        state.region = regionCode
    },
    [types.REQUIRE_LOGIN] (state) {
        state.needLogin += 1
    }
}

export default {
    state,
    mutations
}
