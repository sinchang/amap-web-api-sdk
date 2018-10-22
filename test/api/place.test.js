const Amap = require('../../index')
const aMap = new Amap('5b469919c6dfb90c2c95796078f9a7e8')

test('text', async () => {
  const res = await aMap.place.text({
    keywords: '北京大学'
  })

  expect(res.pois[0].name).toBe('北京大学')
})

test('around', async () => {
  const res = await aMap.place.around({
    location: '116.473168,39.993015'
  })

  expect(res.pois[0].cityname).toBe('北京市')
})

test('polygon', async () => {
  const res = await aMap.place.polygon({
    polygon: '116.460988,40.006919|116.48231,40.007381;116.47516,39.99713|116.472596,39.985227|116.45669,39.984989|116.460988,40.006919'
  })

  expect(res.pois.length).toBeGreaterThan(2)
})

test('detail', async () => {
  const res = await aMap.place.detail({
    id: 'B0FFFAB6J2'
  })

  expect(res.pois[0].pcode).toBe('110000')
})
