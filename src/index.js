(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DEFAULT_OPTIONS = { context: global };

  nx.swap = function (inArray, inIndex1, inIndex2) {
    var tmp = inArray[inIndex2];
    inArray[inIndex2] = inArray[inIndex1];
    inArray[inIndex1] = tmp;
    return inArray;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.swap;
  }
})();
