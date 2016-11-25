import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = window.global_config.remote_url;

export default {
    fuzzyQuery (token, keyword, page, cb, errorCb) {
        Vue.http.headers.common['Authorization'] = token;
        Vue.http.get("brand?keyword=" + keyword + "&page=" + page).then((response) => {
            cb(response.body)
        }, (response) => {
            errorCb(response.body)
        })
    }
}