'use strict'

// 搜索POI
module.exports = class Place {
  constructor (request) {
    this.request = request
  }

  text (data) {
    return this.request.send('GET', 'v3/place/text', data)
  }

  around (data) {
    return this.request.send('GET', 'v3/place/around', data)
  }

  polygon (data) {
    return this.request.send('GET', 'v3/place/polygon', data)
  }

  detail (data) {
    return this.request.send('GET', 'v3/place/detail', data)
  }
}
