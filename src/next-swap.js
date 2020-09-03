(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.swap = function (inArray, inIndex1, inIndex2) {
    inArray[inIndex1] = inArray[inIndex1] ^ inArray[inIndex2];
    inArray[inIndex2] = inArray[inIndex1] ^ inArray[inIndex2];
    inArray[inIndex1] = inArray[inIndex1] ^ inArray[inIndex2];
    return inArray;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.swap;
  }
})();
