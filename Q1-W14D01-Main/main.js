/* First Reverse */

/*  
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.*/

const firstReverse = (str) => {
  // YOUR CODE HERE
  const reversedStr = str.split('').reverse().join('');
  
  return reversedStr;
};

/*
Examples:
firstReverse("I Love Code"); // => "edoC evoL I"
firstReverse("Hello World"); // => "dlroW olleH"
firstReverse("How are you?"); // => "?uoy era woH"
firstReverse(""); // => ""
*/
module.exports =  {firstReverse} ;
