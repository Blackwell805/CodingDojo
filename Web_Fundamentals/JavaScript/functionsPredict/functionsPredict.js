//1 Predict
function greeting() {
    return "Hello";
    console.log("World");
}
var word = greeting();
console.log(word);

//I naturally want to say this will print Hello World but the return is being asked first before the console.log of World. World Hello may be the answer?
//outcome
//World was not shown since it was not returned and within the for loop. Only Hello was printed.

//2 Predict
function add(num1, num2) {
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3, 5);
var result2 = add(4, 7);
console.log(result1);
console.log(result2);
//result1 console.log will show sum returned of 8 and result2 will show 11.
//outcome
//I was correct on the results but did not mention that the scripts console.logged would show as well

//3 Predict
function highFive(num) {
    for (var i = 0; i < num; i++) {
        if (i == 5) {
            console.log("High Five!");
        }
        else {
            console.log(i);
        }
    }
}
//I think that nothing is going to be shown since the function is not called for.
//outcome
//I was correct. 