'use strict'

// 交通态势
module.exports = class Traffic {
  constructor (request) {
    this.request = request
    this.status = {
      rectangle: this.rectangle.bind(this),
      circle: this.circle.bind(this),
      road: this.road.bind(this)
    }
  }

  rectangle (data) {
    return this.request.send('GET', 'v3/traffic/status/rectangle', data)
  }

  circle (data) {
    return this.request.send('GET', 'v3/traffic/status/circle', data)
  }

  road (data) {
    return this.request.send('GET', 'v3/traffic/status/road', data)
  }
}
