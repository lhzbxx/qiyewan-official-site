/**
 * Created by lhzbxx on 2016/10/20.
 *
 * articles.js
 * 文章相关
 */

import articleApi from '../../api/article'
import * as types from '../mutation-types'

const mutations = {
    [types.GET_NEWS](state, cname){
        console.log(state);
        console.log(cname);
        articleApi.getArticlesByCname();
    }
}

export default {
    mutations
}