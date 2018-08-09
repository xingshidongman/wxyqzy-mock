/**
 * 病症
 */
const Mock = require('mockjs');
const Random = Mock.Random;

module.exports = function () {
  let data = [];
  let len = 200;
  for (let i = 0; i < len; i++) {
    data.push({
      id: i,
      parentId: Random.integer(0, 20),
      key: Random.word(4, 8),
      title: Random.ctitle(2, 4)
    })
  }
  return data;
};
