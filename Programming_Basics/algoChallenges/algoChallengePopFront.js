// Algorithm Challenge: Pop Front
// popFront(arr)
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

// For example, popFront([5, 93, 22, 4]) should return [93, 22, 4].

function popFront(arr) {
    for (var i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i]                 //Simply by shifting to the left, we eliminate OG arr[0].
    }                                       //arr.length-1 is the same value as the next lowest. This   is what we pop off!
    arr.pop()  //Be sure to execute pop off outside of the array. 
    return arr
}
console.log(popFront([5, 93, 22, 4]))