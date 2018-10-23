const Amap = require('../../index')
const aMap = new Amap('5b469919c6dfb90c2c95796078f9a7e8')

test('driving', async () => {
  const res = await aMap.grasproad.driving([
    {
      x: 116.449429,
      y: 40.014844,
      sp: 4,
      ag: 110,
      tm: 1478831753
    },
    {
      x: 116.449639,
      y: 40.014776,
      sp: 3,
      ag: 110,
      tm: 23
    },
    {
      x: 116.449859,
      y: 40.014716,
      sp: 3,
      ag: 111,
      tm: 33
    },
    {
      x: 116.450074,
      y: 40.014658,
      sp: 3,
      ag: 110,
      tm: 31
    },
    {
      x: 116.450273,
      y: 40.014598,
      sp: 3,
      ag: 111,
      tm: 20
    }
  ])
  expect(res.data.distance).toBe(33)
})
