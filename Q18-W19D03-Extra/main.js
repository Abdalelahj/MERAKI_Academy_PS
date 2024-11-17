/* removeNotUnique */

/*  
have a string, delete any characters that are not unique from the string.
Ignore any space character
*/

const removeNotUnique = (str) => {
  // YOUR CODE HERE

  let newStr = str.replaceAll(" ", "").split("");

  if (newStr.length) {
    let select = [];
    const check = newStr.filter((elem, i) => {
      if (newStr.indexOf(elem) === i) {
        return elem;
      } else {
        select.push(elem);
      }
    });
    select.forEach((element) => {
      check.forEach((el, i) => {
        if (el === element) {
          check.splice(i, 1);
        }
      });
    });
    return check.join("");
  } else {
    return "it's empty";
  }
};

/* 
Examples:
removeNotUnique("memory") // => "eory"
removeNotUnique("hello lol") // => "he"
removeNotUnique("xyzj") // => "xyzj"
removeNotUnique("iiii") // => ""
removeNotUnique("") // => "it's empty"
removeNotUnique("       ") // => "it's empty"

*/
module.exports = { removeNotUnique };
