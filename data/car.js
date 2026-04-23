export class Car {
    brand;
    model;
    speed

    constructor(carDetails) {
        this.brand = carDetails.brand;
        this.model = carDetails.model;
        this.speed = 174
    };

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
        console.log(`${this.brand} ${this.model} ${this.speed} km/h`)
    };


    
}
const car1 = new Car({brand: 'Toyota', model: 'Corolla'});
const car2 = new Car({brand: 'Tesla', model: 'Model 3'})

console.log(car1);
console.log(car2);
car2.go();
car1.brake();
car1.displayInfo();
car2.displayInfo()
