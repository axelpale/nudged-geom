// A unit for each method.
const units = {
  almostEqual: require('./almostEqual.test'),
  at: require('./at.test'),
  atNorm: require('./atNorm.test'),
  create: require('./create.test'),
  getAngle: require('./getAngle.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.box3.' + unitName, units[unitName])
  })
}
