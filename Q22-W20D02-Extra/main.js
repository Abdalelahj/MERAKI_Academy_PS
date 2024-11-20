/* fizzBuzz */
/*
--- Directions
     - Write a program that console logs the numbers from 1 to n
     - For multiples of three print “fizz” instead of the number
     - For the multiples of five print “buzz”
     - For numbers which are multiples of both 3 and 5 print “fizzbuzz”
--- Example
      fizzBuzz(5);
      |  1    |
      |  2    |
      |  fizz |   
      |  4    |
      |  buzz |   
*/

const fizzBuzz = (n) => {
  // your code here
  for (let index = 1; index <= n; index++) {
    if(index%3==0 && index%5!==0){
      console.log('fizz');
      
    }else if(index%5==0 && index%3!==0){
      console.log('buzz');
      
    }
    else if(index%5==0 && index%3==0){
      console.log('fizzbuzz');
      
    }
    else{
      console.log(index);
      
    }
    
  }
};

module.exports = {fizzBuzz};
