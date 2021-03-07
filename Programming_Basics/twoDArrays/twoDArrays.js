//what is a two-dimensional array? (2D)
//A two-dimensional array is an array that contains arrays as its elements. AKA a NESTED loop

//EXAMPLE:
//var my2DArray = [[1, -2, 3], [-4, 5, 6], [7, 8, -9]]

//zero out negative array values in a two-dimensional array.

//console.log(my2DArray[0][1])



function zeroOutNegArrayVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i][j] < 0) {
                arr[i][j] = 0
            }
        }
    }
    console.log(arr)
}
var my2DArray = [[1, -2, 3], [-4, 5, 6], [7, 8, -9]]
zeroOutNegArrayVals(my2DArray)



//Print Max of Array (2D Array)
//printMaxOf2DArray(arr)
//Given a two-dimensional array, find and print its largest element.

function printMaxOf2DArray(arr) {
    var max = arr[0][0]
    for (var i = 0; i < arr.length; i++) {
        console.log("i is " + i)
        for (var j = 0; j < arr[i].length; j++) {  //The arr[i] is important to remember so that it can go through the parent array
            console.log("j is " + j)
            if (arr[i][j] > max) {
                console.log("In the if block.")
                max = arr[i][j]
            }
        }
    }
    console.log(max)
}

var twoDArray = [[4, -2, 300, 1, 999], [4, -2, 300, 1, 1000]]
printMaxOf2DArray(twoDArray)
