const Amap = require('../../index')
const aMap = new Amap('5b469919c6dfb90c2c95796078f9a7e8')

test('rectangle', async () => {
  const res = await aMap.traffic.status.rectangle({
    rectangle: '116.351147,39.966309;116.357134,39.968727'
  })
  expect.stringContaining(res.trafficinfo.description, '北三环路')
})

test('circle', async () => {
  const res = await aMap.traffic.status.circle({
    location: '116.3057764,39.98641364'
  })
  expect.stringContaining(res.trafficinfo.description, '北四环路')
})

test('road', async () => {
  const res = await aMap.traffic.status.road({
    name: '北环大道',
    adcode: '440300'
  })
  expect.stringContaining(res.trafficinfo.description, '北环大道')
})
