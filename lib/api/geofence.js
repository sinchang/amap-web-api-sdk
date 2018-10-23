'use strict'

// 地理围栏
module.exports = class Geofence {
  constructor (request) {
    this.request = request
  }

  create (data) {
    return this.request.send('POST', 'v4/geofence/meta', data)
  }

  list (data) {
    return this.request.send('GET', 'v4/geofence/meta', data)
  }

  update (data, gid) {
    return this.request.send('PATCH', 'v4/geofence/meta', data, {
      gid
    })
  }

  del (data, gid) {
    return this.request.send('DELETE', 'v4/geofence/meta', data, {
      gid
    })
  }

  status (data) {
    return this.request.send('GET', 'v4/geofence/status', data)
  }
}
