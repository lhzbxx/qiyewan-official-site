import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = "http://127.0.0.1:8090/";

export function login() {
    this.$http.get("auth").then((response) => {
        console.log(response);
    }, (response) => {
        console.log(response);
    })
}