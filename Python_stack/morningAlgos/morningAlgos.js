// /*
//   Acronyms

//   Create a function that, given a string, returns the string’s acronym 
//   (first letter of each word capitalized). 

//   Do it with .split first if you need to, then try to do it without
// */

// const str1 = " there's no free lunch - gotta pay yer way. ";
// const expected1 = "TNFL-GPYW";

// const str2 = "Live from New York, it's Saturday Night!";
// const expected2 = "LFNYISN";

// /**
//  * Turns the given str into an acronym.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str A string to be turned into an acronym.
//  * @return {string} The given str converted into an acronym.
//  */
// function acronymize(str) { }

// module.exports = { acronymize };


// //************************************************************** */


// /* 
//   String: Reverse

//   Given a string,
//   return a new string that is the given string reversed
// */

// const str1 = "creature";
// const expected1 = "erutaerc";

// const str2 = "dog";
// const expected2 = "god";

// /**
//  * Reverses the given str.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str String to be reversed.
//  * @return {string} The given str reversed.
//  */
// function reverseString(str) { }

// module.exports = { reverseString };

// //


// /* 
//   Parens Valid

//     Given an str that has parenthesis in it
//     return whether the parenthesis are valid
// */

// const str1 = "Y(3(p)p(3)r)s";
// const expected1 = true;

// const str2 = "N(0(p)3";
// const expected2 = false;
// // Explanation: not every parenthesis is closed.

// const str3 = "N(0)t ) 0(k";
// const expected3 = false;
// // Explanation: because the underlined ")" is premature: there is nothing open for it to close.

// const str4 = "a(b))(c";
// const expected4 = false;
// // Explanation: same number of opens and closes but the 2nd closing closes nothing

// /**
//  * Determines whether the parenthesis in the given string are valid.
//  * Each opening parenthesis must have exactly one closing parenthesis.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str
//  * @return {boolean} Whether the parenthesis are valid.
//  */
// function parensValid(str) { }

// module.exports = { parensValid };

// /*****************************************************************************/

// /* 
//   Braces Valid

//   Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
// */

// const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
// const expected1 = true;

// const str2 = "D(i{a}l[ t]o)n{e";
// const expected2 = false;

// const str3 = "A(1)s[O (n]0{t) 0}k";
// const expected3 = false;

// /**
//  * Determines whether the string's braces, brackets, and parenthesis are valid
//  * based on the order and amount of opening and closing pairs.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str
//  * @return {boolean} Whether the given strings braces are valid.
//  */
// function bracesValid(str) { }

// module.exports = { bracesValid };

// /*****************************************************************************/

// function parensValid(str) {
//   var paren = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (strChar === ")") {
//       return false;
//     }
//   }
//   for (var i = str.length; i > 0; i--) {
//     if (strChar === "(") {
//       return false;
//     }
//   }
//   for (var i = 0; i < str.length; i++) {
//     var strChar = str.charAt(i)
//     // console.log(strChar)
//     if (strChar === "(") {
//       paren++;
//     }
//     if (strChar === ")") {
//       paren++;
//     }
//   }
//   if (paren % 2 === 0) {
//     return true;
//   }
// };
// console.log(parensValid("Y(3(p)p(3)r)s"));


// //////////////////




// const str1 = "a x a";
// const expected1 = true;

// const str2 = "racecar";
// const expected2 = true;

// const str3 = "Dud";
// const expected3 = false;

// const str4 = "oho!";
// const expected4 = false;

// function isPalindrome(str) {
//   // for i is 0 to str.length / 2
//   // check if str.charAt(i) is equal to str.charAt(str.length - 1 - i) return false if not
//   // return true at the end
//   for (var i = 0; i < str.length / 2; i++) {
//     var j = str.length - 1
//     // racecar
//     // r = r
//     // a = a
//     // if the current index and the last index - current are the same
//     if (str.charAt(i) != str.charAt(j - i)) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPalindrome(str1));
// console.log(isPalindrome(str2));
// console.log(isPalindrome(str3));
// console.log(isPalindrome(str4));
// //

// const { isPalindrome } = require("./isPalindrome");

// const str1 = "what up, daddy-o?";
// const expected1 = "dad";

// const str2 = "uh, not much";
// const expected2 = "u";

// const str3 = "Yikes! my favorite racecar erupted!";
// const expected3 = "e racecar e";




// //This is uncomplete!
// function longestPalindromicSubstring(str) {
//   // look at a letter
//   var arr = [];
//   arr[0] = "";
//   for (var i = 0; i < str.length; i++) {
//     for (var j = str.length - 1; j >= i; j--) {
//       if (str.charAt(j) == str.chartAt(i)) {
//         // check if palindrome
//         if (isPalindrome(str.substr(i, j + 1))) {
//           var palindrome = str.substr(i, j + 1);
//           if (palindrome.length > arr[0]) {
//             arr.push(palindrome);
//           }
//         }
//       }
//     }
//   }
//   return arr[0];
//   // we should have all palindromes in the array

//   // find that letter starting from the end
//   // if you find that letter, check if the letters in between are a palindrome
//   // put all palindromes in a list
//   // loop through list to find the longest
//   // return longest
//   /**
//    * Finds the longest palindromic substring in the given string.*/
//   ////////////////////////






//   /* 
//     Given an int to represent how much change is needed
//     calculate the fewest number of coins needed to create that change,
//     using the standard US denominations
//   */

//   const cents1 = 25;
//   const expected1 = { quarter: 1 };

//   const cents2 = 50;
//   const expected2 = { quarter: 2 };

//   const cents3 = 9;
//   const expected3 = { nickel: 1, penny: 4 };

