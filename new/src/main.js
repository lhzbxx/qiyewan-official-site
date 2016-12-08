// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)

import App from './App'
import Home from './pages/Home.vue'
import Review from './pages/Review.vue'
import ProductList from './pages/ProductList.vue'
import ProductDetail from './pages/ProductDetail.vue'
import OrderList from './pages/OrderList.vue'
import MyCart from './pages/MyCart.vue'
import Pay from './pages/Pay.vue'
import AccountProfile from './pages/AccountProfile.vue'
import PersonalCenter from './pages/PersonalCenter.vue'
// import Article from './pages/Article.vue'
// import NewsList from './pages/NewsList.vue'
// import AboutUs from './pages/AboutUs.vue'
// import Recruitment from './pages/Recruitment.vue'
import NotFound from './pages/NotFound.vue'
// import InvFin from './pages/InvFin.vue'
import BrandQuery from './pages/BrandQuery.vue'

// store.dispatch('init')

function requireAuth(to, from, next) {
  if (!store.getters.isLogin) {
    store.commit("REQUIRE_LOGIN")
  } else {
    next()
  }
  next()
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
    name: 'product-list',
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
  // {
  //   path: '/article/:id',
  //   name: 'article',
  //   component: Article
  // },
  // {
  //   path: '/news',
  //   component: NewsList
  // },
  // {
  //   path: '/about-us/:liName',
  //   name: 'about-us',
  //   component: AboutUs
  // },
  // {
  //   path: '/recruitment',
  //   component: Recruitment
  // },
  // {
  //   path: '/inv',
  //   component: InvFin
  // },
  {
    path: '/brand',
    name: 'brand-query',
    component: BrandQuery
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})

Vue.filter('cdn-filter', (value) => 'http://cdn.qiyewan.com/' + value)

Vue.filter('sub-total-price-filter', (checkout) => {
  let amount = checkout.amount
  let member = checkout.member
  if (checkout.product.serialId.substr(4) === 'HR0003') {
    return member > 3 ? ((98.8 + 18.8 * (member - 3)) * amount).toFixed(2) : (98.8 * amount).toFixed(2)
  } else {
    return (amount * checkout.product.unitPrice).toFixed(2)
  }
})

Vue.filter('date-filter', (timestamp) => {
  var format = (num) => num > 10 ? num : '0' + num
  let date = new Date(parseInt(timestamp))
  return date.getFullYear() + '/' + format(date.getMonth() + 1) + '/' + format(date.getDate()) + ' ' +
    (date.getHours() < 12 ? '上午' + date.getHours() : '下午' + (date.getHours() - 12)) +
    ':' + format(date.getMinutes()) + ':' + format(date.getSeconds())
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: {App}
})
