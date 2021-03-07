
// Algorithm Challenge: Insert At
// insertAt(arr, idx, val)
// Given an array, index, and a value, insert the value into the array at the given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

// For example, insertAt([5, 93, 22, 4], 2, 100) should return [5, 93, 100, 22, 4].

function insertAt(arr, idx, val) {
    for (var i = arr.length - 1; i >= idx; i--) {
        arr[i + 1] = arr[i]  //confused on how this occurs
        console.log(arr)
    }
    arr[idx] = val
    console.log(arr)
}

insertAt([5, 93, 22, 4], 2, 100)








// Given an array, index, and a value, insert the value into the array at the given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
// For example, insertAt([5, 93, 22, 4], 2, 100) should return [5, 93, 100, 22, 4].


function insertAt() {
    for ()
}