// const array = [1,6,4,3,5];
// const array2 = ["ten", "abc", "hae"]

// for (let a = 0; a < 5; a++) {
//     console.log("array:", array[a] )

//     for (let b = 0; b < 3; b++) {
//         console.log("array2:", array2[b])       
//     }
// }

// console.log("arraylenght", array.length)
// console.log("array2lenght", array2.length)



// var twoSum = function(nums, target) {
//     for (let a = 0; a < nums.length; a++) {
//         for (let b = a; b < nums.length; b++) {
//             sum = nums[a] + nums[b];
//             if (sum == target) {
//                 console.log("index is", a,b)

//             }
//         }

//     }
// };

// twoSum([1,4,5,3,6],9)


// reverse = reverse === null ? remainder : reverse * 10 + remainder

// if (reverse === null) {
//     reverse = remainder 
// }
//  else {
//     reverse = reverse * 10 + remainder
//  }


//  var isPalindrome = function(x) {
//     if (x < 0) return false
//     if (x === 0) return true
//     let number = x //x = 123
//     let reverse = null // reverse = null
//     while (number > 0) {
//         const remainder = number % 10 // 123%10 remainder=3
//         reverse = reverse === null ? remainder : reverse * 10 + remainder
//         number = Math.floor(number / 10)
//     }   
//     return x === reverse
// };

/**
 * @param {number} x
 * @return {boolean}
 */


// var isPalindrome = function(x) {
//     if (x < 0) {
//         return false
//     }
//     if (x == 0) {
//         return true
//     }
//     let num = x;
//     let text = num.toString();
//     let array1 = text.split("")
//     let arrayReverse = array1.reverse()
//     let reverseArray = arrayReverse.join("")
//     if (text === reverseArray) {
//         return true
//     }
//     else return false
    
// };

 

var romanToInt = function(s) {
    const num = { 
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    const convertS = s.split("")
    let total = 0;
    for (let index = 0; index < convertS.length; index++) {
        if (num[convertS[index]] < num[convertS[index + 1]]) {
            total -= num[convertS[index]]
        } 
        else total += num[convertS[index]]
    }
    return total
};