import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = window.global_config.remote_url;

export default {
    getProductDetail (serialId, cb, errorCb) {
        Vue.http.get("products/" + serialId).then((response) => {
            cb(response.body)
        }, (response) => {
            errorCb(response.body);
        })
    },

    getProductReviews (serialId, cb,errorCb) {
        Vue.http.get("products/" + serialId + "/reviews").then((response) => {
            cb(response.body)
        }, (response) => {
            errorCb(response.body);
        })
    },

    getProductFaqs (serialId, cb,errorCb) {
        Vue.http.get("products/" + serialId + "/faq").then((response) => {
            cb(response.body)
        }, (response) => {
            errorCb(response.body);
        })
    },

    getProductList (category, cb, errorCb) {
        Vue.http.get("products/?classificationName=" + category).then((response) => {
            cb(response.body)
        }, (response) => {
            errorCb(response.body);
        })
    },
}