import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = "http://127.0.0.1:8090";

export default {
    login (phone, password, cb, errorCb) {
        Vue.http.get("auth?phone=" + phone + "&password=" + password).then((response) => {
            if (response.body.error == 0) {
                cb(response.body.detail);
            }
        }, (response) => {
            errorCb(response.body);
        })
    },

    getProductDetail (serialId, cb, errorCb) {
        Vue.http.get("products/" + serialId).then((response) => {
            cb(response.body)
        }, (response) => {
            errorCb(response.body);
        })
    },

    getProductReviews (serialId, cb) {
        Vue.http.get("products/" + serialId + "/reviews")
    },

    getProductFaqs (serialId, cb) {
        Vue.http.get("products/" + serialId + "/faq")
    }
}