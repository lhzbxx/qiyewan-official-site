/**
 * Created by lhzbxx on 2016/10/20.
 *
 * mutations.js
 */

import api from '../../api'
import * as types from '../mutation-types'

export const getProduct = function (state, payload) {
}
const mutations = {
    [types.GET_PRODUCT_DETAIL] (state, serialId) {
        api.getProductDetail(serialId,
            product => {
                console.log(product)
                state.product = product
            },
            error => {
            }
        )
    }
}

export default {
    mutations
}