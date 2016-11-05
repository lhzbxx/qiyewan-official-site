/**
 * Created by lhzbxx on 2016/10/20.
 *
 * mutations.js
 */

import productApi from '../../api/product'
import * as types from '../mutation-types'

const mutations = {
    [types.GET_PRODUCT_DETAIL] (state, serialId) {
        productApi.getProductDetail(serialId,
            product => {
                console.log(product)
                state.productDetail = product
            },
            error => {
            }
        )
    }
}

export default {
    mutations
}