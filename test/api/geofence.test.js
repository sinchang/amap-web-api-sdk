const Amap = require('../../index')
const aMap = new Amap('5b469919c6dfb90c2c95796078f9a7e8')
let gid = ''

test('create', async () => {
  const res = await aMap.geofence.create({
    name: '测试围栏名称',
    center: '115.672126,38.817129',
    radius: '1000',
    enable: 'true',
    valid_time: '2066-05-19',
    repeat: 'Mon,Tues,Wed,Thur,Fri,Sat,Sun',
    time: '00:00,11:59;13:00,20:59',
    desc: '测试围栏描述',
    alert_condition: 'enter;leave'
  })
  gid = res.data.gid
  expect(res.errcode).toBe(0)
})

test('list', async () => {
  const res = await aMap.geofence.list()
  gid = res.data.rs_list[0].gid
  expect(res.data.total_record).toBeGreaterThanOrEqual(1)
})

test('update', async () => {
  const res = await aMap.geofence.update(
    {
      name: '更新圆形围栏',
      center: '116.328037,39.962379',
      radius: '1148.8',
      valid_time: '2066-06-30',
      repeat: 'Mon,Wed,Fri,Sat,Sun',
      time: '07:00,12:00;15:00,21:00',
      desc: '更新圆形围栏描述',
      alert_condition: 'enter'
    },
    gid
  )

  expect(res.errcode).toBe(0)
})

test('status', async () => {
  try {
    await aMap.geofence.status()
  } catch (err) {
    console.log(err)
  }
})

test('del', async () => {
  const res = await aMap.geofence.del(null, gid)

  expect(res.errcode).toBe(0)
})
