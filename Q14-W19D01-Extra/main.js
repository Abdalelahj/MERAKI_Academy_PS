/* array_Copy */

/*  
Write a JavaScript function to copy an array.
*/

const array_Copy = (arr) => {
  // YOUR CODE HERE

  //first and fastest
  // const copiedArray=[...arr]
  // return copiedArray

  return arr.map(elem=>{
    return elem
  })
};

/*
Examples:
array_Copy(["string", true, 3]); // => ["string", true, 3]
array_Copy([1, 2, 3]); // => [1, 2, 3]
array_Copy([1, 9, 8]); // => [1, 9, 8]
array_Copy([]); // => []
*/
module.exports = { array_Copy };
