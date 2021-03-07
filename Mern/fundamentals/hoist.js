// GIVEN
console.log(example);
var example = "I'm the example!";
AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";
//The about will result in the var example being read but it won't have a definition.

console.log(example);
let example = "I'm the example!"; 
//The about will not run because the "example" is given a let designation which will not hoist it up. Therefore, console.log is trying to type something that the computer wasn't given information to type.

//1
console.log(hello); 
var hello = 'world'; 
//This is going to return undefined. 
//I was correct

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//This will present an error because a function is being called without it being designated as such. 
//This returned magnet
//You can call for the function before it is made?

//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//This will print first "only okay" and then it will print "super cool"
//It printed "super cool". Function print() was not called therefore "only okay" did not show.

//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//'chicken' will print, and then 'half-chicken' will print. 
//I was correct

//5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//This is will print "chicken" and then 'fish'. It won't print again because the function ended, along with the variable food.
//Nothing printed. Mean was not designated a function. 

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//This will print 'disco' because var genre will be hoisted. Then 'rock' and then 'r&b' will print. Then 'disco' will print again. 
//first 'disco' was not printed. Not sure why. Thought it would've been hoisted. Others did print. 

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//"san jose" will print. Then 'seattle' and 'burbank'. Then 'san jose' again. 

//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//Either this will not print and an error pops OR this will print 'true' and then an an error will pop because of dojo being listed as a const. 
//Nothing printed. TypeError: Assignment to constant variable.