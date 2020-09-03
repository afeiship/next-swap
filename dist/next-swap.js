/*!
 * name: @feizheng/next-swap
 * description: Array swap for next.
 * homepage: https://github.com/afeiship/next-swap
 * version: 1.0.0
 * date: 2020-09-03T01:04:14.656Z
 * license: MIT
 */

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
