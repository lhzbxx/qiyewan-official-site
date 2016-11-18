import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
    getHomeNews(success, error){
        Vue.http.get("http://192.168.1.7:3000/api/homeNews").then(response => success(response), response => error(response));
    },

    getRecommendNews(success, error){
        Vue.http.get("http://192.168.1.7:3000/api/recommendNews").then(response => success(response), response => error(response));
    },

    getArticle(articleId, success, error){
        Vue.http.get("http://192.168.1.7:3000/api/articles/" + articleId).then(response => success(response), response => error(response));
    }
}