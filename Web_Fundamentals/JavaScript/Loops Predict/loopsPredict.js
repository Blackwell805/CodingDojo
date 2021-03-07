//1
for (var num = 0; num < 15; num++) {
    console.log(num);
}

//prediction
//It's going to print out numbers 0-15
//outcome
//I was right except for the last number being listed was 14 and not 15.

//2
for (var i = 1; i < 10; i += 2) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

//prediction
//I think only 3 and 9 will show since the modulo is set divisible by 3. 
//outcome
//I was correct!

//3
for (var j = 1; j <= 15; j++) {
    if (j % 2 == 0) {
        j += 2;
    }
    else if (j % 3 == 0) {
        j++;
    }
    console.log(j);
}

//prediction
//2,6,10 will be printed out because if a number goes through the if or else if, it is still added one more from the for loop.
//outcome
//1,4,5,8,10,11,14,16    I did not expect this. Not sure why 2 and 6 were not printed out.