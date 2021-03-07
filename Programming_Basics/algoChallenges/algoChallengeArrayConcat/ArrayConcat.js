// Algorithm Challenge: Array Concat
// arrConcat(arr1, arr2)
// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays.

// For example: arrConcat( ['a', 'b'], [1, 2] ) should return new array ['a', 'b', 1, 2].


function arrConcat(arr1, arr2) {
    var newArray = arr1                      //By setting arr1 to a variable, we can focus on arr2.
    for (var i = 0; i < arr2.length; i++) {    //Because arr1 is seperated, our range to test can be focused on arr2.
        newArray.push(arr2[i])
    }
    return newArray
}
console.log(arrConcat(['a', 'b'], [1, 2]))

