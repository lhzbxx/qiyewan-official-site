import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = window.global_config.remote_url;

export default {
    getArticlesByCategory (category, cb){
        Vue.http.get("articles?category=" + category);
    },

    getArticleById(id, cb, errorCb){
        Vue.http.get("articles/" + id).then((response) => cb(response),(error) => errorCb(error));
    },

    articlesCount(author, success, error){
        Vue.http.get("articles/count?author=" + author).then( response => success(response), response => error(response));
    }
}