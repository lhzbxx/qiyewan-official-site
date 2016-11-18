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
    },
    getHomeNews(success, error){
        Vue.http.get("http://123.59.50.191:3001/api/homeNews").then( response => success(response), response => error(response));
    },
    getRecommendNews(success, error){
        Vue.http.get("http://123.59.50.191:3001/api/recommendNews").then( response => success(response), response => error(response));
    },
    getArticle(articleId,success, error){
        Vue.http.get("http://123.59.50.191:3001/api/articles/"+articleId).then( response => success(response), response => error(response));
    }
}