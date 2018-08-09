let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = function () {
  let users = [];

  let images = [1, 2, 3].map(x => Random.image('200x100', Random.color(), Random.word(2, 6)));

  let content = Random.cparagraph(0, 10);
  console.log('content:', content)

  for (let i = 0; i < 100; i++) {
    users.push({
      id: i,
      title: Random.ctitle(8, 20)
    })
  }

  return users
}