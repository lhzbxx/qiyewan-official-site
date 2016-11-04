import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App.vue'
import Home from './pages/Home.vue'
import Review from './pages/Review.vue'
import ProductReview from './pages/ProductDetail.vue'
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


Vue.use(ElementUI)
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

const routes = [
    { path: '/', component: Home },
    { path: '/review', component: Review,
        beforeEnter: (to, from, next) => {

        }
    },
    { path: '/product/review', component: ProductReview },
    { path: '/product/list', component: ProductList },
    { path: '/product/review', component: ProductReview },
    { path: '/product/detail', component: ProductDetail },
    { path: '/order', component: OrderList },
    { path: '/cart', component: MyCart },
    { path: '/pay', component: Pay },
    { path: '/account', component: AccountProfile },
    { path: '/person', component: PersonalCenter },
    { path: '/article', component: Article},
    { path: '/news', component: NewsList},
    { path: '/about-us', component: AboutUs},
    { path: '/recruitment', component: Recruitment},
    { path: '*', component: NotFound }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
}).$mount(App)
