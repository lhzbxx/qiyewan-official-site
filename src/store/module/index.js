/**
 * Created by lhzbxx on 2016/11/5.
 *
 * index.js
 * 管理全局的状态
 */

import * as types from '../mutation-types'

const mutations = {
    [types.CHANGE_REGION] (state, regionCode) {
        state.region = regionCode
    }
}

export default {
    mutations
}