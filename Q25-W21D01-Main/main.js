/* longestSequence */

/*  
Write a function returns the length of the longest sequence of 1s in an array of 1s and 0s.
*/

const longestSequence = (arr) => {
  // YOUR CODE HERE
  let final = 0;
  let repeated = 0;
  if (!arr.includes(1)) {
    return "There is no one sequenced";
  }
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == 1) {
      repeated++;
      final = Math.max(final, repeated);
    } else {
      repeated = 0;
    }
  }
  return final;
};

/*
Examples:
longestSequence([1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1]) // => 3
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1]) // => 4
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1]); // => 6
longestSequence([0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1]); // => 5
longestSequence([1, 0, 0, 1]) // => 1
longestSequence([1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1]) // => 5
longestSequence([0, 0, 0, 0]) // => "There is no one sequenced"
*/
module.exports = { longestSequence };
