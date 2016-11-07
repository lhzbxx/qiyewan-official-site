import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = "http://127.0.0.1:8090";

export default {
    getOrders (token, cb, errorCb) {
        Vue.http.headers.common['Authorization'] = token;
        Vue.http.get("orders").then((response) => {
            cb(response.body)
        }, (response) => {
            errorCb(response.body);
        })
    },
    addOrder (token, order, cb, errorCb) {
        Vue.http.headers.common['Authorization'] = token;
        Vue.http.post("orders", order).then((response) => {
            cb(response.body)
        }, (response) => {
            errorCb(response.body);
        })
    },
    updateOrder (token, orderId, cb, errorCb) {
        Vue.http.headers.common['Authorization'] = token;
        Vue.http.get("orders/" + orderId).then((response) => {
            cb(response.body)
        }, (response) => {
            errorCb(response.body);
        })
    },
    removeOrder (token, orderId, cb, errorCb) {
        Vue.http.headers.common['Authorization'] = token;
        Vue.http.get("orders/" + orderId).then((response) => {
            cb(response.body)
        }, (response) => {
            errorCb(response.body);
        })
    }
}