/* 
Given an integer x, return true if x is a 
palindrome
, and false otherwise.

*/

const isPalindrome = function (x) {
    const newX = x.toString()
    let condition = false
    for (let i = 0; i < newX.length; i++) {
        if (newX[i] == newX[newX.length - 1 - i]) {        
            condition = true;
        } else {
            return condition = false;
        }
    }
    return condition

    //! better solution

    // return newX==newX.split('').reverse().join("")


};


console.log(isPalindrome(1000021));
