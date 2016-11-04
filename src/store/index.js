/**
 * Created by lhzbxx on 2016/10/20.
 *
 * index.js
 */

import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        region: 1,
        isLogin: false,
        user: {
            phone: "",
            token: ""
        }
    },
    getters,
    actions,
    // 注意：
    // 在发布时需要注释该行，以免影响性能！
    strict: true
})