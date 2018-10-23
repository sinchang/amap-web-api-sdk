'use strict'

const md5 = require('md5')

module.exports = (data, sk) => {
  let str = ''

  Object.keys(data).sort().map(k => {
    str += `&${k}=${data[k]}`
  })

  return md5(str.substr(1) + sk)
}
