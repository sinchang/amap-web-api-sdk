const Amap = require('../../index')
const aMap = new Amap('5b469919c6dfb90c2c95796078f9a7e8')

test('walking', async () => {
  const res = await aMap.direction.walking({
    origin: '116.481028,39.989643',
    destination: '116.434446,39.90816'
  })

  expect(res.route.origin).toBe('116.481028,39.989643')
  expect(res.route.destination).toBe('116.434446,39.90816')
})

test('transit', async () => {
  const res = await aMap.direction.transit.integrated({
    origin: '116.481028,39.989643',
    destination: '116.434446,39.90816',
    city: '北京'
  })

  expect(res.route.origin).toBe('116.481028,39.989643')
  expect(res.route.destination).toBe('116.434446,39.90816')
  expect(res.route.transits.length).toBeGreaterThan(0)
})

test('driving', async () => {
  const res = await aMap.direction.driving({
    origin: '116.481028,39.989643',
    destination: '116.434446,39.90816'
  })

  expect(res.route.origin).toBe('116.481028,39.989643')
  expect(res.route.destination).toBe('116.434446,39.90816')
  expect(res.route.paths.length).toBeGreaterThan(0)
})

test('bicycling', async () => {
  const res = await aMap.direction.bicycling({
    origin: '116.481028,39.989643',
    destination: '116.434446,39.90816'
  })

  expect(res.data.origin).toBe('116.481028,39.989643')
  expect(res.data.destination).toBe('116.434446,39.90816')
  expect(res.data.paths.length).toBeGreaterThan(0)
})

test('truck', async () => {
  const res = await aMap.direction.truck({
    origin: '116.481028,39.989643',
    destination: '116.434446,39.90816',
    size: 1
  })

  expect(res.data.route.origin).toBe('116.481028,39.989643')
  expect(res.data.route.destination).toBe('116.434446,39.90816')
  expect(res.data.route.paths.length).toBeGreaterThan(0)
})
