const Amap = require('../../index')
const aMap = new Amap('5b469919c6dfb90c2c95796078f9a7e8')

test('district', async () => {
  const res = await aMap.config.district({
    keywords: '山东'
  })
  expect(res.districts[0].name).toBe('山东省')
})
