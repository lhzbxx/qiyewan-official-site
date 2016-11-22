import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
    getHomeNews(success, error){
        Vue.http.get("http://123.59.50.191:3001/api/homeNews").then(response => success(response), response => error(response));
    },

    getRecommendNews(success, error){
        Vue.http.get("http://123.59.50.191:3001/api/recommendNews").then(response => success(response), response => error(response));
    },

    getArticle(articleId, success, error){
        Vue.http.get("http://123.59.50.191:3001/api/articles/" + articleId).then(response => success(response), response => error(response));
    },

    getInvCaptcha(phone, success, error){
        Vue.http.get("http://123.59.50.191:80/captcha/sms?mobile=" + phone).then(response => success(response), response => error(response));
    },
    getInvCaptcha(phone, success, error){
        Vue.http.get("http://123.59.50.191:80/captcha/sms?mobile=" + phone).then(response => success(response), response => error(response));
    }
}