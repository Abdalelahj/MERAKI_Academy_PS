/* Reverse Each Word */

/*  
Write a function reverses the characters of every word of a sentence. sentences contain only English letter and space characters.
*/

const reverseEachWord = (str) => {
  // YOUR CODE HERE
  const reversed = str.split(" ");
  const newWord = reversed.map((word) => {
    return word.split("").reverse().join("");
  });

  return newWord.join(" ");
};

/* 
Examples:
reverseEachWord("Hello world") // => "olleH dlrow"
reverseEachWord("Hello guys") // => "olleH syug"
reverseEachWord("It’s about what you can figure out") // => "s’tI tuoba tahw uoy nac erugif tuo"
reverseEachWord("      ") // => "Wrong!! it's empty string"

*/
module.exports = { reverseEachWord };
