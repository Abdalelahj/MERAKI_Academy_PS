/* isItArray */
/*  
Write a JavaScript function to check whether an `input` is an array or not.
*/

const isItArray = (input) => {
 
 return Array.isArray(input);

   
};



/*
Examples:
isItArray("w3resource")
isItArray([1, 2, 4, 0]) // => true
isItArray(3) => false
isItArray(false) => false
isItArray([true, 3, "MerakiAcademy"]) => true
*/
module.exports = { isItArray };
