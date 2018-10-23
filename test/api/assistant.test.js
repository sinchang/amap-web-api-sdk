const Amap = require('../../index')
const aMap = new Amap('5b469919c6dfb90c2c95796078f9a7e8')

test('district', async () => {
  const res = await aMap.assistant.coordinate.convert({
    locations: '116.481499,39.990475|116.481499,39.990375'
  })
  expect(res.locations).toBe('116.481499,39.990475|116.481499,39.990375')
})

test('inputtips', async () => {
  const res = await aMap.assistant.inputtips({
    keywords: '肯德基'
  })
  expect(res.tips.length).toBeGreaterThan(0)
})
