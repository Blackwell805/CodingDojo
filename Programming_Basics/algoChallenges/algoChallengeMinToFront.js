// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

// Pseudo Code 
// 1. Build function
// 2. set up for loop. 
// 3. set up minimum variable. Set to arr[0]. For loop will have i=1,
// 4. set up an if statement, checking to see if i is less than arr[0].
// 5. set minimum variable to equal arr[i]. Return minimum.
// 6. Create another for loop. This is to move it to arr[0] index. 
// 7. 

//My attempt. I tried intermixing Messiah's with mine. 
function minToFront(arr) {
    var min = arr[0]
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i + 1] = arr[i]
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    arr.pop()
    arr[0] = min
    console.log(arr)
}

minToFront([4, 2, 1, 3, 5])


//Messiah's code!
function minToFront(arr) {
    var min = arr[0]
    for (var i = arr.length - 1; i >= 0; i--) { //Doing the code block like this will read the array right to left!
        arr[i + 1] = arr[i]   //
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    arr.pop()
    arr[0] = min
    console.log(arr)
}
minToFront([5, 93, 22, 4, 100, -1, -21]) //This code doesn't fully work. When trying to run [4, 2, 1, 3, 5], it doesn't run correctly.




//Ciso's solution
function pushFront(arr, val) {
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i + 1] = arr[i]
    }
    arr[0] = val
}

function minToFront(arr) {
    var min = arr[0]
    var minIdx = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    for (var j = minIdx; j < arr.length; j++) {
        arr[j] = arr[j + 1]
    }
    arr.pop()
    pushFront(arr, min)
    console.log(arr)
}

minToFront([4, 2, 1, 3, 5])