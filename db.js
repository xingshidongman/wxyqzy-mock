const bodyParts = require('./bodyParts')
const illness = require('./illness')
const department = require('./department')

module.exports = function () {
  return {
    body_parts: bodyParts(),
    illness: illness(),
    department: department()
  }
}
