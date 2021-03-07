/*
1.create function
2.reward myself IF I finish my homework
3. Depending on time of day; latte before 10am; hot chocolate between times 10am to 4pm; ice cream between 4pm to 10pm; AFTER 10pm nothing but sleep!

*/

//My first attempt at the conditionals assignment
var finishedHomework = true
var latte = (0600 - 0999)
var hotChocolate = (1000 - 1600)
var iceCream = (1600 - 2199)
var sleep = (2200 - 0599)
var timeOfDay = Math.trunc(Math.random(time) * 2399)
function rewardMySelf() {      //this is going to require simpler arguments. each will have a && statement. 
    if (finishedHomework = true) {
        if (var i = 0; i < arr.length; i++) {

        }
        if (timeOfDay === latte) {
            console.log(`Love the early morning brew!`)
        }
        else if (timeOfDay === hotChocolate) {
            console.log(`I'm down for some Hot Choco!`)
        }
        else if (timeOfDay === iceCream) {
            console.log(`I've got a serious craving from Malted Moo!`)
        }
        else (timeOfDay === sleep); {
            console.log(`Time to catch some Z's!`)
        }
    }
    return timeOfDay
}

console.log(rewardMySelf(2100))


//My code. Completed up to feature one. Still need to Continue with Features 2 and 3.   
//Implementing Ernest's code with mine. 
var finishedHomework = true
function myReward(arr) {
    if (finishedHomework === true) {
        for (var i = 0; i <= arr.length; i++) {
            if (arr[0] < 1000) {
                return `Love the early morning brew!`
            }
            if (arr[0] >= 1000 && arr[0] < 1600) {
                return `I'm down for some Hot Choco!`
            }
            if (arr[0] >= 1600 && arr[0] <= 2000) {
                console.log(`I've got a serious craving for Ice Cream!`);
                if (arr[2] == "Wednesday") {
                    return `I think I'll get Strawberry!`
                }
                else
                    return `I think I'll get Vanilla!`
            }
            if (arr[0] > 2000) {
                return `Time to catch some Z's!`
            }
        }
    }
    else
        return `You gotta finish your homework!`
}

console.log(myReward([1640, true, "Wednesday"]))




//Ernest's way of doing it!
function lifeChoicesOfDrinks(arr) {
    if (arr[1] === true) {
        for (let i = 0; i <= arr.length; i++) {

            if (arr[0] < 1000) {
                return 'latte'
            }
            if (arr[0] >= 1000 && arr[0] < 1600) {
                return 'hot chocolate'
            }
            if (arr[0] >= 1600 && arr[0] <= 2000) {
                return 'ice cream'
            }
            if (arr[0] > 2000) {
                return 'sleep'
            }
        }
    }
    else {
        return 'You are not finished with your homework'
    }
}
console.log(lifeChoicesOfDrinks([2100, false]))







