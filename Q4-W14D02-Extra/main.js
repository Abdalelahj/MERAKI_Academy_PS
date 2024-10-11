/* Longest Word */

/*
write a function to return the largest word in the string
*/

const longestWord = (str) => {
  // YOUR CODE HERE
  const a = str.split(" ");
  if (!str.length) {
    return "it's empty string";
  }
  const f = a.reduce((acc, item, i) => {
    if (acc.length < a[i].length) {
      acc = a[i];
    }

    return acc;
  }, "");
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
