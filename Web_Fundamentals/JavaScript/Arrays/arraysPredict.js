
//1 Predict
var arr = [8, 6, 7, 5, 3, 0, 9]
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//This will print out each value in the array.
//outcome 
//That was correct


//2 Predict
var arr = [7, 3, 8, 4, 2, 0, 1];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
    else {
        console.log("That is odd!");
    }
}
//"that is odd!",'that is odd!', 8, 4, 2, 0, 'that is odd!'
//outcome
//that was correct

//3 Predict
var arr = [1, 3, 8, -5, 0, -2, 4, -1];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if (arr[i] == 0) {
        arr[i] = "Zero";
    }
    else {
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);

//arr[5,2,1]
//newArr[-1,-3,-8,'Zero',-4]
//outcome
//I had somethings switched around. 