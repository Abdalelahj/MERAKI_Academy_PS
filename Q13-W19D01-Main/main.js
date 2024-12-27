/* evenAppearance */

/*  
Find the first item which appear an even number of times in an array.
*/

const evenAppearance = (array) => {
  // YOUR CODE HERE
  let count = {};
  let selected = [];
  const repeated = array.forEach((element, i) => {
    count[element] = (count[element] || 0) + 1;
  });
  for (const key in count) {
    if (count[key] % 2 === 0) {
      selected.push(key);
    }
  }
  return parseInt(selected[0]);
};

/*
Examples:
console.log(evenAppearance([1, 1, 2, 6, 6]));// => 1
evenAppearance([1, 2, 2, 9, 8, 8, 6, 6]) // => 2
evenAppearance([1, 9, 7, 3, 6, 6, 8, 9, 9]) // => 6
evenAppearance([1, 9, 7, 3, 6, 6, 8, 9]) // => 9
*/
module.exports = { evenAppearance };
