'use strict'

// 天气查询
module.exports = class Weather {
  constructor (request) {
    this.request = request
  }

  weatherInfo (data) {
    return this.request.send('GET', 'v3/weather/weatherInfo', data)
  }
}
