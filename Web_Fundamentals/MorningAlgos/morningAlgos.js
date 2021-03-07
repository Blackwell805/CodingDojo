
//Challenge 1
function a(arr) {
    var b = arr.length;

    var temp = arr[b - 1];
    arr[b - 1] = arr[0];
    arr[0] = temp;
    return arr;
}

console.log(a[1, 2, 3]);
console.log(a[2, 4]);


//Challenge 2
function b(arr) {                   //MEMORIZE THIS FUNCTION
    var x = arr.length;

    for (var i = 0; i < x / 2; i++) {
        var temp = arr[x - 1 - i];  //This function isn't useful. BUT if we take away the x-1 and just have arr[i], then it's VERY useful. This would then reverse the order. 
        arr[i] = arr[x - 1 - i];
        arr[x - 1 - i] = temp;
    }
    return arr
}

console.log(b([1, 2, 3]));
console.log(b([1, 2, 3, 4, 5]));

////////////////////////////////////////

//

// Challenge 1
function test(arr) {
    var length = arr.length;

    for (var i = 0; i < length; i++) {
        console.log(i);

        for (var j = 0; j < length - i - 1; j++) {
            console.log(j);
        }
    }
}


test([10, 5, 2]);
test([3, 5, 2, 0]);

//challenge 2
function something(items) {
    var length = items.length;

    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length - 1 - i; j++) {
            if (items[j] > items[j + 1]) {
                var temp = items[j]; // these 3 lines
                items[j] = items[j + 1]; // should look
                items[j + 1] = temp; // familiar already
            }
        }
    }

    return items;
}

var a = something([5, 2]);
console.log(a);

var b = something([5, 2, 1]);
console.log(b);



//challenge 1
var x = 5;
function a() {
    x = 10;
}
console.log(x);
a();
console.log(x);


// Challenge 2
var x = 5;
function a() {
    x = 10;
}
console.log(x);
x = a();
console.log(x);

//challenge 3
var x = 5;
function a() {
    x = 10;
    return x + 5;
}
console.log(x);
x = a();
console.log(x);




Warm up: print all the values in an array using a for loop
Example:
    var arr = [5, 8, 29, 17, 3]
console should read:
5
8
29
17
3
var arr = [5, 8, 29, 17, 3];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// CHALLENGE ONE:
// Given an array, print out the values in the array as well as
//     the sum of all the values

// var myArray = [4, 10, 6, 2, 9]
// Console should look something like this:
// value: 4, sum: 4
// value: 10, sum: 14
// value: 6, sum: 20
// value: 2, sum: 22
// value: 9, sum: 31

// Hint: you can console.log strings and values together using
// syntax like this:
// console.log("Some words " + myVal + " some more words " + anotherVal)
// Be mindful of where you ""s are located!

//My answer
// myArray = [4, 10, 6, 2, 9]
// var sum = 0
// for (var i = 0; i < myArray.length; i++){
//     sum = sum + myArray[i]
// console.log("Array Value: " + myArray[i] + " Total Sum: " + sum)
// }



// CHALLENGE 2:
// Given an array, multiply each value in the array by its index position and
// console.log the modified array

// var someArray = [2, 5, 14, 3, 7]
// You should console.log an array that looks like this: [0, 5, 28, 9, 28]
// Because:
// 2 * 0 = 0
// 5 * 1 = 5
// 14 * 2 = 28
// 3 * 3 = 9
// 7 * 4 = 28

// Hint, think about when someArray[someIndexValue] is representing the VALUE
// or the LOCATION-- how can we SET a position to a certain value USING the
// value that is already there ?


// var someArray = [2, 5, 14, 3, 7]
// var newArray = someArray[0]
// for (var i = 1; i < someArray.length; i++) {
//     newArray = someArray[i] * someArray[i]
//     return console.log(newArray)
// }



// function buMeRedBull(money)
// money -= costofDrink




// "CHALLENGE" 1
// Push a value into an array
// Given: var arr = [1,2,3,4], push in the value 5 and console.log the modified array [1,2,3,4,5]
// Notice how with the built in push method, the value is always added to the back

var Array = [1, 2, 3, 4];

Array.push(5)
console.log(Array)


// CHALLENGE 2
// Given an array and a value, push the new value to the FRONT of the array -- remember 
// that the built in push function adds to the back!! So how can you add a value to the 
// FRONT of an array?
// Given: var arr = [2,3,4,5] and the value var num = 1, return an array => [1,2,3,4,5] 
// which has the new value pushed into the front of the array

//my attempt
// var Array = [2, 3, 4, 5]

// function beginnings(arr, num) {
//     var newArray = []
//     var temp = Array;
//     newArray.push(num);
//     newArray.push(temp);
//     return newArray;
// }
// console.log(beginnings(Array, 1))



var Array = [2, 3, 4, 5]
function beginnings(arr, num) {
    var newArray = [];
    newArray.push(num)
    for (var i = 0; i < arr.length; i++) {
        newArray.push(arr[i]);
        console.log(arr[i], newArray)
    }
    return newArray
}
console.log(beginnings(Array, 1))




// It’s New Year’s Eve, so let’s play some dice games! It’ll be fun. What could go wrong?

// Challenge 1
// Create function rollOne() to return a randomly selected integer between 1 and 6 (inclusive).

function rollOne() {
    return Math.floor(Math.random() * 6 + 1)
}
rollOne()

// Hint: You might want to look up Javascripts Math.random() function!

// Challenge 2
// Second, create a function playFives(num), which should call rollOne() multiple times – ‘num' 
// times, in fact, where 'num' is input parameter to playFives(num). Each time, it should print 
// the value rollOne() returns, and if that return value is 5, also print “That’s good luck!”

function rollOne() {
    return Math.floor(Math.random() * 6 + 1)
}
rollOne()

function playFives(num) {
    var x = rollOne()
    for (var i = 0; i < num; i++) {
        if (x === 5)                                //NEED TO FINISH THIS
    }
    return
}
playFives(5)


// Challenge 3
// Third, create a new function named playStatistics(), which should call rollOne() eight times 
// (but not print anything after each call). After the last of these eight calls, it should print 
// out the lowest and highest values that it received from rollOne, among those eight calls.

function rollOne() {
    return Math.floor(Math.random() * 6 + 1)
}
rollOne()

function playStatistics(num) {
    var highest = 0
    var lowest = 0
    var x = rollOne()
    for (var i = 0; i < num; i++) {
        if ()                                       //NEED TO FINISH THIS
    }
}
playStatistics(8)



// Change.Change is inevitable(especially when breaking a twenty).Make generateCoinChange(cents).
// Accept a number of American cents, compute and print how to represent that amount with 
// smallest number of coins. Common American coins are pennies(1 cent), nickels(5 cents),
//     dimes(10 cents), quarters(25 cents), and a dollar(100 cents).

/*
// pseudo code
create the function. 
use a for loop to sift through the value given into function.
if statements and conditionals will be needed. 
modulos will be used to differentiate cent values.
*/


function generateCoinChange(cents) {
    var quarters = 0
    var dimes = 0
    var nickels = 0
    var pennies = 0
    while (cents > 0) {

        if (cents % 25 == 0) {
            quarters += 4
        }
        else if (cents % 10 == 0) {
            dimes += 10
        }
        else if (cents % 5 == 0) {
            nickels += 20
        }
        else if (cents % 1 == 0) {
            pennies += 100
        }
    }
    var collection = [quarters, dimes, nickels, pennies]
    console.log(collection)
    return collection
}
var amountReturned = 1.00
generateCoinChange(amountReturned)
