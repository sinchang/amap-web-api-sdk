'use strict'

const axios = require('axios')
const queryString = require('querystring')

const BASE_API_URL = `https://restapi.amap.com/`

module.exports = class Request {
  constructor (key) {
    this.key = key
  }

  send (method, url, data) {
    if (method === 'GET') {
      data.key = this.key
      url = `${BASE_API_URL}${url}?${queryString.stringify(data)}`
    } else if (method === 'POST') {
      url = `${BASE_API_URL}${url}?key=${this.key}`
    }

    return axios({
      url,
      method,
      data
    }).then(res => {
      const data = res.data

      if (data.infocode === '10000') {
        return Promise.resolve(res.data)
      }

      return Promise.reject(res.data)
    }).catch(err => {
      if (err.response) return Promise.reject(err.response.data)

      if (err instanceof Error) return Promise.reject(err.message)

      return Promise.reject(err)
    })
  }
}
