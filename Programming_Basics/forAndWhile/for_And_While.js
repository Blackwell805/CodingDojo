
// 1. Write a function that logs every even number from 2 - 20 to the console.

//PSEUDOCODE = tell the robot what you want it to do. Make your steps as small as possible. No code, just english. 

//name function
//start counting every other number starting at 2 and end at 20
//print each number 

// function evenNum() {
//     for (var i = 2; i <= 20; i += 2) {
//         console.log(i)
//     }
// }

// evenNum()

// 2. Write a function that logs every integer to the console starting at 25 down to 0.

// function integers() {
//     for (i = 25; i >= 0; i--) {
//         console.log(i)
//     }
// }
// integers()

// 3. Write a function that only logs multiples of 3 from 1 - 100.

// function multi3() {
//     for (i = 3; i <= 100; i += 3) { //multiples of 3? += works
//         console.log(i)
//     }
// }
// multi3()

// function mult3(){
//     for (i=1; i<=100; i++){ 
//         if (i%3==0){         //contains modulus
//             console.log(i)
//         }
//     }
// }
// mult3()
// ^for question 3


// 4. Write a function that takes in an array with two numbers as its parameter. Print the first value, and return the second.

var arr1 = [3, 7]
function p1r2(arr) {
    console.log(arr[0])
    return arr[1]
}
var test = p1r2(arr1)
console.log(test)

// function arr(num1,num2){
//     console.log(num1)
//     return num2
// }
// var numbers = arr(2,5)
// console.log(numbers)

// function print1stReturn2nd(num1, num2) {
//     console.log(num1)
//     return num2
// }

// console.log(print1stReturn2nd(7, 13)) 
// console.log(8+print1stReturn2nd(7, 13)) 8 is being added to the 13



// 5. Write a function that, given an array of numbers, replaces any negative values with the string 'Dojo'.

// function Neg(arr) {  INCOMPLETE
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof (arr[i]) === 'number') [
//             if (arr[i] < 0) {
//             arr[i] = "Dojo"
//         }
//         ]
//     }
// }
// var arr = [2, -5, 9, -10, 5]
// Neg(arr)
// console.log(arr)

// function negativeDojo(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             arr[i] = "Dojo"
//         }
//     }
// }
// var arr2 [1, 2, -8]
// // negativeDojo([1, 2, -8])//I could set a var value for the array but I don't need to with the array set up in the function. 
// negativeDojo(arr2)
// console.log(arr2)

// function negativeDojo(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             arr[i] = "Dojo"
//         }
//     }
// }
// function print1stReturn2nd(num1, num2) {
//     console.log(num1)
//     return num2
// }



//Function practice

// function getMeTheAverage(arr) {
//     //add all the numbers X
//     var arrSum = 0
//     for (var i = 0; i < arr.length; i++) {
//         arrSum = arrSum + arr[i]
//     }
//     console.log(arrSum)
//     //divide by the number of numbers
//     return arrSum / arr.length
// }

// console.log(getMeTheAverage([0.400, 0.215, 0.800, 1.00]))