class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('vroom'); // overrides Vehicle
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car2 = new Car();
car2.drive();
car2.honk();
