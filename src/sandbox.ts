// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
import { Invoice } from "./classes/invoice.js";

const invOne = new Invoice('yoshi', 'portfolio website', 200);
const invTwo = new Invoice('luigi', 'digital marketing', 300);

const invoices: Invoice[] = [];
invoices.push(invOne, invTwo);

invoices.forEach(invoice => {
  console.log(invoice.client, invoice.amount, invoice.format());
});

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});