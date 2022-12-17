class Ninja {
    constructor(name, health, velocity = 3, force = 3){
        this.name = name;
        this.health = health;
        this.velocity = velocity;
        this.force = force;
    }

    sayName() {
        console.log(`Hi! My name is ${this.name}`);
    }

    showStats(){
        console.log(`Ninja ${this.name}:\nHealth: ${this.health}\nVelocity: ${this.velocity}\nForce: ${this.force}
        `);
    }

    drinkSake(){
        this.health += 10;
    }

}

ninja1 = new Ninja('Dojo', 4, 5);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
