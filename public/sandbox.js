"use strict";
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        console.log(`${this.client} owes $${this.amount} for ${this.details}`);
    }
}
const invOne = new Invoice('yoshi', 'portfolio website', 200);
const invTwo = new Invoice('luigi', 'digital marketing', 300);
const invoices = [];
invoices.push(invOne, invTwo);
console.log(invoices);
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
