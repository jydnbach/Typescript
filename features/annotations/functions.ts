// expects to return number (inference)
const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number) => {};
// void

//// anoynymous function ////
function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

//// void and never ////
const logger = (message: string): void => {
  console.log(message);
};
// it's not gonna return anything

const throwError = (message: string): never => {
  throw new Error(message);
};
//////////
