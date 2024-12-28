/* 
Write a function that removes duplicate elements from an array and returns a new array with unique elements. For example, for the input [1, 2, 2, 3, 4, 4, 5], the function should return [1, 2, 3, 4, 5].
*/

// input array
// remove duplicates (index repeated using indexOf)
// output filtered array

const filtered = (arr) => {
  return arr.filter((item, i) => {
    return arr.indexOf(item) == i;
  });
};

// console.log(filtered([1, 2, 2, 3, 4, 4, 5]));
