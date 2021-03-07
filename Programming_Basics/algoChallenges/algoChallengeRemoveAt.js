// Algorithm Challenge: Remove At
// removeAt(arr, idx)
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except for pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

// For example, removeAt([5, 93, 22, 4], 2) should return [5, 93, 4]. 


function removeAt(arr, idx) {
    for (var i = arr.length - 2; i >= idx; i--) {   //Doing this allowed me to directly deal with the specific array value in the index.
        arr[idx] = arr[arr.length - 1]        //I set the index value to be the last value in array
        // arr[i + 1] = arr[i]                 //I didn't even need this step. 
    }
    arr.pop()
    return arr
}
console.log(removeAt([5, 93, 22, 4], 2))



function removeAt(arr, idx) {
    var returnVal = arr[idx]
    for (var i = idx; i <= arr.length - 1; i++) {
        arr[i] = arr[i + 1]
        console.log(arr)
    }
    arr.length = arr.length - 1                     //removes the extra index without popping it off
    return [returnVal, arr]
}

console.log(removeAt([10, 20, 5, 30, 40], 2))