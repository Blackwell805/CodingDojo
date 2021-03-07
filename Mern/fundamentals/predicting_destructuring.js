
//1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
//Nothing will print since the const is being called in brackets
//Misread. Not sure why Tesla is printed. Mercedes makes sense. 
//Doesn't matter the name, it's all about the commas.

//2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);
//First won't print. Second would print 'Elon'.
//You can log the value, but not the key

//3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
//First one will print '12345'. Second will not since it is not in the dictionary 
//correct

//4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);
//first will print '2', second will print '5', third will print '2'. False and then True. 


//5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const lastTest1 = {
    key: 'value',
    secondKey: [1, 6, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
//First will print 'value', second will print [1, 5, 1, 8, 3, 3],  third will print 1 , fourth will print '5'
//How does the JavaScript know which secondKey to run if there are two of the same const's?

