// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

character = 'mario';
// age = 'yogi';
// isLoggedIn = 20;

// arrays
let chars: string[] = [];

chars.push('saun');
// chars.push(20);

// unions
let random: string|boolean;

random = true;
random = 'random';
// random = 20;

let mixed: (number|boolean)[] = [];

mixed.push(20);
mixed.push(true);

// objects
let person: object;

person = [];

person = { name: 'mario', age: 20, beltColor: 'black' };

let person2: {
  name: string,
  age: number,
  beltColor: string
};

// person2 = { name: 'saun' };
person2 = { name: 'mario', age: 20, beltColor: 'black' };

