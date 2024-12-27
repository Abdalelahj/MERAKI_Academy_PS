/* isPrime*/
/* 
  A prime number is a positive integer that is only divisible by 1 and itself.
  For example, 2, 3, 5, 7, 11 are the first few prime numbers.*/

const isPrime = (num) => {
  // YOUR CODE HERE
  if(num<0) return "The number is negative."
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 == 0) return false;

  for (let i = 3; i < num; i++) {
    if (num % i == 0) {
        return false
    }else{
      return true
    }
  }
};

module.exports = { isPrime };

console.log(isPrime(-23));
