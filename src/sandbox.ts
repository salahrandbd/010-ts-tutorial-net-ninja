// const anchor = document.querySelector('a')!;
// console.log(anchor.href);

class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(client: string, details: string, amount: number) {
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

const invoices: Invoice[] = [];
invoices.push(invOne, invTwo);

console.log(invoices);

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