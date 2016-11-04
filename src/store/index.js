/**
 * Created by lhzbxx on 2016/10/20.
 *
 * index.js
 */

import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        region: 1,
        isLogin: false,
        user: {
            phone: "",
            token: ""
        },
        carts: [],
        product: {}
    },
    getters,
    actions,
    mutations,
    // 注意：
    // 在发布时需要注释该行，以免影响性能！
    // strict: true
})