import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = process.env.API

export default {
  getRegion (cb) {
    if (process.env.NODE_ENV === 'development') {
      cb('SHSH')
    } else {
      Vue.http.get('locate.do').then(
        (response) => {
          cb(response.body)
        },
        () => {}
      )
    }
  },
  isRegistered (phone, cb) {
    Vue.http.get('check-phone.do?phone=' + phone).then(
      (response) => {
        cb(response.body)
      },
      () => {}
    )
  },
  requestCaptcha (phone, cb, errorCb) {
    Vue.http.post('captcha.do?phone=' + phone).then(
      (response) => {
        if (response.body.error === 0) {
          cb(response.body)
        } else {
          errorCb(response.body)
        }
      },
      (response) => {
        errorCb(response.body)
      })
  },
  login (phone, password, cb, errorCb) {
    Vue.http.get('auth?mode=WEB_PC&phone=' + phone + '&password=' + password).then(
      (response) => {
        cb(response.body.token)
      },
      (response) => {
        errorCb(response.body)
      })
  },
  resetPassword (phone, password, captcha, cb, errorCb) {
    Vue.http.patch('auth', {
      phone: phone,
      password: password,
      captcha: captcha
    }).then(
      (response) => {
        cb(response.body.token)
      },
      (response) => {
        errorCb(response.body)
      }
    )
  },
  register (phone, password, captcha, cb, errorCb) {
    Vue.http.post('auth', {
      phone: phone,
      password: password,
      captcha: captcha
    }).then(
      (response) => {
        cb(response.body.token)
      },
      (response) => {
        errorCb(response.body)
      }
    )
  },
  getLoginHistory (token, cb, errorCb) {
    Vue.http.headers.common['Authorization'] = token
    Vue.http.get('login-history').then(
      (response) => {
        cb(response.body.content)
      },
      (response) => {
        errorCb(response.body)
      }
    )
  },
  getUser (token, cb, errorCb) {
    Vue.http.headers.common['Authorization'] = token
    Vue.http.get('users').then(
      (response) => {
        cb(response.body)
      },
      (response) => {
        errorCb(response.body)
      }
    )
  },
  getCompany (token, cb, errorCb) {
    Vue.http.headers.common['Authorization'] = token
    Vue.http.get('company').then(
      (response) => {
        cb(response.body)
      },
      (response) => {
        errorCb(response.body)
      }
    )
  },
  updateCompany (token, company, cb, errorCb) {
    Vue.http.headers.common['Authorization'] = token
    Vue.http.put('company', company).then(
      (response) => {
        cb(response.body)
      },
      (response) => {
        errorCb(response.body)
      }
    )
  }
}
