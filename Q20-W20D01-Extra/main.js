/* maximumProductOfThree */

/*  
Write a function accepts an array of integers and returns the Maximum product possible from three of those numbers.
*/

const maximumProductOfThree = (arr) => {
  // YOUR CODE HERE
  // console.log(Math.max(...arr));
  let first =Math.max(...arr)
   arr.splice(arr.indexOf(first),1)
   let sec=Math.max(...arr)
   arr.splice(arr.indexOf(sec),1)
   let third=Math.max(...arr)
return first*sec*third   
};


/*
Examples:
maximumProductOfThree([3, 1, 3, 7]); // => 63
maximumProductOfThree([0, 2, 3]); // => 0
maximumProductOfThree([0, 2, 3]); // => 0
maximumProductOfThree([2, 3, 5]); // => 30
maximumProductOfThree([10, 4, 5]); // => 200
maximumProductOfThree([7, 0, 5]); // => 0
*/
module.exports = { maximumProductOfThree };
