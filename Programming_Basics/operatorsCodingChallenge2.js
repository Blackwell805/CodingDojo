

var numberOfPieces = 12
var numberOfPeople = 5
function howMuchLeftoverCake() {
    if (numberOfPieces % numberOfPeople == 0) {
        console.log(`No leftovers for you!!!`);
    }
    if (numberOfPieces % numberOfPeople <= 2 && numberOfPieces % numberOfPeople > 0) {
        console.log(`You have some leftovers!`);
    }
    if (numberOfPieces % numberOfPeople >= 3 && numberOfPieces % numberOfPeople <= 5) {
        console.log(`You have left overs to share!!`);
    }
    if (numberOfPieces % numberOfPeople > 5) {
        console.log(`Hold another PARTY!!`)
    }
}
howMuchLeftoverCake()