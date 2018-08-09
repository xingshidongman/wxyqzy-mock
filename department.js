/**
 * 医院科室
 */
const Mock = require('mockjs');
const Random = Mock.Random;

module.exports = function () {
  let data = [];
  for (let i = 0; i < 50; i++) {
    data.push({
      id: i,
      key: Random.word(4, 8),
      title: Random.ctitle(2, 4) + '科'
    });
  }
  return data;
};
