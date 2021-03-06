const Mock = require('mockjs');
const Random = Mock.Random;

module.exports = function () {
  const defaultKey = [
    {
      title: '头部',
      key: 'head'
    },
    {
      title: '胸部',
      key: 'chest'
    },
    {
      title: '腹部',
      key: 'abdomen'
    },
    {
      title: '上肢',
      key: 'upper_limb'
    },
    {
      title: '下肢',
      key: 'lower_limbs'
    },
    {
      title: '背部',
      key: 'backside'
    }
  ]
  let data = []
  let len = 20
  let index = defaultKey.length
  let maxIndex = index + (len - defaultKey.length)
  for (let i in defaultKey) {
    data.push({
      id: i,
      key: defaultKey[i].key,
      title:  defaultKey[i].title
    });
  }
  for (let i = index; i < maxIndex; i++) {
    data.push({
      id: i,
      key: Random.word(4, 8),
      title: Random.ctitle(2, 4)
    });
  }
  return data
}