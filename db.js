const bodyParts = require('./bodyParts')
const illness = require('./illness')

module.exports = function () {
  return {
    body_parts: bodyParts(),
    illness: illness()
  }
}
