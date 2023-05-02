// function signature

// example 01
let greet: (a: string, b: string) => void 
greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

// example 02
let calc: (a: number, b: number, c: string) => number 
calc = (numOne: number, numTwo: number, action: string) => {
  if(action == 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

// example 03
let logDetails: (obj: { name: string, age: number }) => void 
logDetails = (obj: { name: string, age: number }) => {
  console.log(`${obj.name} is ${obj.age} years old!`);
}