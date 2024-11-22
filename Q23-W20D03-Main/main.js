/* usernameValidation */

/*  
Have the function usernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
*/

const usernameValidation = (str) => {
  // YOUR CODE HERE
  let re = /^[A-Za-z]\w+[^_]$/g;

  if (str.length >= 4 && str.length <= 25) {
    if (str.match(re)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

/* 
Examples:
usernameValidation("Mai4Yousef!_"); // => false
usernameValidation("u__hello_world123"); // => true
usernameValidation("John_123_H"); // => true
usernameValidation("#MaiYousef"); // => false
usernameValidation("aa_"); // => false
usernameValidation("3  MaiYousef"); // => false
usernameValidation("3MaiYousef"); // => false
*/
module.exports = { usernameValidation };
