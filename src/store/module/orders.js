/**
 * Created by lhzbxx on 2016/11/7.
 *
 * mutations.js
 */

import * as types from '../mutation-types'

const state = {
  info: {
    total: 0,
    page: 0
  },
  savedItems: [],
  checkout: [],
  order: null
}

const mutations = {
  [types.RECEIVE_ORDER] (state, orders) {
    state.info.total = orders.totalElements
    state.info.page = orders.totalPages
    window.localStorage.setItem('orderInfo', JSON.stringify(state.info))
  },
  [types.ADD_TO_ORDER] (state) {
    state.info.total += 1
    window.localStorage.setItem('orderInfo', JSON.stringify(state.info))
  },
  [types.REMOVE_ORDER] (state) {
    state.info.total -= 1
    window.localStorage.setItem('orderInfo', JSON.stringify(state.info))
  },
  [types.CHECKOUT] (state, carts) {
    state.checkout = carts
  },
  [types.ORDER] (state, order) {
    state.order = order
  },
  [types.GET_DATA_FROM_STORAGE] (state) {
    state.info = JSON.parse(window.localStorage.getItem('orderInfo'))
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
