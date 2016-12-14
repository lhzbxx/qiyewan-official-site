import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
let invHost = 'http://123.59.50.191:3005'
let articleHost = 'http://123.59.50.191:3001/api'

export default {
  getHomeNews (success, error) {
    Vue.http.get(articleHost + '/homeNews').then(response => success(response), response => error(response))
  },
  getRecommendNews (success, error) {
    Vue.http.get(articleHost + '/recommendNews').then(response => success(response), response => error(response))
  },
  getArticle (articleId, success, error) {
    Vue.http.get(articleHost + '/articles/' + articleId).then(response => success(response), response => error(response))
  },
  getInvCaptcha (phone, success, error) {
    Vue.http.get(invHost + '/captcha/sms?mobile=' + phone).then(response => success(response), response => error(response))
  },
  postInvestments (formStacked, success, error) {
    Vue.http.post(invHost + '/investments', formStacked).then(response => success(response), response => error(response))
  },
  postFinances (formStacked, success, error) {
    Vue.http.post(invHost + '/finances', formStacked).then(response => success(response), response => error(response))
  }
}
