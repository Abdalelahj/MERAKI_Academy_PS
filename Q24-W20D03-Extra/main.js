/* findFactorial */

/*  
Given an integer n, return n! (n factorial)
5! = 5 * 4 * 3 * 2 * 1
*/

const findFactorial = (num) => {
  // YOUR CODE HERE
  if(num==1){
    return 1
  }
  return num *findFactorial(num-1)
};

findFactorial(1); // => 1
/*
Examples:
findFactorial(3); // => 6
findFactorial(4); // => 24
findFactorial(6); // => 720
findFactorial(11); // => 39916800
*/
module.exports = { findFactorial };
