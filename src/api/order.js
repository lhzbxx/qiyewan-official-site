import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = "http://127.0.0.1:8090";

export default {
    getOrders (token, page, cb, errorCb) {
        Vue.http.headers.common['Authorization'] = token;
        Vue.http.get("orders?page=" + (page-1)).then((response) => {
            cb(response.body)
        }, (response) => {
            errorCb(response.body);
        })
    },
    addOrder (token, carts, payment, cb, errorCb) {
        Vue.http.headers.common['Authorization'] = token;
        var checkout = []
        for (let i of carts) {
            checkout.push(i.id)
        }
        Vue.http.post("orders", {'carts': checkout, 'payment': payment}).then((response) => {
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