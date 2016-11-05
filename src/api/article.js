import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = "http://127.0.0.1:8090";

export default {
    getArticlesByCname (cname, cb){
        Vue.http.get("articles?cname=" + cname);
    }
}