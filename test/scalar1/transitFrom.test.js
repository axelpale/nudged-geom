const affineplane = require('../../index')
const scalar1 = affineplane.scalar1

module.exports = (ts) => {
  ts.test('case: basic transitFrom', (t) => {
    let scalar, plane

    scalar = 2
    plane = { a: 1, b: 0, x: 0, y: 0 }
    t.equal(
      scalar1.transitFrom(scalar, plane),
      scalar,
      'identity does not change scalar representation'
    )

    scalar = 2
    plane = { a: 2, b: 0, x: 10, y: 10, z: 10 }
    t.equal(
      scalar1.transitFrom(scalar, plane),
      4,
      'two on two equals four on one on plane3'
    )

    t.end()
  })
}
