import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App.vue'
import Review from './pages/Review.vue'
import ProductReview from './pages/ProductDetail.vue'
import ProductList from './pages/ProductList.vue'
import ProductDetail from './pages/ProductDetail.vue'
import OrderList from './pages/OrderList.vue'
import Cart from './pages/Cart.vue'
import Pay from './pages/Pay.vue'

import TopBar from './components/TopBar.vue'
import Product from './components/Product.vue'


Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

Vue.component('top-bar', TopBar)
Vue.component('product', Product)

new Vue({
    el: '#app',
    render: h => h(Pay)
})
