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
        console.log('Name: ' + this.name + ', Health: '  +  this.health + ', Speed:' +  this.speed + ', Strength:' + this.strength);
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
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
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