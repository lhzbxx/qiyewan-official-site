/**
 * Created by lhzbxx on 2016/10/20.
 *
 * actions.js
 */

import * as types from './mutation-types'

export const addToCart = ({ commit }, cart) => {
    commit(types.ADD_TO_CART, cart)
}