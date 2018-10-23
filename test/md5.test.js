const md5 = require('../lib/md5')
const sk = '07e31fb5d5c8076a7172dc014e570e1e'

test('main', () => {
  const str = md5(
    {
      a: 23,
      b: 12,
      d: 48,
      f: 8,
      c: 67
    },
    sk
  )

  expect(str).toBe('54e1cbc178e315a7d56a05e737654783')
})
