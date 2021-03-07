



//The Basic 13

//1    Print all the integers from 1 to 255. 


function Print1To255() { //defined the funtion and named it Print1to255
    for (var i = 1; i <= 255; i++) { //Set up our for loop, beginning i at 1 ending when i<=255, increasing i by 1 each loop
        console.log(i)
    }
}
Print1To255()




//2    Print all odd integers from 1 to 255.

function PrintOdds1To255() { //defined function and named it
    for (var i = 1; i <= 255; i += 2) { //set up our for loop, beginning i at 1 ending i <=255. increasing i by 2 each loop
        console.log(i) //console log i loop
    }
}
PrintOdds1To255() // call our function



//3    Print integers from 0 to 255, and with each integer print the sum so far.

function PrintIntsAndSum0To255() { //defined the function and named it
    var sum = 0 //defined the variable sum and assigned it a value of 0
    for (var i = 0; i <= 255; i++) { //set up for loop, beginning i at 0 ending when i is no longer <=255, increasing i by 1 each loop
        sum += i //sum + i, adjust sum each loop by adding i
        console.log(i, sum) //console log to show integer with associated sum after each loop
    }
}
PrintIntsAndSum0To255()

//4    Iterate through a given array, printing each value. 

function PrintArrayVals(arr) { //defined the function and named it
    for (var i = 0; i <= arr.length; i++) { //set up for loop to go through each index position in array
        console.log(i)  //console log each iteration 
    }
}
PrintArrayVals([1, 2, 3, 4, 5]) //called function with array 


//another way
// var myArray = [0, 69, 420, 365]
// function printArrayValue(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }
// printArrayValue(myArray)


//5    Given an array, find and print its largest element.

function printMaxOfArray(arr) { //created and named function
    var max = arr[0] //created a max variable and assigned arr[0] to account for beginning of array
    for (var i = 1; i < arr.length; i++) { //i was set to 1 since beginning of array was already created
        if (arr[i] > max) { // created if conditional. since max was set to begin array, every integer after would be compared 
            max = arr[i] //if the integer was larger than max, we reassigned that larger number to max
        }
    }
    console.log(max) //console log the max 
}
// OR you can have a variable assigned with an array and put that name into the function parenthesis
printMaxOfArray([2, 4, 6, 8, 10]) //called function



//Another way to do it
// var myArray = [8, 6, 3, 18, 99, 67, 150];
// function printMaxOfArray(arr) {
//     var max = arr[0]
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     console.log(max)
// }
// printMaxOfArray(myArray)

//6    Analyze an array’s values and print the average.

function PrintAverageOfArray(arr) {
    var sum = arr[0]
    for (var i = 1; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    var average = sum / arr.length  //question: Why can this not be declared before the for loop?
    console.log(average)
}

//var bigArray = [33, 44, 55, 66, 77] 
PrintAverageOfArray([33, 44, 55, 66, 77])


//pseudo code
//add all the numbers together
//keep track of the sum
//divide the sum by the amount of numbers

//Another way 
// function PrintAverageOfArray(arr) {
//     var sum = 0
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     console.log(sum / arr.length)
// }
// PrintAverageOfArray([1, 2, 3, 4, 5])


//7    Create an array with all the odd integers between 1 and 255 (inclusive).

function ReturnArray1To255(arr) {
    var newArray = []
    for (i = 1; i <= 255; i += 2) {
        newArray.push(i)  //.push adds the value inside the parenthesis to the end of the array.
    }
    console.log(newArray)
}

ReturnArray1To255()


//Another way 
// function ReturnArray1To255() {
//     var oddsArray = []
//     for (var i = 1; i <= 255; i += 2) {
//         oddsArray.push(i)
//     }
//     return oddsArray
// }

// console.log(ReturnArray1To255())


//8   Square each value in a given array, returning that same array with changed values.

function SquareArrayVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i] // 1 = 1x1 
    }
    return arr
}

goodArray = [1, 2, 3, 4, 5]
console.log(SquareArrayVals(goodArray))





//9   Given an array and a value Y, count and print the number of array values greater than Y. 

function ReturnArrayCountGreaterThanY(arr, y) {
    var count = 0    //need a variable to count the number of values >y
    // var newArray = []  //added to push more
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++
        }
        // if (arr[i] > y) {  //did this as an extra thing to do. Shows what values are >y.
        //     newArray.push(arr[i])
        // }
    }
    console.log(count)
}

ReturnArrayCountGreaterThanY([10, 20, 30, 40, 50], 20)

//Another one
//keep track of how many numbers are greater than y in a variable called count
//Iterate over the array
//compare each value to y
//If the value is greater than y, increment the count
//print count

function ReturnArrayCountGreaterThanY(arr, y) {
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++
        }
    }
    console.log(count)
}

ReturnArrayCountGreaterThanY([1, 2, 3, 4, 5, 6, 7], 3)


//10  Return the given array, after setting any negative values to zero.

//analyze given array. Check if numbers are < zero.
//set negative numbers to zero
//return array.
//print array.


function ZeroOutArrayNegativeVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    console.log(arr)
    return arr     //the return will give the value to the function but show unless called.
}
ZeroOutArrayNegativeVals([-1, -2, 3, -4, -5])


//11  Given an array, print the max, min and average values for that array.

//set code block. 

function PrintMaxMinAverageArrayVals(arr) {
    var max = arr[0]
    var min = arr[0]
    var sum = arr[0]
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i]
        var ave = sum / arr.length
        console.log(sum)
    }
    return [max, min, ave]
}
console.log(PrintMaxMinAverageArrayVals([1, 2, 3, 4, 5]))





// arr.length-1 will always stop at the last value in the array 

//12    Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.

//set up function. Set up code block.  

function ShiftArrayValsLeft(arr) {
    for (var i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];  //This is how you shift the values to the left!!!
    }
    arr[arr.length - 1] = 0  //this is how you make turn the last value into zero!!
    return arr
}

console.log(ShiftArrayValsLeft([1, 2, 3, 4, 5]))




//13     Given an array of numbers, replace any negative values with the string 'Dojo'.

function SwapStringForArrayNegativeVals(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo"
        }
    }
    console.log(arr)
    return arr
}

SwapStringForArrayNegativeVals([-1, 4, 2, 3, -2])


