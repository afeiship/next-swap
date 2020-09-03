const nx = require('@feizheng/next-js-core2');
require('../src/next-swap');

describe('api.basic test', () => {
  test('nx.swap should return the original array', function () {
    var arr = [1, 2, 3, 4];
    nx.swap(arr, 0, 3);
    expect(arr).toEqual([4, 2, 3, 1]);
  });
});
