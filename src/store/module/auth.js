/**
 * Created by lhzbxx on 2016/10/20.
 *
 * auth.js
 * 身份认证相关
 */

import * as types from '../mutation-types'

const state = {
  isLogin: false,
  user: {
    phone: '',
    token: ''
  }
}

const mutations = {
  [types.USER_LOGIN_SUCCESS] (state, {phone, token}) {
    state.isLogin = true
    state.user.phone = phone
    state.user.token = token
    window.localStorage.createAt = new Date().valueOf()
    window.localStorage.setItem('user', JSON.stringify(state.user))
  },
  [types.USER_LOGOUT] (state) {
    state.isLogin = false
    state.user.phone = ''
    state.user.token = ''
    window.localStorage.removeItem('createAt')
    console.log(window.localStorage.createAt)
    window.localStorage.removeItem('user')
  },
  [types.GET_DATA_FROM_STORAGE] (state) {
    state.isLogin = true
    state.user = JSON.parse(window.localStorage.getItem('user'))
  }
}

export default {
  state,
  mutations
}
