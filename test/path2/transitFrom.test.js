const affineplane = require('../../index')
const path2 = affineplane.path2

module.exports = (ts) => {
  ts.test('case: basic transitFrom', (t) => {
    let path, plane

    path = [{ x: 0, y: 0 }, { x: 1, y: 1 }]
    plane = { a: 2, b: 0, x: 0, y: 2 }

    t.deepEqual(
      path2.transitFrom(path, plane),
      [{ x: 0, y: 2 }, { x: 2, y: 4 }],
      'scale and translation should affect'
    )

    t.end()
  })
}
