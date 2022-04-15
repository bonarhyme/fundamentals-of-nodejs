// 1. Comments

// This is my first comment - This is an inline comment in JS

/**
 * This is a block comment in JS. It is used to explain your code.
 */

// 2. Data types in JS
//      a. Strings: A string is a series of  characters enclosed in a single or double quote e.g "Ikenna" or 'Ikenna', "1234567", '0.786'

//      b. Numbers:  A number is just digits. They can have decimals or not e.g 1, 0.55, 234, 123e5, 345e-5

//      c. Booleans: A boolean has only two values namely: true or false

//      d. Arrays: Arrays are items or other data types seperated by commas and enclosed by square brackets.
// e.g ["Ikenna", '0.765', 1, 234, true, false]

//      e. Objects: Objects are written curly braces or brackets. Objects have value pairs seperated with commas.
// e.g {name: "Ikenna", age: 97, isDark: false, hobbies: ["reading", "football", 'music'], school: { primary: "Light tower", secondary: "Fun Avid", tertiary: "FUTO" } }

//      f. Undefined: Simply means undefined or indeterminate e.g 3/0

//      g. null: It means empty. e.g [], {}, null

// 3. Variables: Variables are containers for storing data or values.
//  Variables that can be changed can be declared with:

//  a. var e.g
var myName = "Ikenna";
var age = 50;
var isDark = false;
var likes = ["Books", "Food", "Football"];
var ikennaCv = {
  name: "Ikenna",
  age: 97,
  isDark: false,
  hobbies: ["reading", "football", "music"],
  school: { primary: "Light tower", secondary: "Fun Avid", tertiary: "FUTO" },
};

// var chidiCv = {
//     name: "Ikenna",
//     age: 97,
//     isDark: false,
//     hobbies: ["reading", "football", "music"],
//     school: { primary: "Light tower", secondary: "Fun Avid", tertiary: "FUTO" },
//   };

// b. let e.g
let myHouseAddress = "Owerri";

// myHouseAddress = "Uyo"

// Variables that cannot be changed. They are constants.
// const e.g
const street = "Ikenegbu";

// 4. Naming conventions:
//  a. camelCase
//  b. PaschalCase
//  c. snake_case
//  d. kebab-case

// 5. Operators:
//  a. Assignments is =
//  b. Addition is +
//  c. Multiplication *
//  d. Substraction -
//  e. Division /
//  f. Exponentiation **
//  g. Modulus (Division Remainder) %
//  h. Increment ++
//  i. Decrement --
//  j. Increment with any number: Prefix  += means
//  k. -= e.g x-=y means x = x - y
//  l. *= e.g x*=y means x = x * y
//  m. /= e.g x/=y means x = x / y
//  n. %= e.g x%=y means x = x % y
//  o. **= e.g x**=y means x = x ** y

// e.g of Addition:
const add = 1 + 3;
// console.log(add);

const multiply = 2 * 5 * 7;
// console.log(multiply);

const divideNumbers = 4 / 7;
// console.log(divideNumbers);

const substract = 4 - 5 - 7 - 8 - 100;
// console.log(substract);

const toPower = 2 ** 5;
// console.log(toPower);

const tryMod = 10 % 3;
// console.log(tryMod);

let inc = 10;
inc++;
let aIncrr = inc;

// console.log(aIncrr);

let dec = 10;
dec--;
let aDerr = dec;
// console.log(aDerr);

// Prefix  +=
let m = 2;
let b = 7;

// m = m + b;

// console.log(m);
// Instead of doing the above we can shorten it like this:
m += b;

// console.log(m);

// console.log() is used to print in the terminal e.g
// console.log("Hello World!");

// To run terminal do node theFileName.js e.g node index.js
