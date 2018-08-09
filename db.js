const bodyParts = require('./bodyParts')
// const users = require('./users')

module.exports = function () {
  return {
    body_parts: bodyParts()
  }
}