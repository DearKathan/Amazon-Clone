class Car {
  #brand = undefined;
  #model = undefined;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    if(!carDetails) {
      this.#brand = Car.brand;
      this.#model = Car.model;
    }
    else {
      this.#brand = carDetails.brand;
      this.#model = carDetails.model;
    }
  }

  displayInfo() {
    const trunkStatus = (this.isTrunkOpen) ? 'Open' : 'Closed';
    console.log(`${this.#brand} ${this.#model} Speed: ${this.speed} km/hr, Trunk Status: ${trunkStatus}`);
  }

  go() {
    if(!this.isTrunkOpen) {
      this.speed += 5;
    }

    if(this.speed > 200) {
      this.speed = 200;
    }
  }

  brake() {
    this.speed -= 5;
    if(this.speed < 0) {
      this.speed = 0;
    }
  }

  openTrunk() {
    if(this.speed === 0) {
      this.isTrunkOpen = true;
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car {
  acceleration;

  constructor(carDetails) {
    super(carDetails);
    if(!carDetails) {
      this.acceleration = RaceCar.acceleration;
    }
    else {
      this.acceleration = carDetails.acceleration;
    }
  }

  go() {
    this.speed += this.acceleration;
    if(this.speed > 300) {
      this.speed = 300;
    }
  }

  brake() {
    this.speed -= this.acceleration;
    if(this.speed < 0) {
      this.speed = 0;
    }
  }

  openTrunk() {
    console.log('Race Cars have no trunks');
  }

  closeTrunk() {
    console.log('Race Cars have no trunks');
  }

  displayInfo() {
    console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/hr`);
  }
}

const car1 = new Car({
  brand: 'Toyota',
  model: 'Corolla'
});

const car2 = new Car({
  brand: 'Tesla',
  model: 'Model 3'
});

const car3 = new Car();

car1.go();
car1.go();
car1.go();
car1.brake();

car1.openTrunk(); // Should be false as speed > 0 ('brake' just decreases the speed, it DOES NOT MAKE IT ZERO!)
car1.displayInfo();

car2.displayInfo();
car2.go();
car2.brake();
car2.brake();
car2.displayInfo(); 

car2.openTrunk(); // Should be true as speed = 0
car2.displayInfo();

car2.go(); // but this should not work as trunk is open
car2.displayInfo();

// car2.#model = 'Fals';
// car2.displayInfo();

car3.displayInfo();

const raceCar1 = new RaceCar({
  brand: 'McLaren',
  model: 'F1',
  acceleration: 20
});

const raceCar2 = new RaceCar();

raceCar1.go();
raceCar1.go();
raceCar1.displayInfo();
raceCar1.openTrunk();
raceCar1.go();
raceCar1.go();
raceCar1.closeTrunk();
raceCar1.displayInfo();
raceCar1.brake();
raceCar1.displayInfo();

raceCar2.displayInfo();

// raceCar1.#brand = 'Aston Martin';
// raceCar1.displayInfo();