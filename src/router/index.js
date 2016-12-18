import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

import Home from '../pages/Home.vue'
import Review from '../pages/Review.vue'
import ProductList from '../pages/ProductList.vue'
import ProductDetail from '../pages/ProductDetail.vue'
import OrderList from '../pages/OrderList.vue'
import MyCart from '../pages/MyCart.vue'
import Checkout from '../pages/Checkout.vue'
import AccountProfile from '../pages/AccountProfile.vue'
import PersonalCenter from '../pages/PersonalCenter.vue'
import Article from '../pages/Article.vue'
import NewsList from '../pages/NewsList.vue'
import AboutUs from '../pages/AboutUs.vue'
import Recruitment from '../pages/Recruitment.vue'
import NotFound from '../pages/NotFound.vue'
import InvFin from '../pages/InvFin.vue'
import BrandQuery from '../pages/BrandQuery.vue'

const route = [
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
    path: '/checkout',
    name: 'checkout',
    beforeEnter: requireAuth,
    component: Checkout
  },
  {
    path: '/account',
    name: 'account',
    beforeEnter: requireAuth,
    component: AccountProfile
  },
  {
    path: '/person',
    name: 'person',
    beforeEnter: requireAuth,
    component: PersonalCenter
  },
  {
    path: '/article/:id',
    name: 'article',
    component: Article
  },
  {
    path: '/news',
    component: NewsList
  },
  {
    path: '/about-us/:liName',
    name: 'about-us',
    component: AboutUs
  },
  {
    path: '/recruitment',
    component: Recruitment
  },
  {
    path: '/inv',
    component: InvFin
  },
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

export default new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: route
})

function requireAuth (to, from, next) {
  if (!store.getters.isLogin) {
    store.commit('REQUIRE_LOGIN')
  } else {
    next()
  }
  next()
}
