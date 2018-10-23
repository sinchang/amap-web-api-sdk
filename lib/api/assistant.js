'use strict'

// 坐标转换
module.exports = class Assistant {
  constructor (request) {
    this.request = request
    this.coordinate = {
      convert: this.convert.bind(this)
    }
  }

  convert (data) {
    return this.request.send('GET', 'v3/assistant/coordinate/convert', data)
  }

  inputtips (data) {
    return this.request.send('GET', 'v3/assistant/inputtips', data)
  }
}
