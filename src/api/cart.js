import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = "http://127.0.0.1:8090";

export default {
    getCarts (token, cb, errorCb) {
        Vue.http.headers.common['Authorization'] = token;
        Vue.http.get("carts").then((response) => {
            cb(response.body)
        }, (response) => {
            errorCb(response.body);
        })
    },
    addCart (token, cart, cb, errorCb) {
        Vue.http.headers.common['Authorization'] = token;
        Vue.http.post("carts", cart).then((response) => {
            cb(response.body)
        }, (response) => {
            errorCb(response.body);
        })
    },
    updateCart (token, cart, cb, errorCb) {
        Vue.http.headers.common['Authorization'] = token;
        Vue.http.get("carts", cart).then((response) => {
            cb(response.body)
        }, (response) => {
            errorCb(response.body);
        })
    },
    removeCart (token, cart, cb, errorCb) {
        Vue.http.headers.common['Authorization'] = token;
        Vue.http.delete("carts", cart).then((response) => {
            cb(response.body)
        }, (response) => {
            errorCb(response.body);
        })
    }
}