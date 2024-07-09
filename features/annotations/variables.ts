let apples = 5; // apples: number by default (type inference)
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1. function that returns the any type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json); // ts can't predict what type it is
// throws "any" so avoid it! (defeats purpose of using ts)
console.log(coordinates); // {x: 10, y: 20};
