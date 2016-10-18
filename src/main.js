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
import AccountProfile from './pages/AccountProfile.vue'
import PersonalCenter from './pages/PersonalCenter.vue'

import TopBar from './components/TopBar.vue'
import Product from './components/Product.vue'
import TableHeader from './components/TableHeader.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import ResetPassword from './components/ResetPassword.vue'


Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

Vue.component('top-bar', TopBar)
Vue.component('product', Product)
Vue.component('table-header', TableHeader)
Vue.component('lh-login', Login)
Vue.component('lh-register', Register)
Vue.component('lh-reset-password', ResetPassword)

new Vue({
    el: '#app',
    render: h => h(PersonalCenter)
})
