
/* 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
*/



const moveZeroes = function (nums) {
    // loop through the array 
    // when number zero found move it to the end of the array
    // keep the order of non zero elements
    // cannot make copy of array
    let index = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[index] = nums[i]
            index++
        }
    }


    for (let j = index; j < nums.length; j++) {
        nums[j] = 0
    }
    return nums

};


console.log(moveZeroes([0]));