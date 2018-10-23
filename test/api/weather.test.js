const Amap = require('../../index')
const aMap = new Amap('5b469919c6dfb90c2c95796078f9a7e8')

test('district', async () => {
  const res = await aMap.weather.weatherInfo({
    city: '110101'
  })
  expect(res.lives[0].adcode).toBe('110101')
})
