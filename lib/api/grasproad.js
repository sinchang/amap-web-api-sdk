'use strict'

// 轨迹纠偏
module.exports = class Grasproad {
  constructor (request) {
    this.request = request
  }

  driving (data) {
    return this.request.send('GET', 'v4/grasproad/driving', data)
  }
}
