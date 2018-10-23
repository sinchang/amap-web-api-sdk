const Amap = require('../index')
const aMap = new Amap('5b469919c6dfb90c2c95796078f9a7e8')

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
