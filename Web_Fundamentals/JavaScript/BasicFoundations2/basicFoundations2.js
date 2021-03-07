

// 1. Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function biggieSize(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big"
        }
    }
    return arr
}
console.log(biggieSize([-1, 2, -3, 4, -5]))


// 2. Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function printLowReturnHigh(arr) {
    var lowest = 0
    var highest = 0
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i]
        }
        if (arr[i] < lowest) {
            lowest = arr[i]
        }
    }
    return [highest, lowest]
}
console.log(printLowReturnHigh([2, 8, -4, 7, 33]))

// 3. Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

function printOneReturnAnother(arr) {
    console.log(arr[arr.length - 2]);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1)
            return arr[i];
    }
}
console.log(printOneReturnAnother([2, 4, 11, 12, 20]))

// 4. Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubleVision(arr) {
    var newArray = []
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2
        newArray.push(arr[i])
    }
    return newArray
}
console.log(doubleVision([1, 2, 3, 4, 5]))

// 5. Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPositives(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
            console.log(count);
        }
        // arr[arr.length - 1] = count;
    }
    arr[arr.length - 1] = count;
    return arr;
}
console.log(countPositives([1, 2, 3, -4, -5]))


// 6. Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function evensOdds(arr) {
    var count1 = 0
    var count2 = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            count1++;
            count2 = 0  //we do this to make sure we reset the count for evens! same must be done for odds in the other if statement
            if (count1 == 3) {
                console.log("That's odd")
                count1 = 0
            }
        }
        else {
            count2++;
            count1 = 0
            if (count2 == 3) {
                console.log("Even more so!")
                count2 = 0
            }
        }
    }
}
evensOdds([1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 8, 9, 10])

// 7. Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function incrementTheSeconds(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 1) {
            arr[i] += 1
            console.log(arr[i])
        }
    }
    return arr
}
console.log(incrementTheSeconds([1, 2, 3, 4, 5]))



// 8. Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function previousLengths(arr) {
    var temp = arr[1]
    arr[1] = arr[0].length
    arr[2] = temp.length
    console.log(arr)
}

previousLengths(["hello", "dojo", "awesome"])


// 9. Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.


function addSeven(arr) {
    var newArray = []
    for (var i = 0; i < arr.length; i++) {
        arr[i] += 7
        newArray.push(arr[i]);
    }
    return newArray
}

console.log(addSeven([1, 2, 3, 4, 5]))


// 10. Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverseArray(arr) {
    var temp                                                //set a var temp
    for (var i = 0; i < Math.floor(arr.length / 2); i++) {  //if there is even arr.length, then arr.length/2 is fine
        temp = arr[i]                                       //set temp to be arr[i]
        arr[i] = arr[arr.length - 1 - i]                      //this switches values left to right
        arr[arr.length - 1 - i] = temp                        //values right to left become what temp was assigned to be

    }
    return arr
}
console.log(reverseArray([1, 2, 3, 4, 5]))


// 11. Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function outlookNeg(arr) {
    newArray = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = arr[i] * -1
        }
        newArray.push(arr[i])
    }
    return arr
}
console.log(outlookNeg([1, 2, -3, -4, 5]))




// 12. Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

function alwaysHungry(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'food') {
            console.log('Yummy!')
        }
        else {
            console.log("I'm hungry")
        }
    }
}
alwaysHungry([1, 'food', 3, 'food'])



// 13. Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

function swapTowardTheCenter(arr) {
    var temp
    for (var i = 0; i < arr.length / 2; i++) {
        temp = arr[i]                       //I'm close but I'm missing one step!!!!
        arr[i] = arr[arr.length - 1]
        arr[arr.length - 1] = temp
        console.log(arr)
        return arr
    }
}
swapTowardTheCenter([true, 42, "Ada", 2, "pizza"])
swapTowardTheCenter([1, 2, 3, 4, 5, 6])

function swapTowardTheCenter(arr) {
    var temp = arr[0];
    for (var i = 0, x = (arr.length - 1); i < x; i++, x--) {    //i is going right, x is going left
        if (i === 0 || i % 2 === 0) {       //This is what's causing the difference between indexes
            console.log(i)
            temp = arr[i];
            // console.log(temp);
            arr[i] = arr[x];
            arr[x] = temp;
            console.log(arr);
        }
    }
    return arr;
}
swapTowardTheCenter([true, 42, "Ada", 2, "pizza"])
// swapTowardTheCenter([1, 2, 3, 4, 5, 6])


// 14. Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scaleTheArray(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num
    }
    return arr
}
console.log(scaleTheArray([1, 2, 3], 2))