import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = process.env.API2

export default {
  getCustomers (phone, cb, errorCb) {
    Vue.http.get('customers?phone=' + phone).then((response) => {
      cb(response.body)
    }, (response) => {
      errorCb(response.body)
    })
  },
  getContracts (customerId, cb, errorCb) {
    Vue.http.get('contracts?customerId=' + customerId).then((response) => {
      cb(response.body)
    }, (response) => {
      errorCb(response.body)
    })
  },
  getContractDetails (contractSno, cb, errorCb) {
    Vue.http.get('contract-details?contractSno=' + contractSno).then((response) => {
      cb(response.body)
    }, (response) => {
      errorCb(response.body)
    })
  },
  getContractServices (contractSno, cb, errorCb) {
    Vue.http.get('contract-services?contractSno=' + contractSno).then((response) => {
      cb(response.body)
    }, (response) => {
      errorCb(response.body)
    })
  },
  getContractServiceDetails (contractServiceId, cb, errorCb) {
    Vue.http.get('contract-service-details?contractServiceId=' + contractServiceId).then((response) => {
      cb(response.body)
    }, (response) => {
      errorCb(response.body)
    })
  }
}
