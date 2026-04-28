export class Car {
    #brand;
    #model;
    speed;

    constructor(carDetails) {
        this.#brand = carDetails.brand;
        this.#model = carDetails.model;
        this.speed = 10;
        this.isTrunkOpen = false
    };
    
    openTrunk() {
        if (this.speed > 0) {
            return;
        } this.isTrunkOpen = true
    }
    closeTrunk() {
        return this.isTrunkOpen = false
    }
    go() {
        this.speed +=5;

        if (this.speed > 200) {
            this.speed = 200;
        }
        
    }
    brake() {
        this.speed -=5;

        if (this.speed <=0) {
            this.speed = 0
        }
    }
    displayInfo() {
        const trunkStatus = this.isTrunkOpen ? 'open' : 'closed'
        console.log(`${this.#brand} ${this.#model} ${this.speed} km/h ${trunkStatus}`)
    };


    
}

class RaceCar extends Car {
    acceleration;

    constructor(carDetails) {
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }

    go() {
        if (this.speed <= 300) {
            this.speed += this.acceleration;
        } this.speed = 300
        
    }

    openTrunk() {
        console.log('Race cars do not have a trunk')
    }
    closeTrunk() {
        console.log('Race cars do not have a trunk')
    }
    
}

const car1 = new Car({brand: 'Toyota', model: 'Corolla'});
const car2 = new Car({brand: 'Tesla', model: 'Model 3'})
const raceCar = new RaceCar({brand: 'McLaren', model: 'F1', acceleration: 80})

console.log(car1);
console.log(car2);
console.log(raceCar);

car1.go();
car2.brake();
raceCar.go();
car2.openTrunk();
car1.displayInfo();
car2.displayInfo();
raceCar.displayInfo();

