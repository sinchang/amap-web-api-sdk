'use strict'

module.exports = class Geocode {
  constructor (request) {
    this.request = request
  }

  geo (data) {
    return this.request.send('GET', 'v3/geocode/geo', data)
  }

  regeo (data) {
    return this.request.send('GET', 'v3/geocode/regeo', data)
  }
}
