(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.swap should return the original array', function () {
      var arr1 = [1, 2, 3, 4];
      var arr2 = ['a', 'b', 'c', 'd'];
      nx.swap(arr1, 0, 3);
      nx.swap(arr2, 0, 3);
      expect(arr1).toEqual([4, 2, 3, 1]);
      expect(arr2).toEqual(['d', 'b', 'c', 'a']);
    });
  });
})();
