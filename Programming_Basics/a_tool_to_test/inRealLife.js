

//In Real Life conditional 

var austin = 34
var alayne = 30
var heightAlayne = 65

if (alayne > austin && heightAlayne < 72) {
    console.log("LOL! She's old!")
} else if (alayne < austin && heightAlayne < 72) {
    console.log("Robbing the cradle bro!")
} else if (alayne < austin && heightAlayne > 72) {
    console.log("Nothing wrong with that!")
} else if (alayne == austin && heightAlayne >= 72) {
    console.log("Equal age, unequal height...I like it!")
} else {
    console.log("Oh, that's cool!")
}
