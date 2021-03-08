

class Ninja {
    constructor(name){
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log('Hello , I am ', this.name + '.');
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