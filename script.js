function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

// let audi = new Car("audi", "r8");
// console.log(audi.getMakeModel());

function SportsCar(make, model, topSpeed) {
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

SportsCar.prototype = Object.create(Car.prototype);

SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// let f1 = new SportsCar("benz", "race1", 220);
// console.log(f1.getTopSpeed());

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
