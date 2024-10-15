/* Unique Item */

/*  
Write a function that returns the number of unique items in an array.
*/

const uniqueItems = (arr) => {
  // YOUR CODE HERE
  let count=[]
  arr.map((elem,i)=>{
    // console.log(i);
    
    if(arr.indexOf(elem)==i){
      console.log("in");
      count.push(elem)
    }
    return count

  })
return count.length
};

/*
Examples:
uniqueItems([1, 1, 1, 1, 1]) // => 1
uniqueItems([3, 3, 5, 3]) // => 2
uniqueItems([5, 1, 1, 5, 1]) // => 2
uniqueItems([1, 6, 7]) // => 3
uniqueItems([1, 2, 3, 1, 2, 3]) // => 3
uniqueItems([5, 1, 2, 2, 1, 5]) // => 3
uniqueItems([5, 77, 1, 3]) // => 4
*/
module.exports = { uniqueItems };
