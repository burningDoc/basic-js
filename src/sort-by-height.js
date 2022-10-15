const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let ones = [];
  let newArr = [];
  arr.map((numb, index) => {
    if (numb === -1) {
      ones.push(index);
    } else {
      newArr.push(numb);
    }
  })
  newArr.sort((a, b) => a - b);
  for (let i = 0; i < ones.length; i++) {
    newArr.splice(ones[i], 0, -1)
  }
  return newArr
}
module.exports = {
  sortByHeight
};
