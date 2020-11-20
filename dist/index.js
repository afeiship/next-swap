/*!
 * name: @jswork/next-swap
 * description: Array swap for next.
 * homepage: https://github.com/afeiship/next-swap
 * version: 1.0.0
 * date: 2020-11-20 11:20:05
 * license: MIT
 */

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
