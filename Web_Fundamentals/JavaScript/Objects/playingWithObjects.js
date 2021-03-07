// Objectives

// Practice iterating through an array of objects/dictionaries.
// Imagine that you are given an array of objects.  For example,

var users = [
    {
        name: "Michael",
        age: 37
    },
    {
        name: "John",
        age: 30
    },
    {
        name: "David",
        age: 27
    }
];

// console.log(users[0].age)
// console.log(users[0].name)
for (var i = 0; i < users.length; i++) {
    console.log(users[i].name, users[i].age)
}



// How would you print/log John's age?
// How would you print/log the name of the first object?
// How would you print/log the name and age of each user using a for loop?  Your output should look something like this


Michael - 37
John - 30
David - 27

