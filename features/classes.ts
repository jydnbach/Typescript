class Vehicle {
  //initial function
  constructor(public color: string) {} // public modifier is a shortcut for boilerplate

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
// vehicle.honk(); // not allowed bc honk is protected
console.log(vehicle.color);

// class Car extends Vehicle {
//   private drive(): void {
//     // private doesn't mean security. it restricts developers to call it
//     console.log('vroom'); // overrides Vehicle
//   }

//   startDrivingProcess(): void {
//     this.drive();
//     // this.honk(); // not allowed
//     this.honk; // thanks to protected
//   }
// }

// // const vehicle = new Vehicle();
// // vehicle.drive();
// // vehicle.honk();

// const car2 = new Car();
// car2.startDrivingProcess();
// // car2.honk();
