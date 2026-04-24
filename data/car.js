export class Car {
    brand;
    model;
    speed;

    constructor(carDetails) {
        this.brand = carDetails.brand;
        this.model = carDetails.model;
        this.speed = 0;
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
        console.log(`${this.brand} ${this.model} ${this.speed} km/h ${trunkStatus}`)
    };


    
}
const car1 = new Car({brand: 'Toyota', model: 'Corolla'});
const car2 = new Car({brand: 'Tesla', model: 'Model 3'})

console.log(car1);
console.log(car2);
car1.go();
car2.brake();
car2.openTrunk();
car1.displayInfo();
car2.displayInfo();

