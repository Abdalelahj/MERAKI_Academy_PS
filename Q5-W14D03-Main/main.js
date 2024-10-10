/* Find Intersection */

/*  
Have the function findIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
*/

const findIntersection = (strArr) => {
  // YOUR CODE HERE
  let first=strArr.slice(0,1)
  let sec= strArr.slice(1)
  let common=[];
  
  sec.join().split(",").map((item)=>{
     first.join().split(",").forEach((element) => {
    if(element===item){
      common.push(item)
        }
    }); 
  })  
  return common.length?common.join():false 
};

/*
Examples:
findIntersection(['1, 3, 4, 7, 13' , '1, 2, 4, 13, 15']); // => '1,4,13'
findIntersection(['1, 3, 9, 10, 17, 18' , '1, 4, 9, 10']); // => '1,9,10'
findIntersection(['2, 5, 7, 14' , '1, 4, 13, 15, 25']); // => false
findIntersection(['', '1, 2, 4, 13, 15']); // => false
*/
module.exports = { findIntersection };
