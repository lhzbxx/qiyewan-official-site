import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'


Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
    el: '#app',
    render: h => h(App)
})
