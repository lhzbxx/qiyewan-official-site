import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App.vue'
import Home from './pages/Home.vue'
import Review from './pages/Review.vue'
import ProductList from './pages/ProductList.vue'
import ProductDetail from './pages/ProductDetail.vue'
import OrderList from './pages/OrderList.vue'
import MyCart from './pages/MyCart.vue'
import Pay from './pages/Pay.vue'
import AccountProfile from './pages/AccountProfile.vue'
import PersonalCenter from './pages/PersonalCenter.vue'
import Article from './pages/Article.vue'
import NewsList from './pages/NewsList.vue'
import AboutUs from './pages/AboutUs.vue'
import Recruitment from './pages/Recruitment.vue'
import NotFound from './pages/NotFound.vue'

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


Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)

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

function requireAuth(to, from, next) {
    if ( ! store.getters.isLogin) {
        store.commit("REQUIRE_LOGIN")
    } else {
        next()
    }
}

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/order/:orderSerialId/product/:productSerialId/review',
        name: 'review',
        beforeEnter: requireAuth,
        component: Review
    },
    {
        path: '/product/list/:category',
        component: ProductList
    },
    {
        path: '/product/detail/:serialId',
        name: 'product-detail',
        component: ProductDetail
    },
    {
        path: '/order',
        name: 'order',
        beforeEnter: requireAuth,
        component: OrderList
    },
    {
        path: '/cart',
        name: 'cart',
        beforeEnter: requireAuth,
        component: MyCart
    },
    {
        path: '/pay',
        name: 'pay',
        beforeEnter: requireAuth,
        component: Pay
    },
    {
        path: '/account',
        beforeEnter: requireAuth,
        component: AccountProfile
    },
    {
        path: '/person',
        beforeEnter: requireAuth,
        component: PersonalCenter
    },
    {
        path: '/article/:id',
        component: Article
    },
    {
        path: '/news',
        component: NewsList
    },
    {
        path: '/about-us',
        component: AboutUs
    },
    {
        path: '/recruitment',
        component: Recruitment
    },
    {
        path: '*',
        component: NotFound
    }
]

const router = new VueRouter({
    // mode: 'history',
    routes: routes
})


new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
})