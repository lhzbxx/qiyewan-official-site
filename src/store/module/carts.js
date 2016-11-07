/**
 * Created by lhzbxx on 2016/11/5.
 *
 * mutations.js
 */

import * as types from '../mutation-types'

const state = {
    all: [],
    savedItems: [],
    page: 0
}

const mutations = {
    [types.RECEIVE_CART] (state, carts) {
        state.all.push(carts)
    },
    [types.ADD_TO_CART] (state, cart) {
        state.all[0].content.unshift(cart)
    },
    [types.REMOVE_CART] (state, cart) {
        for (var page of state.all.content) {
            let index = page.indexOf(cart)
            if (index > -1) {
                page.splice(index, 1)
                return
            }
        }
    }
}

export default {
    state,
    mutations
}