//   const cents4 = 99;
//   const expected4 = { quarter: 3, dime: 2, penny: 4 };

//   /**
//    * Calculates the fewest coins of the standard American denominations needed
//    *    to reach the given cents amount.
//    * - Time: O(?).
//    * - Space: O(?).
//    * @param {number} cents
//    * @param {string} sick
//    * @return {Object<string, number>} - A denomination table where the keys are
//    *    denomination names and the value is the amount of that denomination
//    *    needed.
//    */
//   function fewestCoinChange(cents) {
//     var quarters = 0
//     var dimes = 0
//     var nickels = 0
//     var pennies = 0
//     for (var i = 0; i < cents; i++) {
//       if (cents % 25 == 0) {
//         quarters++
//       }
//       if (cents % 10 == 0) {
//         dimes++
//       }
//     }

//     module.exports = { fewestCoinChange };

//     /*****************************************************************************/


//     const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
//     const expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

//     /**
//      * Inverts the given object's key value pairs so that the original values
//      * become the keys and the original keys become the values.
//      * - Time: O(?).
//      * - Space: O(?).
//      * @param {Object<string, string>} obj An object with string keys and string values.
//      * @return The given object with key value pairs inverted.
//      */

//     module.exports = { invertObj };


//     function invertObj(obj) {
//       var invertedobject = {}
//       for (var [key, value] of Object.entries(obj)) {
//         //console.log({ value }, { key });
//         invertedobject[value] = key
//       }
//       return invertedobject
//     }

//     console.log(invertObj({ name: "Zaphod", charm: "high", morals: "dicey" }))
//       *************************************

//       function hasOwnProperty(arr) {
//         count = 0
//         for (var i = 0; i < arr.length; i++) {
//           if (arr[i] = "a") {
//             count++
//           }
//         }
//         for (key in arr) {
//           console.log(arr[key])
//         }
//         console.log(count)
//       }
//     console.log(hasOwnProperty(['a', 'a', 'a']))

//     function hasOwnProperty(arr) {
//       countA = 0
//       countB = 0
//       countC = 0
//       countD = 0
//       countBB = 0
//       for (var i = 0; i < arr.length; i++) {
//         if (arr[i] = "a") {
//           countA++
//         }
//         if (arr[i] = "b") {
//           countB++
//         }
//         if (arr[i] = "c") {
//           countC++
//         }
//         if (arr[i] = "d") {
//           countD++
//         }
//         if (arr[i] = "B") {
//           countBB++
//         }
//       }
//       for (key in arr) {
//         console.log(arr[key])
//       }
//       console.log(countA, countB, countC, countD, countBB)
//     }
//     console.log(hasOwnProperty(["a", "b", "a", "c", "B", "c", "c", "d"]))




// function stringDedupe(str) {
//   newStr = ['']
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] == str[i] - 1 - i) {
//       newStr.push(str(i))
//     }
//   }
//   return newStr
// }
// console.log(stringDedupe["helloo"])





// /* 
//   String: Rotate String
//   Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that given integer amount.
// */

// const str1 = "Hello World";
// const rotateAmnt1 = 0;
// const expected1 = "Hello World";

// const str2 = "Hello World";
// const rotateAmnt2 = 1;
// const expected2 = "dHello Worl";

// const str3 = "Hello World";
// const rotateAmnt3 = 2;
// const expected3 = "ldHello Wor";

// const str4 = "Hello World";
// const rotateAmnt4 = 4;
// const expected4 = "orldHello W";

// /**
//  * Rotates a given string's characters to the right by the given amount,
//  * wrapping characters to the beginning.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str
//  * @param {number} n The amount of characters in the given str to rotate to the
//  *    right.
//  * @return {string} The string rotated by the given amount.
//  */
// function rotateStr(str, n) {
//   for (var i = 0; i < str.length; i++) {
//     if (n > 0) {
//       for (var j = 0; j < str.length; j++) {

//       }
//     }
//   }
// }

// module.exports = { rotateStr };


// function balanceIndex(nums) {
//   var leftsum = nums[0]
//   var rightsum = nums[0]
//   for (var i = 0; i < nums.length / 2; i++) {
//     leftsum = nums[0] + nums[1] + nums[2]
//     return leftsum
//   }
//   for (var j = nums.length - 1; j > 0; j--) {
//     // rightsum = (nums.length[j] - 1) + (nums.length[j] - 2)
//     rightsum = nums[3] + nums[4]
//     return rightsum
//   }
//   if (leftsum % rightsum == 0) {
//     return true
//   }
//   else {
//     return false
//   }
// }
// console.log(balanceIndex([-2, 5, 7, 0, 3]))





// function binarySearch(sortedNums, searchNum) {
//   while (sortedNums[midNum] != searchNum) {
//     var midNum = Math.floor(sortedNums.length / 2)
//     console.log(midNum)
//     if (sortedNums.length == 1) {
//       return false;
//     }
//     if (sortedNums[midNum] > searchNum) { //the found number is too big, check the first half
//       sortedNums = sortedNums.slice(0, midNum);
//       console.log(sortedNums)
//     }
//     if (sortedNums[midNum] < searchNum) { //the found number is too small, check the second half
//       sortedNums = sortedNums.slice(midNum, sortedNums.length);
//       console.log(sortedNums)
//     }
//   }
//   return true;



function pop(arr){
  return arr && arr.splice(0)[1]
}
console.log(pop(["hello", "world"]))




const arr1 = [1, 2, 3];
const expected1 = 3;
// what arr1 should be after running pop function
const expectedArr1 = [1, 2];

const arr2 = ["hello"];
const expected2 = "hello";
const expectedArr2 = []; // the only item was removed