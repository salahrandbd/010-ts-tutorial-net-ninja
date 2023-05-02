// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
import { Invoice } from "./classes/invoice.js";
;
const person = {
    name: 'yoshi',
    age: 20,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent ', amount);
        return amount;
    }
};
let greeting;
greeting = (p) => {
    console.log(p.name, ' is ', p.age, ' years old!');
};
greeting(person);
const invOne = new Invoice('yoshi', 'portfolio website', 200);
const invTwo = new Invoice('luigi', 'digital marketing', 300);
const invoices = [];
invoices.push(invOne, invTwo);
invoices.forEach(invoice => {
    console.log(invoice.client, invoice.amount, invoice.format());
});
const form = document.querySelector('.new-item-form');
// console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
