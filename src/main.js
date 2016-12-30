// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import * as filters from './filters'

Vue.use(ElementUI)
Vue.use(VueResource)

import App from './App.vue'

import TopBar from './components/TopBar.vue'
import Footer from './components/Footer.vue'
import Product from './components/Product.vue'
import TableHeader from './components/TableHeader.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import ResetPassword from './components/ResetPassword.vue'
import Cart from './components/Cart.vue'
import Order from './components/Order.vue'
import HotProducts from './components/HotProducts.vue'
import Header from './components/Header.vue'
import News from './components/News.vue'
import Loading from './components/Loading.vue'
import SideBar from './components/SideBar.vue'
import Brand from './components/Brand.vue'
import WxPay from './components/WxPay.vue'

Vue.component('lh-top-bar', TopBar)
Vue.component('lh-product', Product)
Vue.component('lh-table-header', TableHeader)
Vue.component('lh-login', Login)
Vue.component('lh-register', Register)
Vue.component('lh-reset-password', ResetPassword)
Vue.component('lh-cart', Cart)
Vue.component('lh-order', Order)
Vue.component('lh-hot-products', HotProducts)
Vue.component('lh-header', Header)
Vue.component('lh-footer', Footer)
Vue.component('lh-news', News)
Vue.component('lh-loading', Loading)
Vue.component('lh-side-bar', SideBar)
Vue.component('lh-brand', Brand)
Vue.component('lh-wxpay', WxPay)

store.dispatch('init')

Vue.filter('cdn-filter', filters.cdnPrefix)
Vue.filter('sub-total-price-filter', filters.totalPrice)
Vue.filter('date-filter', filters.dateFormat)
Vue.filter('region-filter', filters.regionFormat)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: {App}
})
