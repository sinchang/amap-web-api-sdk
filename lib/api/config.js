'use strict'

module.exports = class Config {
  constructor (request) {
    this.request = request
  }

  district (data) {
    return this.request.send('GET', 'v3/config/district', data)
  }
}
