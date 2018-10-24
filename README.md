# amap-web-api-sdk

[![NPM version](https://img.shields.io/npm/v/amap-web-api-sdk.svg?style=flat)](https://npmjs.com/package/amap-web-api-sdk) [![NPM downloads](https://img.shields.io/npm/dm/amap-web-api-sdk.svg?style=flat)](https://npmjs.com/package/amap-web-api-sdk) [![Build Status](https://travis-ci.org/sinchang/amap-web-api-sdk.svg?branch=master)](https://travis-ci.org/sinchang/amap-web-api-sdk) [![codecov](https://codecov.io/gh/sinchang/amap-web-api-sdk/branch/master/graph/badge.svg)](https://codecov.io/gh/sinchang/amap-web-api-sdk) [![Greenkeeper badge](https://badges.greenkeeper.io/sinchang/amap-web-api-sdk.svg)](https://greenkeeper.io/)

## Install

```bash
npm i amap-web-api-sdk
```

## Usage

```js
const Amap = require('amap-web-api-sdk')

const aMap = new Amap(key)

aMap.geocode.geo(data).then(res => {
  console.log(res)
})
```

## Reference

- [Web 服务 API | 高德地图](https://lbs.amap.com/api/webservice/summary)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**amap-web-api-sdk** © [sinchang](https://github.com/sinchang), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by sinchang with help from contributors ([list](https://github.com/sinchang/amap-web-api-sdk/contributors)).

> [sinchang.me](https://sinchang.me) · GitHub [@sinchang](https://github.com/sinchang) · Twitter [@sinchangwen](https://twitter.com/sinchangwen)
