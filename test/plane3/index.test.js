// A unit for each method.
const units = {
  create: require('./create.test'),
  invert: require('./invert.test'),
  projectToPlane: require('./projectToPlane.test'),
  translateBy: require('./translateBy.test'),
  translateTo: require('./translateTo.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.plane3.' + unitName, units[unitName])
  })
}
