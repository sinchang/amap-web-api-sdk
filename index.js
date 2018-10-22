'use strict'

const assert = require('assert')
const Request = require('./lib/request')
const Geocode = require('./lib/api/geocode')

module.exports = class Amap {
  constructor (key) {
    assert(key, 'key required')
    this.request = new Request(key)
    this.geocode = new Geocode(this.request)
  }
}
