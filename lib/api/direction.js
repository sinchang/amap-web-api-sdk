'use strict'

// 路径规划
module.exports = class Direction {
  constructor (request) {
    this.request = request
  }

  walking (data) {
    return this.request.send('GET', 'v3/direction/walking', data)
  }

  transit (data) {
    return this.request.send('GET', 'v3/direction/transit/integrated', data)
  }

  driving (data) {
    return this.request.send('GET', 'v3/direction/driving', data)
  }

  bicycling (data) {
    return this.request.send('GET', 'v4/direction/bicycling', data)
  }

  truck (data) {
    return this.request.send('GET', 'v4/direction/truck', data)
  }

  distance (data) {
    return this.request.send('GET', 'v3/distance', data)
  }
}
