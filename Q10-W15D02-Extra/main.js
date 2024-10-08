/* Is Part Of */

/*  
Make an array method that can return whether or not a context array is a part of an input array.
To simplify the problem, you can assume that both arrays will contain only strings
Hint : her resource for Prototype you can check it and read more (https://www.w3schools.com/js/js_object_prototypes.asp)
*/

Array.prototype.isPartOf = function (array) {
  // YOUR CODE HERE
};

/*
Examples:
[].isPartOf([1, 5, 2]) // => true
['car', 'dog', 'cow'].isPartOf(['dog', 'cow', 'fox', 'car']) // => true
['car', 'dog', 'cow'].isPartOf(['dog', 'cow', 'fox']) // => false
*/
module.exports = Array.prototype.isPartOf;
