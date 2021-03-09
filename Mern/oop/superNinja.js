class Ninja {
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`Hello, I am ${this.name} `);
    }
    showStats(){
        console.log(`Name: ${this.name}, Health:  ${this.health}, Speed:  ${this.speed}, Strength: ${this.strength}`);
    }
    drinkSake(){
        this.health += 10
        // console.log(this.health)
    }
}

const ninja1 = new Ninja('Hyabusa', 50);
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()

class Sensai extends Ninja {
    constructor(name, health = 200, speed = 10, wisdom = 10){
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }
    speakWisdom(){
        this.drinkSake();
        console.log('What one programmer can do in one month, two programmers can do in two months.')
        // console.log(this.drinkSake)
    }
}

const superSensai = new Sensai('Master Splinter');
superSensai.speakWisdom();
superSensai.showStats();