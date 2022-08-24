/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const numberToArray = String(x).split('');
  return numberToArray.every((curr, i) => curr == numberToArray.reverse()[i]);
};
