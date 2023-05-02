"use strict";
// function signature
// example 01
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 02
let calc;
calc = (numOne, numTwo, action) => {
    if (action == 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 03
let logDetails;
logDetails = (obj) => {
    console.log(`${obj.name} is ${obj.age} years old!`);
};
