/* 
Given an array of integers num and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/* 
Input: num = [2,7,11,15], target = 9
Output: [0,1]
*/

/* 
declare two variable to check each one
iterate over the array 
return array of indices that their some is equal to target 
*/

const twoSum = function (num, target) {
  for (let i = 0; i < num.length - 1; i++) {
    for (let y = i + 1; y < num.length; y++) {
      if (num[i] + num[y] == target) {
        return [i, y];
      }
    }
  }
  return []
};

let num = [2,7,11,15];
let target = 9;
console.log(twoSum(num, target));
