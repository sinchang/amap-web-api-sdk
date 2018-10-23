const Amap = require('../index')
const key = '5b469919c6dfb90c2c95796078f9a7e8'
const aMap = new Amap(key)

test('distance', async () => {
  const res = await aMap.distance({
    origins: '116.481028,39.989643',
    destination: '116.434446,39.90816'
  })

  expect(res.results.length).toBeGreaterThan(0)
})

test('ip', async () => {
  const res = await aMap.ip({
    ip: '114.247.50.2'
  })

  expect(res.adcode).toBe('110000')
})

test('staticmap', async () => {
  const res = await aMap.staticmap({
    markers: 'mid,0xFF0000,A:116.37359,39.92437;116.47359,39.92437'
  })

  expect.stringContaining(res, 'v3/staticmap')
})

test('batch', async () => {
  const res = await aMap.batch({
    ops: [
      {
        url:
          `/v3/place/around?offset=10&page=1&key=${key}&location=116.50394379585519,39.278209477408794&output=json&radius=100000&types=080000`
      },
      {
        url:
          `/v3/place/around?offset=10&page=1&key=${key}&location=118.50394379585519,39.278209477408794&output=json&radius=100000&types=080000`
      }
    ]
  })

  expect(res.length).toBe(2)
})
