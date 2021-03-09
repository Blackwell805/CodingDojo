

class Ninja {
    constructor(name,health,speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`Hello , I am ${this.name}`);
    }
    showStats(){
        console.log(this.name, this.health, this.speed, this.strength);
    }
    drinkSake(){
        this.health += 10
        console.log(this.health)
    }
}

const ninja1 = new Ninja('Hyabusa', 50);
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()