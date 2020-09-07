/*!
 * name: @feizheng/next-swap
 * description: Array swap for next.
 * homepage: https://github.com/afeiship/next-swap
 * version: 1.0.1
 * date: 2020-09-07T06:11:46.985Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

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
