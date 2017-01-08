/**
 * Created by lhzbxx on 2016/11/5.
 *
 * global.js
 * 管理全局的状态
 */

import * as types from '../mutation-types'
import data from '../../api/data'

const state = {
  region: 1,
  needLogin: 0,
  history: []
}

const mutations = {
  [types.CHANGE_REGION] (state, regionIndex) {
    if (!Number.isInteger(regionIndex)) {
      for (let i of data.regions) {
        if (i.code === regionIndex) {
          state.region = data.regions.indexOf(i)
        }
      }
    } else {
      state.region = regionIndex
    }
  },
  [types.REQUIRE_LOGIN] (state) {
    state.needLogin += 1
  },
  [types.BROWSE_PRODUCT] (state, product) {
    state.history.push(product)
    // 最多保持6条记录。
    if (state.history.length > 6) {
      state.history.pop()
    }
    window.localStorage.setItem('history', JSON.stringify(state.history))
  },
  [types.GET_DATA_FROM_STORAGE] (state) {
    state.history = JSON.parse(window.localStorage.getItem('history'))
    if (state.history == null) {
      state.history = []
    }
  }
}

export default {
  state,
  mutations
}
