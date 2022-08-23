// A unit for each method.
const units = {
  fromPolar: require('./fromPolar.test'),
  fromSpherical: require('./fromSpherical.test'),
  inverse: require('./inverse.test'),
  magnitude: require('./magnitude.test'),
  projectToPlane: require('./projectToPlane.test'),
  rotateBy: require('./rotateBy.test'),
  rotateTo: require('./rotateTo.test'),
  scaleBy: require('./scaleBy.test'),
  scaleTo: require('./scaleTo.test'),
  sum: require('./sum.test'),
  toPolar: require('./toPolar.test'),
  toSpherical: require('./toSpherical.test'),
  transitFrom: require('./transitFrom.test'),
  transitTo: require('./transitTo.test'),
  validate: require('./validate.test')
}

module.exports = (t) => {
  Object.keys(units).forEach((unitName) => {
    t.test('affineplane.vec3.' + unitName, units[unitName])
  })
}
