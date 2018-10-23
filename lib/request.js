'use strict'

const axios = require('axios')
const queryString = require('querystring')
const md5 = require('./md5')
const BASE_API_URL = `https://restapi.amap.com/`

module.exports = class Request {
  constructor (key, sk) {
    this.key = key
    this.sk = sk
  }

  send (method, url, data = {}, query = {}) {
    if (!this.key) {
      throw new Error('key required')
    }

    // sign https://lbs.amap.com/faq/account/key/72
    if (this.sk && data.sig) {
      data.sig = md5(data, this.sk)
    }

    if (method === 'GET') {
      data.key = this.key
      url = `${BASE_API_URL}${url}?${queryString.stringify(data)}`
    } else {
      query.key = this.key
      url = `${BASE_API_URL}${url}?${queryString.stringify(query)}`
    }

    // check v3/staticmap
    if (url.indexOf('v3/staticmap') > -1) {
      return Promise.resolve(url)
    }

    return axios({
      url,
      method,
      data
    })
      .then(res => {
        const data = res.data

        if (url.indexOf('v3/batch') > -1) {
          return Promise.resolve(data)
        }

        if (data.infocode === '10000' || data.errcode === 0) {
          return Promise.resolve(res.data)
        }

        return Promise.reject(res.data)
      })
      .catch(err => {
        if (err.response) return Promise.reject(err.response.data)

        if (err instanceof Error) return Promise.reject(err.message)

        return Promise.reject(err)
      })
  }
}
