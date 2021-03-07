// 1. Print 1 - 255
// Print1To255()
// Print all the integers from 1 to 255.

function Print1To255() {
    for (var i = 1; i <= 255; i++) {
        console.log(i)
    }
}
Print1To255()



// 2. Print Odds 1 - 255
// PrintOdds1To255()
// Print all odd integers from 1 to 255.

function PrintOdds1To255() {
    for (var i = 1; i <= 255; i += 2) {
        console.log(i)
    }
}
PrintOdds1To255()


// 3. Print Ints and Sum 0 - 255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far. 

function PrintIntsAndSum0To255() {
    var sum = 0
    for (var i = 0; i <= 255; i++) {
        sum += i
        console.log(i, sum)
    }
}
PrintIntsAndSum0To255()



// 4. Iterate and Print Array
// Iterate through a given array, printing each value.
//     PrintArrayVals(arr)

function PrintArrayVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
PrintArrayVals([1, 2, 3, 4, 5])




// 5. Find and Print Max
// PrintMaxOfArray(arr)
// Given an array, find and print its largest element. 

function PrintMaxOfArray(arr) {
    var max = arr[0]
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
console.log(PrintMaxOfArray([1, 2, 30, 40, 5]))




// 6. Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average. 

function PrintAverageOfArray(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    var average = sum / arr.length
    return average
}
console.log(PrintAverageOfArray([1, 2, 3, 4, 5]))




// 7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255(inclusive).  

function ReturnOddsArray1To255() {
    var newArray = []
    for (var i = 1; i <= 255; i += 2) {
        newArray.push(i)
    }
    return newArray
}
console.log(ReturnOddsArray1To255())


// 8. Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values. 

function SquareArrayVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i]
    }
    return arr
}
console.log(SquareArrayVals([1, 2, 3, 4, 5]))



// 9. Greater than Y
// ReturnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y. 

function ReturnArrayCountGreaterThanY(arr, y) {
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++
        }
    }
    return count
}
console.log(ReturnArrayCountGreaterThanY([10, 20, 30, 40, 50], 22))




// 10. Zero Out Negative Numbers
// ZeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero. 

function ZeroOutArrayNegativeVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0
        }
    }
    return arr
}
console.log(ZeroOutArrayNegativeVals([-1, -2, 3, -4, -5]))




// 11. Max, Min, Average
// PrintMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.

function PrintMaxMinAverageArrayVals(arr) {
    var max = arr[0]
    var min = arr[0]
    var sum = arr[0]
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
        sum += arr[i]
    }
    var average = sum / arr.length
    console.log(max, min, average)
    return (max, min, average)
}
PrintMaxMinAverageArrayVals([1, 2, 3, 4, 5])




// 12. Shift Array Values
// ShiftArrayValsLeft(arr)
// Given an array, move all values forward(to the left) by one index, dropping the first value and leaving a 0(zero) value at the end of the array.

function ShiftArrayValsLeft(arr) {
    for (var i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i]
    }
    arr[arr.length - 1] = 0
    return arr
}
console.log(ShiftArrayValsLeft([1, 2, 3, 4, 5]))



// 13. Swap String For Array Negative Values
// SwapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.

function SwapStringForArrayNegativeVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo"
        }
    }
    return arr
}
console.log(SwapStringForArrayNegativeVals([1, -2, 3, -4, 5]))





// Fizz Buzz
// Write a function that prints the numbers from 1 to 100. For multiples of three print “Fizz” instead of the number, for multiples of five print “Buzz” instead of the number, and for numbers which are multiples of both three and five print “FizzBuzz” instead of the number.

function fizzBizz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0) { //make this the first else if
            console.log("Fizz")
        }
        else if (i % 5 == 0) {
            console.log("Buzz")
        }
        if (i % 3 == 0 && i % 5 == 0) { //Make this the first one to run
            console.log("FizzBuzz")
        }
        //put console.log(i) inside an else. It will on print the number if it doesnt meet the other conditions.
    }
}
console.log(fizzBizz())



//The DecoderRing here will accept a code array and, using the order of the alphabet, print the decoded string to the console. 
//Give lines 3-12 a run to check it out!
function DecoderRing(codeArray) {
    var alphabet = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var decodedString = ""
    for (let i = 0; i < code.length; i++) {
        decodedString += alphabet[code[i]]
    }
    console.log(decodedString)
}
var code = [8, 5, 12, 12, 15, 0, 23, 15, 18, 12, 4]
DecoderRing(code)


function encoderRing(string) {
    var alphabet = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    // Given the working Decoder Ring, now work backwards and create a function that will create a code array from a string! 
}
console.log(encoderRing())


//Hint: Code is case sensitive and our alphabet array is all lowercase.

var string = "NBA"
string.toLowerCase() //this will convert a string to lowercase!
console.log(string)


function deepCode(String) {
    var message = "Blackwell"  //My message that I want to appear
    var encryptedCode = []      //Place to put my coded numbers into
    var alphabet = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for (let i = 0; i < string.length; i++) {   //Not sure where to start on a string.
        if (alphabet[i] == message[i]) {        //
            encryptedCode.push[i]
        }
        console.log(encryptedCode)
    }
    return encryptedCode
}
var message = "Blackwell"
deepCode(message)

//nest loop is going to be used. 




