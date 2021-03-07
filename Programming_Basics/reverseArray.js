

//Write a function that, given an array, reverses the order of the elements in that array, in place.
// This is a common interview question. 
//"in place" means do not create a new array.
//Write out the pseudo code first and then into actual code. In interviews, they are just as pleased if you can write things out in pseudo code as they would in code, maybe even more so. 


//var newArray = [] WE ARE NOT DOING THIS! THIS IS NOT WHAT IS ASKED FOR THE ABOVE ALGO PROBLEM!
//make a for loop that starts at the end and pushes each element into the new array.



reverse[1, 2, 3, 4, 5] into[5, 4, 3, 2, 1]

//Swap first position with last position
//Swap second position with second-to-last position
//etc. until I get halfway(you do this by dividing the arr.length by)




function reverseInPlace(arr) {
    var temp
    for (var i = 0; i < arr.length / 2; i++) {  //add math.floor(arr.length/2) IF you have an odd numbered array. 
        temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
        console.log("Loop no: " + i + ":" + arr) //This is only to show us what is happening and how it is happening.
    }
    return arr
}
var arr = [1, 2, 3, 4, 5, 6]
console.log(reverseInPlace(arr))





