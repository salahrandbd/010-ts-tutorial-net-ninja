// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
import { Invoice } from "./classes/invoice.js";

interface Person {
  name: string,
  age: number,
  speak(text: string): void,
  spend(amount: number): number
};

const person: Person = {
  name: 'yoshi',
  age: 20,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent ', amount);
    return amount;
  }
}

let greeting: (a: Person) => void;

greeting = (p: Person): void => {
  console.log(p.name, ' is ', p.age, ' years old!');
}

greeting(person);

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