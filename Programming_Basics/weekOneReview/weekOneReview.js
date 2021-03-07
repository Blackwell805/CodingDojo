/*Programming Basics Week One Review

//Code Flow
Code is read and executed from top to bottom.
Important- Not necessarily linear.
Functions are executed if and when they are called/invoked.
For loops and while loops are executed iteratively.

//Variables and Data Types
Booleans(true/false), strings (QUOTATION MARKS ""), numbers (5,6.78), null (placeholder), undefined (probably did something wrong), arrays ([5,3,9,"Austin",false,[1,2,3, [7,8,9]]])

var mySting = 'This is a string with spaces.'

//Conditionals


// Operators(such as =, ==, ===, &&, ||, !, +=, ++,-=,--,*=,/=, and %)


Loops(including FOR,WHILE,BREAK,CONTINUE)
Functions (including input parameters and the return value)
Arrays
T-diagrams
Comments

Modulo

Threes and Fives
Create threeFives() that finds and counts how many values from 1 from 100 (inclusive) are evenly divisible by 3 and evenly divisible by 5. Display the final sum in the console.

Design a function with no parameters.
create a variable to keep track of how many values are divisible by three. 
create a variable to keep track of how many values are divisible by five.
create a for loop.
define the limits of the loop. (start = 1, end <= 100).
find every number that is divisible by three.
Increment the threeCount variable.
Find every number that is divisible by five.
Increment the fiveCount variable. 
After the for loop, log the count variables to the console. 
Call the function.


Second: Create betterThreeFives(start,end) that allows you to enter arbitrary start and end values for your range. Think of threeFives() as better betterThreeFives(1,100).


JavaScript Math Library:
floor
ceil
round
trunc
random

Scope:
A variable declared within a function is not visible outside it, but a variable declared outside a function can be visible inside it.

Concatenator +  -----> This allows to where you can add string with numbers 

Double equal == converts both sides of the operator to the same data type before comparison
Triple equal === does not. It checks for equivalence of both value and data type, 


*/




// Create betterThreesFives(start, end) that allows you to enter arbitrary start and end values for your range.
// Think of threesFivesCount() as betterThreesFivesCount(1, 100).

function threesFivesCount(arr) {
    var threeCount = 0
    var fiveCount = 0
    for (var i = 1; i <= 100; ++i) {
        if (i % 3 === 0) {
            ++threeCount
        }
        if (i % 5 === 0) {
            ++fiveCount
        }
    }
    console.log("The number of three multiples is " + threeCount + ", the number of five multiples is " + fiveCount + ".")
}

threesFivesCount()



// Rockin’ the Dojo Sweatshirt
// Ever since you arrived at the Dojo, you wanted one of those cool Coding Dojo sweatshirts – maybe even more than one. Let’s say they cost $20 (including tax), but friendly Josh gives a 9% discount if you buy two, a nice 19% discount if you buy three, or a sweet 35% discount if you buy four or more. He only accepts cash and says he doesn’t have coins, so you should round up to the nearest dollar. Build function sweatshirtPricing(num) that, given a number of sweatshirts, returns the cost.




function sweatshirtPricing(num) {
    var cost = 20
    if (num === 1) {
        return cost
    }
    else if (num === 2) {
        cost = (cost * 2) - (cost * 2 * .09)
        cost = Math.ceil(cost)
        return cost
    }
    else if (num === 3) {
        cost = (cost * 3) - (cost * 3 * .19)
        cost = Math.ceil(cost)
        return cost
    }
    else if (num >= 4) {
        cost = (cost * num) - (cost * num * .35)
        return Math.ceil(cost)
    }
}

console.log(sweatshirtPricing(4))



//Another way to do it!
function sweatshirtPricing(num) {
    var $money = null
    var sweatshirtCost = 20
    if (num == 1) {
        $money = sweatshirtCost
    }
    if (num == 2) {
        $money = Math.ceil(num * (sweatshirtCost * .91))
    }
    if (num == 3) {
        $money = Math.ceil(num * (sweatshirtCost * .81))
    }
    if (num >= 4) {
        $money = Math.ceil(num * (sweatshirtCost * .65))
    }
    return $money
}
console.log(sweatshirtPricing(2))

//Narciso's way to do it!
function sweatshirtPricing(qty) {
    var finalCost = 0
    var unitCost = 20
    var subTotal = qty * unitCost
    if (qty === 2) {
        finalCost = subTotal - (subTotal * .09)
    }
    else if (qty === 3) {
        finalCost = subTotal - (subTotal * .19)
    }
    else if (qty >= 4) {
        finalCost = subTotal - (subTotal * .35)
    }
    else {
        finalCost = unitCost
    }
    finalCost = Math.ceil(finalCost)
    return ("Your total is $" + finalCost + ".00.")
}




//Not sure where this came from
function howMuchLeftoverCake() {
    var numberOfPieces = 12
    var numberOfPeople = 5
    var remainingCake = numberOfPieces % numberOfPeople
    if (remainingCake = 0) {
        return ("No leftovers for you!")
    }
    if (remainingCake <= 2) {
        return ("you have some left overs")
    }
    if (remainingCake >= 3 || remainingCake <= 5) {
        return ("You have leftovers to share")
    }
    else {
        return ("hold another party")
    }
}
console.log(howMuchLeftoverCake())