import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = "http://127.0.0.1:8090";

export default {
    login (phone, password, cb, errorCb) {
        Vue.http.get("auth?phone=" + phone + "&password=" + password).then(
            (response) => {
                if (response.body.error == 0) {
                    cb(response.body.detail);
                } else {
                    errorCb(response.body);
                }
            }, (response) => {
                errorCb(response.body);
            })
    },

    getCompany (token, cb, errorCb) {
        Vue.http.headers.common['Authorization'] = token;
        Vue.http.get("company").then(
            (response) => {
                cb(response.body)
            }
            , (response) => {
                errorCb(response.body)
            }
        )
    },

    updateCompany (token, company, cb, errorCb) {
        Vue.http.headers.common['Authorization'] = token;
        Vue.http.put("company", company).then(
            (response) => {
                cb(response.body)
            }
            , (response) => {
                errorCb(response.body)
            }
        )
    }
}