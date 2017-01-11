/**
 * Created by lhzbxx on 2016/11/5.
 *
 * mutations.js
 */

import * as types from '../mutation-types'

const state = {
  info: {
    total: 0,
    page: 0
  },
  savedItems: []
}

const mutations = {
  [types.RECEIVE_CART] (state, carts) {
    state.info.total = carts.totalElements
    state.info.page = carts.totalPages
    window.localStorage.setItem('cartInfo', JSON.stringify(state.info))
  },
  [types.ADD_TO_ORDER] (state, cartsNum) {
    state.info.total -= cartsNum
    window.localStorage.setItem('cartInfo', JSON.stringify(state.info))
  },
  [types.ADD_TO_CART] (state, cart) {
    if (cart.amount === 1 || cart.amount === 12) {
      state.info.total += 1
      window.localStorage.setItem('cartInfo', JSON.stringify(state.info))
    }
  },
  [types.REMOVE_CART] (state) {
    state.info.total -= 1
    window.localStorage.setItem('cartInfo', JSON.stringify(state.info))
  },
  [types.REMOVE_CART] (state) {
    state.info.total -= 1
    window.localStorage.setItem('cartInfo', JSON.stringify(state.info))
  },
  [types.GET_DATA_FROM_STORAGE] (state) {
    state.info = JSON.parse(window.localStorage.getItem('cartInfo'))
    if (state.info == null) {
      state.info = {
        total: 0,
        page: 0
      }
    }
  }
}

export default {
  state,
  mutations
}
