const Amap = require('../../index')
const aMap = new Amap('5b469919c6dfb90c2c95796078f9a7e8')

test('geo', async () => {
  const res = await aMap.geocode.geo({
    address: '方恒国际中心A座'
  })
  expect(res.geocodes[0].city).toBe('北京市')
})

test('regeo', async () => {
  const res = await aMap.geocode.regeo({
    location: '116.481488,39.990464'
  })

  expect(res.regeocode.formatted_address).toBe('北京市朝阳区望京街道方恒国际中心B座方恒国际中心')
})
