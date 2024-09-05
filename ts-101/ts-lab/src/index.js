
class Vehicle {
  constructor(make, model, wheels) {
    this.status = "stopped";
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  start() {
    this.status = "started";
  }

  stop() {
    this.status = "stopped";
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make, model, 4); // Changed "four" to 4 to represent a number
  }
}

class MotorCycle extends Vehicle {
  constructor(make, model) {
    super(make, model, 2);
  }
}

function printStatus(vehicle) {
  if (vehicle.status === "started") {
    console.log("The vehicle is running.");
  } else {
    console.log("The vehicle is stopped.");
  }
}

const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase()); // Corrected "toUppercase()" to "toUpperCase()"

const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1; // Wheels is already a number, so no need for parseInt
console.log(myBuick.wheels);
console.log(myBuick.model); // Corrected "mdl" to "model"
