import dataApi from '../api/data'

export function cdnPrefix (value) {
  return 'http://cdn.qiyewan.com/' + value
}

export function totalPrice (checkout) {
  let member = checkout.member - checkout.product.minMember
  if (member > 0) {
    return (checkout.amount * (checkout.product.unitPrice +
    checkout.product.perPrice * (checkout.member - checkout.product.minMember)) + checkout.premium).toFixed(2)
  } else {
    return (checkout.amount * checkout.product.unitPrice + checkout.premium).toFixed(2)
  }
}

export function dateFormat (timestamp) {
  let date = new Date(parseInt(timestamp))
  return date.getFullYear() + '/' + format(date.getMonth() + 1) + '/' + format(date.getDate()) + ' ' +
    (date.getHours() < 12 ? '上午' + date.getHours() : '下午' + (date.getHours() - 12)) +
    ':' + format(date.getMinutes()) + ':' + format(date.getSeconds())
}

export function regionFormat (regionCode) {
  let index = dataApi.regions.findIndex(item => item.code === regionCode)
  return index === -1 ? '上海' : dataApi.regions[index].name
}

function format (num) {
  return num > 10 ? num : '0' + num
}
