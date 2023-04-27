let greet: Function;

greet = () => {
  console.log('Hello World!');
}

// parameter type & default parameter value
// let add = (a: number, b: number, c?: number) => {
let add = (a: number, b: number, c: number = 30) => {
  return a + b;
}

// return type
let minus = (a: number, b: number): number => {
  return a - b;
}