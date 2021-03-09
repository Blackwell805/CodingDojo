
class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

//Ninja Cards
class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack(target) {
        target.resilience -= this.power
        if (target.resilience == 0) {
            console.log('Success!');
        } else {
            console.log(target.resilience)
        }
    }
}
const redbeltNinja1 = new Unit('Austin', 3, 3, 4);
const blackBeltNinja1 = new Unit('Cody', 4, 5, 4);

redbeltNinja1.attack(blackBeltNinja1);
//////////////////////////////////////////////////////////////////

//Effect Cards
class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text
        this.stat = stat
        this.magnitude = magnitude
    }
    play(target) {
        if (target instanceof Unit) {
            console.log(this.text);
            if (this.stat == "power") {
                target.power += this.magnitude
            }
            if (this.stat == "resilience") {
                target.resilience += this.magnitude
            }
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}
const hardAlgo = new Effect('AbbraCadabra', 2, "Increase target's resilience by  3", 'resilience', 3);
const unhandledPromiseRejection = new Effect('Hurt Feelings', 1, "Reduce target's resilience by 2", 'resilience', -2);
const pairedProgramming = new Effect('Team Power', 3, "Increase target's power by 3", 'power', 2)

hardAlgo.play(redbeltNinja1);
console.log(redbeltNinja1.resilience);
unhandledPromiseRejection.play(redbeltNinja1);
console.log(redbeltNinja1.resilience);
pairedProgramming.play(redbeltNinja1);
console.log(redbeltNinja1.power);
redbeltNinja1.attack(blackBeltNinja1);
console.log(blackBeltNinja1.resilience);


//Below is code that I wrote thinking was the correct way and it was not! lol 
/*
class UnhandledPromiseRejection extends Card {
    constructor(name, cost) {
        super(name, cost);
        this.cost = 1;
        this.text = "Reduce target's resilience by " + this.resilience;
        this.stat = 'resilience';
        this.magnitude = -2;
    }
    playHurtFeelings(target) {
        if (target instanceof UnitCard) {
            console.log(this.text);
            target.resilience - 1
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}
const hurtFeelings = new UnhandledPromiseRejection('Hurt Feelings')

class PairProgramming extends UnitCard {
    constructor(name, cost) {
        super(name, cost);
        this.cost = 3;
        this.text = "Increase target's power by " + this.power;
        this.stat = 'resilience';
        this.magnitude = +2;
    }
    playTeamPower(target) {
        if (target instanceof UnitCard) {
            console.log(this.text);
            target.resilience + 2
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}
const teamPower = new PairProgramming('Team Power')

redbeltNinja1.playHardAlgo();
*/