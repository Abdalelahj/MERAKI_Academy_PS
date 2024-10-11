/* arrayCenter */

/*  
have an array of negative/positive integers, return the element in the middle position of the array.
If the array has an even number of elements, return the average of the two middle elements instead.
*/

const arrayCenter = (arr) => {
  // YOUR CODE HERE
  let choose;
  if (!arr.length) {
    return "empty array";
  }
  if (arr.length % 2 == 0) {
    return (choose = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2);
  }
  choose = arr[arr.length / 2 - 1 + 0.5];
  return choose;
};

/*
Examples:
arrayCenter([2, 3, -4, 6, 1, 5]); // => 1
arrayCenter([2, 3, 4, -6, 2]); // => 4
arrayCenter([2, 3, 2, 9, 2]); // => 2
arrayCenter([2, 5, 1]); // => 5
arrayCenter([2, 3]); // => 2.5
arrayCenter([]); // => "empty Array"
*/
module.exports = { arrayCenter };
