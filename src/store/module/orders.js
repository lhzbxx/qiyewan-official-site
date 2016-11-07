/**
 * Created by lhzbxx on 2016/11/7.
 *
 * mutations.js
 */

import * as types from '../mutation-types'

const state = {
    all: [],
    savedItems: [],
    checkout: [],
    page: 0
}

const mutations = {
    [types.RECEIVE_ORDER] (state, orders) {
        state.all.push(orders)
    },
    [types.ADD_TO_ORDER] (state, order) {
        state.all[0].content.unshift(order)
    }
}

export default {
    state,
    mutations
}