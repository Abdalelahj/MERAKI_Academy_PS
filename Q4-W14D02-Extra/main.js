/* Longest Word */

/*
write a function to return the largest word in the string
*/

const longestWord = (str) => {
  // YOUR CODE HERE
  const a = str.split(" ");
  // console.log(str.split(" "));
  const f = a.reduce((acc, item, i) => {
    if (a[i + 1]) {
      acc=a[0]
      
      if (acc.length < a[i + 1].length) {
          acc= a[i + 1]
      }
    }    
    return acc;
  }, 0);
  return f;
};

/* 
Examples:
longestWord("time dog cat"); // => "time"
longestWord("we love cats"); // => "love"
longestWord("dogs and cats are cute"); // => "dogs"
longestWord(""); // => "it's empty string"
*/
module.exports = { longestWord };
