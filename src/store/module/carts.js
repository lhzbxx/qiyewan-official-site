/**
 * Created by lhzbxx on 2016/10/20.
 *
 * mutations.js
 */

import * as types from '../mutation-types'

const state = {
    all: [],
    savedItems: []
}

const mutations = {
    [types.RECIVE_CART] (state, carts) {
        state.all.push(carts)
    },
    [types.ADD_TO_CART] (state, cart) {
        state.all[0].content.unshift(cart)
    }
}

export default {
    state,
    mutations
}