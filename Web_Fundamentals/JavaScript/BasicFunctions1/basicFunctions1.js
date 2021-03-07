//total correct: 10/15

//1
function a() {
    return 35;
}
console.log(a())
//predict: This is going to print the return of 35
//outcome: I was correct

//2
function a() {
    return 4;
}
console.log(a() + a());
//Predict: result will show return of 4 + 4 which will print 8
//outcome: I was correct


//3
function a(b) {
    return b;
}
console.log(a(2) + a(4));
//predict:Answer will be 6
//outcome: I was correct

//4
function a(b) {
    console.log(b);
    return b * 3;
}
console.log(a(3));
//predict:Answer will be 9
//outcome:I was half right. Forgot to console.log the 3.

//5
function a(b) {
    return b * 4;
    console.log(b);
}
console.log(a(10));
//predict: I think 10 and 40 will print.
//outcome: I was wrong about the 10. The return nullified it. I was right about 40.

//6
function a(b) {
    if (b < 10) {
        return 2;
    }
    else {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
//predict: 15 is going to print
//outcome: I didn't catch the 4!

//7
function a(b, c) {
    return b * c;
}
console.log(10, 3);
console.log(a(3, 10));
//predict: This is going to print 10,3,30
//outcome: I was correct!

//8
function a(b) {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
//predict: Will print 3 and 4 since function wasn't called!
//outcome:I was correct!

//9
function a() {
    for (var i = 0; i < 10; i++) {
        i = i + 2;
        console.log(i);
    }
}
a();
//predict: It will print 2,5,8,11
//outcome: I was correct!

//10
function a(b, c) {
    for (var i = b; i < c; i++) {
        console.log(i);
    }
    return b * c;
}
a(0, 10);
console.log(a(0, 10));
//predict: I think it will print 0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0
//outcome: I was correct!

//11
function a() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            console.log(j);
        }
        console.log(i);
    }
}
//predict: Nothing will print since the function wasn't called for 
//outcome: I was correct!

//12
function a() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            console.log(i, j);
        }
        console.log(j, i);
    }
}
//predict: Nothing will print again. Function not called!
//outcome: I was correct!

//13
var z = 10;
function a() {
    var z = 15;
    console.log(z);
}
console.log(z);
//predict: 15 will print since z==15 in the loop but with no return, z=10. 10 will print as well.
//outcome: I was wrong! Only z from outside the loop was printed since the function wasn't called!

//14
var z = 10;
function a() {
    var z = 15;
    console.log(z);
}
a();
console.log(z);
//predict: 15,10 will print!
//outcome: I was correct! 

//15
var z = 10;
function a() {
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
//predict: 15,15,10 will print!
//outcome: 10 was not printed! I'm not sure why?