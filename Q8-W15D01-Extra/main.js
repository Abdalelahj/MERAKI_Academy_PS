/* isPrime*/
/* 
  A prime number is a positive integer that is only divisible by 1 and itself.
  For example, 2, 3, 5, 7, 11 are the first few prime numbers.*/

const isPrime = (num) => {
  // YOUR CODE HERE
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 == 0) return false;
};

module.exports = { isPrime };
