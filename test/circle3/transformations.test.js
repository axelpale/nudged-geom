const circle3 = require('../../lib/circle3')

module.exports = (ts) => {
  ts.test('case: basic offset', (t) => {
    t.deepEqual(
      circle3.offset({ x: 0, y: 0, z: 0, r: 1 }, 1, 1, 1),
      { x: 1, y: 1, z: 1, r: 1 },
      'should move by unit'
    )

    t.deepEqual(
      circle3.offset({ x: 3, y: -3, z: 3, r: 1 }, 1, 1, 1),
      { x: 4, y: -2, z: 4, r: 1 },
      'non zero center point should move by unit'
    )

    t.end()
  })

  ts.test('case: basic translate', (t) => {
    t.deepEqual(
      circle3.translate({ x: 0, y: 0, z: 0, r: 1 }, { x: 1, y: 1, z: 1 }),
      { x: 1, y: 1, z: 1, r: 1 },
      'should move by unit'
    )

    t.deepEqual(
      circle3.translate({ x: 3, y: -3, z: 3, r: 1 }, { x: 1, y: 1, z: 1 }),
      { x: 4, y: -2, z: 4, r: 1 },
      'non zero center point should move by unit'
    )

    t.end()
  })

  ts.test('case: basic polar offset', (t) => {
    t.deepEqual(
      circle3.polarOffset({ x: 0, y: 0, z: 0, r: 1 }, 1, 0),
      { x: 1, y: 0, z: 0, r: 1 },
      'should move towards x'
    )

    t.deepEqual(
      circle3.polarOffset({ x: 3, y: -3, z: 3, r: 1 }, 1, 2, 0),
      { x: 3, y: -3, z: 4, r: 1 },
      'should move towards z, theta does not matter'
    )

    t.end()
  })

  ts.test('case: basic rotate by z', (t) => {
    let c, origin
    const PI = Math.PI

    c = { x: 0, y: 0, z: 0, r: 0 }
    origin = { x: 0, y: 0, z: 0 }
    t.deepEqual(
      circle3.rotateBy(c, origin, 0),
      { x: 0, y: 0, z: 0, r: 0 },
      'trivial zero'
    )

    c = { x: 0, y: 0, z: 2, r: 1 }
    origin = { x: 0, y: 0, z: 1 }
    t.almostEqualCircle(
      circle3.rotateBy(c, origin, PI),
      { x: 0, y: 0, z: 2, r: 1 },
      'should rotate around z axis, same origin'
    )

    c = { x: 0, y: 0, z: 2, r: 1 }
    origin = { x: 0, y: 2, z: 1 }
    t.almostEqualCircle(
      circle3.rotateBy(c, origin, PI),
      { x: 0, y: 4, z: 2, r: 1 },
      'should rotate around z axis'
    )

    t.end()
  })
}
