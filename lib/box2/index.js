// @affineplane.box2
//
// Two-dimensional rectangle. Unlike size2, box2 has location and orientation
// and thus can be represented in any basis without loss of information.
//
// Represented with an object `{ a, b, x, y, w, h }` where
// - `a,b` provide orientation with respect to the reference basis.
//   .. The norm of vector (a,b) is always 1.
// - `x,y` provide origin position in the reference basis.
// - `w,h` provide box size on the reference basis.
//

// @affineplane.box2.UNIT
//
// An origin-centered box with unit width and height.
//
exports.UNIT = { a: 1, b: 0, x: -0.5, y: -0.5, w: 1, h: 1 }

// @affineplane.box2.ZERO
//
// A zero-size box.
//
exports.ZERO = { a: 1, b: 0, x: 0, y: 0, w: 0, h: 0 }

exports.almostEqual = require('./almostEqual')
exports.at = require('./at')
exports.atBox = require('./atBox')
exports.atNorm = require('./atNorm')
exports.collide = require('./collide')
exports.create = require('./create')
exports.equal = require('./equal')
exports.fromPoints = require('./fromPoints')
exports.getAngle = require('./getAngle')
exports.getArea = require('./getArea')
exports.getBasis = require('./getBasis')
exports.getBasisInverse = require('./getBasisInverse')
exports.getBounds = require('./getBounds')
exports.getCircle = require('./getCircle')
exports.getSphere = exports.getCircle
exports.getInnerSquare = require('./getInnerSquare')
exports.getMinimumBounds = require('./getMinimumBounds')
exports.getPath = require('./getPath')
exports.getPoints = exports.getPath
exports.getPolygon = exports.getPath
exports.getSegments = require('./getSegments')
exports.getSize = require('./getSize')
exports.hasPoint = require('./hasPoint')
exports.homothety = require('./homothety')
exports.offset = require('./offset')
exports.projectToPlane = require('./projectToPlane')
exports.projectTo = exports.projectToPlane
exports.resizeBy = require('./resizeBy')
exports.resizeTo = require('./resizeTo')
exports.rotateBy = require('./rotateBy')
exports.scaleBy = exports.homothety
exports.transitFrom = require('./transitFrom')
exports.transitTo = require('./transitTo')
exports.translate = require('./translate')
exports.translateBy = exports.offset // TODO alias translate in v3
exports.validate = require('./validate')
