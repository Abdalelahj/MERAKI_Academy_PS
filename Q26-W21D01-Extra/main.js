/* timesOfMostFreqChar */

/*  
Write a function returns the number of occurrences of the most frequent character in a sentence.
Ignore any space character.
*/

const timesOfMostFreqChar = (str) => {
  // YOUR CODE HERE
  const newStr = str.replaceAll(" ", "").split("");
  const count = {};
  let mostFreq = 0;
  newStr.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
    mostFreq = Math.max(mostFreq, count[element]);
  });

  //another solution
  // for (const element of str) {
  //   if(!element==" "){
  //     count[element]=(count[element] || 0)+1;
  //     mostFreq=Math.max(mostFreq,count[element])
  //   }
  // }

  return mostFreq == 1 ? "no occurrences all return once" : mostFreq;
};

/* 
Examples:
console.log(timesOfMostFreqChar('hello all lool woooow'));// => 7
console.log(timesOfMostFreqChar('hello all lol'));// => 6
console.log(timesOfMostFreqChar("hello all")); // => 4
console.log(timesOfMostFreqChar('Hi john') ) // => "no occurrences all return once"
timesOfMostFreqChar('hello all lol wow www.com') // => 6
*/
module.exports = { timesOfMostFreqChar };
