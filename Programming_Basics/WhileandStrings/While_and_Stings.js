

// for (var i = 0; i < 5; i++) {
//     console.log("Clinks")
// }

//Eat - Going to Lucky's Buffet. Eat until we're full or we're sick.

var clinksStomach = 0
for (var plates = 0; plates <= 5; plates++) {
    clinksStomach += 700
}
console.log(clinksStomach)

var clinksStomach = 0
var clinksIsNotFull = true
var plates = 0
while (clinksIsNotFull) {     //While = "this is true"
    plates += 1
    clinksStomach += 700         //changes clinks stomach
    if (clinksStomach > 4000) {   //changes the full variable
        clinksIsNotFull = false
    }
    console.log("Clinks has eaten " + clinksStomach + " Calories")
    console.log("Clinks has eaten " + plates + " plates")
}
console.log(clinksStomach)

// //Trips to the bathroom

// var clinksIsSick = true
// while (clinksIsSick) {
//     clinksStomach -= 700
//     if (clinksIsSick <= 0) {
//         clinksIsSick = false
//         console.log("Wow I feel much better now!")
//     }
//     else {
//         console.log("I'm never going to Lucky's again!")
//     }
// }
// console.log(clinksStomach)

// //Reps ar the Gym

// var clinksIsSwole = true
// var clinksHeartRate = 80
// while (clinksIsSwole) {
//     console.log("Yeah Buddy, just one more!!!")
//     repCounter++
//     clinksHeartRate += 10
//     if (clinksHeartRate > 200) {
//         clinksIsSwole = false
//         console.log("I can feel my heartbeat in my eyeballs, I better stop now!")
//     }
// }

// while(clinksHeartRate<200)[
//     console.log("Yeah Buddy, just one more!")
//     repCounter++
//     clinksHeartRate+=10
//     console.log(repCounter)
// ]

// var Clinks = "Michael Clinkscales"

// var letterCounter = 0
// for (var i = 0; i < Clinks.length; i++) {
//     // if(Clinks[i]==" "){
//     //     console.log("Encountered a space!")
//     //     continue
//     // }
//     // else{
//     letterCounter++
//     // }
// }

// console.log(letterCounter)

//Design a function, that given a string, counts the number of E's in that string

//my attempt
// var countE = true
// var hw = "Hello World"
// counter = 0
// function howManyE(hw) {
//     while (countE) {
//         counter += 1
//         return countE = counter
//     }
// }

// howManyE
// console.log(counter)

//complete way
// var counter = 0
// var string = "Execute Order 66"
// function findMyE(string){ 
// for(var i=0;i < string.length;i++){      //goes through the string and checks each letter for "e"
//     if(string[i]=="e"||string[i]=="E"){
//         console.log("That's one")
//         counter++
//         continue
//         }
// }
// }
// findMyE(string)
// console.log(counter)

//Another example
// var myName = 'messiah eel'
// var eCounter=0
// function countE(myName){
//     for( var i = 0; i<myName.length; i++){
//         if(myName[i] =='e'){
//         eCounter++
//         }
//     }
//     console.log(eCounter)
// }
// countE(myName)

//Clink's general solution
// function findTheEs(string) {
//     var counter = 0
//     var loopCounter = 0
//     while (counter < string.length) {
//         if (string[loopCounter] == "e" || string[loopCounter] == "E") {
//             counter++
//         }
//         loopCounter++
//     }
// }
//good practice is to keep the variables used in a function inside the function.


// 1. Design a function that given an array, returns the count of numbers above 15 inside that array

// var firstArr = [15, 3, 6, 40, 25, 65, 100]
// function greaterThanFifteen(arr) {
//     var counter = 0 
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]>15){
//             counter++
//         }
//     }
//     return counter
// }
// var correctArr =greaterThanFifteen(firstArr)
// console.log(correctArr)

// 2. Design a function that given a string, changes each "s" into a "z" or "S" into a "Z"


// var sting2 = "Michael" // string2[0] = 'M'
// function sIntoZ(string) {
//     var Result = ""
//     for (var i = 0; i < string.length; i++) {
//         if (string[i] == "s") {
//             Result = Result + "z"
//         }
//         else if (string[i] == "S") {
//             Result = Result + "Z"
//         }
//         else {
//             Result = Result + string[i]
//         }
//     }
//     return Result
// }

// var stringInput = "Mississippi"
// var stringResult = sIntoZ(stringInput)
// sIntoZ(stringInput)
// console.log(stringInput)


// 3. Design a function that given a string, returns that string backwards.

// function stringReverser(string) {
//     var stringResult = ""
//     for (var i = string.length - 1; i >= 0; i--) {
//         stringResult += string[i]
//     }
//     return stringResult
// }

// var stringInput = "Racecar"
// console.log(stringReverser(stringInput))



// Design a function that given an array of different data types, returns the sum of all of the numbers.
// Stretch Goal- Console.log all of the words


//var arrayExample = [true, 18, "Blue", 42, "set hike", false]

//Yadiel's solution
// function diffDataTypes(arr) {
//     sum = 0
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof (arr[i]) === 'number') {
//             sum += arr[i]
//         }
//         else if (typeof (arr[i]) === 'string') {
//             console.log(arr[i])
//         }


//     }
//     return sum
// }

// diffDataTypes(['hello', 2, 5, 7, 'goodbye'])
// console.log(sum)


// Design a function given 2 arrays, that will return the highest number of either array

// var x = [1, 5, 8, 9, 11, 35, 105]
// var y = [8, 9, 7, 1, 100]
// function highestNumber(arrayTest, arrayTest2) {
//     for (var num1 = 0; num1 < x.length; num1++) {
//         for (var num2 = 0; num2 < y.length; num2++) {
//             if (x[num1] > y[num2]) {
//                 var temp = x[num1]
//             }
//             else if (x[num1] < y[num2]) {
//                 var temp = y[num2]
//             }
//         }
//     }
//     return temp
// }
// var hihigh = highestNumber(x, y)
// console.log(hihigh)

//Clink's way
// function highestNumber(arr, arr2) {
//     var longestArray
//     if (arr.length > arr2.length) {
//         longestArray = arr
//     }
//     else {
//         longestArray = arr2
//     }
//     var theHighest = arr[0]
//     for (var i = 0; i < longestArray.length; i++) {
//         if (arr[i] > theHighest) {
//             theHighest = arr[i]
//         }
//         if (arr2[i] > theHighest) {
//             theHighest = arr2[i]
//         }
//     }
//     return theHighest
// }

// console.log(highestNumber([-8, 9], [2, 0, 9001]))





//Design a function that given an array of strings and arrays (an array within an array :O) , returns which position in that parent array has the longest piece of data