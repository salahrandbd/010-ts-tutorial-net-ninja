"use strict";
let greet;
greet = () => {
    console.log('Hello World!');
};
// parameter type & default parameter value
// let add = (a: number, b: number, c?: number) => {
let add = (a, b, c = 30) => {
    return a + b;
};
// return type
let minus = (a, b) => {
    return a - b;
};
