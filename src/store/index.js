/**
 * Created by lhzbxx on 2016/10/20.
 *
 * index.js
 */

import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import articles from './module/articles'
import auth from './module/auth'
import carts from './module/carts'
import index from './module/index'
import products from './module/products'

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
    articles,
    auth,
    carts,
    index,
    products
    // 注意：
    // 在发布时需要注释该行，以免影响性能！
    // strict: true
})