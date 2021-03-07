// Array: Push Front
// Given array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

/*Pseudocode
design a function named pushFront that accepts two parameters - an array and a value. 
[5,93,22,4]
[5,5,93,22,4]
[100,5,93,22,4]

//arr[i+1] = arr[i]
*/

function pushFront(arr, val) {
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i + 1] = arr[i]
        console.log(i, arr)
    }
    arr[0] = val
    console.log(arr)
}
pushFront([5, 93, 22, 4], 100)



// Array: Push Front
// Given array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.




function pushFront(arr, val) {
    for (i = arr.length - 1; i >= 0; i--) {  //To push front, we must start on the right side of the array
        arr[i + 1] = arr[i]  //This step adds another arr spot while pushing values to the right.
        console.log(i, arr)
    }
    arr[0] = val //This is the final step to making t
    return arr
}
console.log(pushFront([5, 93, 22, 4], 100))


function pushFront(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        arr[i + 1] = arr[i]
        console.log(i, arr)
    }
    arr[0]= val
    return arr
}
console.log(pushFront([5, 93, 22, 4], 100))