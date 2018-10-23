'use strict'

const Request = require('./lib/request')
const Geocode = require('./lib/api/geocode')
const Place = require('./lib/api/place')
const Direction = require('./lib/api/direction')
const Config = require('./lib/api/config')
const Assistant = require('./lib/api/assistant')
const Weather = require('./lib/api/weather')
const Traffic = require('./lib/api/traffic')

module.exports = class Amap {
  constructor (key) {
    this.request = new Request(key)
    this.geocode = new Geocode(this.request)
    this.place = new Place(this.request)
    this.direction = new Direction(this.request)
    this.config = new Config(this.request)
    this.assistant = new Assistant(this.request)
    this.weather = new Weather(this.request)
    this.traffic = new Traffic(this.request)
  }

  distance (data) {
    return this.request.send('GET', 'v3/distance', data)
  }

  ip (data) {
    return this.request.send('GET', 'v3/ip', data)
  }

  staticmap (data) {
    return this.request.send('GET', 'v3/staticmap', data)
  }

  patch (data) {
    return this.request.send('GET', 'v3/patch', data)
  }
}
