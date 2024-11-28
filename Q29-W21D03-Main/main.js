/* isArmstrong */

/*  
write function check if the given number is Armstrong number and return true or false accordingly.
An Armstrong number of three digits is an integer when its value equals the sum of a cube of digits to the number itself. 
An Armstrong number is always a three-digit number. Let’s understand Armstrong by giving an example: Here is a value of 153. 
If you want to know 153 is Armstrong number or not.
Input:
153    // 1 * 1 * 1 +  5 * 5 * 5 + 3 * 3 * 3 = 1 + 125 + 27 = 153
Output:
true
*/

const isArmstrong = (num) => {
  // YOUR CODE HERE
  const copyForTest = num.toString().split("");
  if (num.toString().length == 3) {
    const letSee = copyForTest.reduce((acc, elem) => {
      return (acc += elem * elem * elem);
    }, 0);

    return letSee == num ? true : false;
  } else {
    return false;
  }
};

/*
Examples:
console.log(isArmstrong(152514214));// false
console.log(isArmstrong(154));// false
console.log(isArmstrong(370));// true
console.log(isArmstrong(407));//true
console.log(isArmstrong(371));// true
console.log(isArmstrong(153));// true

*/

module.exports = { isArmstrong };
