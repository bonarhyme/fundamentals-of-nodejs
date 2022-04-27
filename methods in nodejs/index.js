// 1. String Methods
// 2. Array methods
// 3. Objects

// const smallLetters = "abcd";

// a. toUpperCase
// const capitalLetters = smallLetters.toUpperCase();
// console.log(capitalLetters);

// b. toLowerCase
// const capitalLetters = "ABCD";
// const smallLetters = capitalLetters.toLowerCase();
// console.log(smallLetters);

// c. slice

const username = "JohnDoe";
// index 0, 1, 2...
// J in JohnDoe has index of 0
// n in JohnDoe has index of 3
// e in JohnDoe has index of 6

// Slice method takes in the index where you want it to start and the index where you want it to stop
// const firstName = username.slice(0, 4);
// console.log(firstName);
// const lastName = username.slice(4, 6 + 1);
// console.log(lastName);

// d. length
// const school = "Alvan";
// const schoolLength = school.length;
// console.log(schoolLength);
// e. toString()
const ht = 2;
// console.log(ht.toString());

// f. typeof
// const htToString = ht.toString();
// console.log(typeof htToString);

// const portfolio = {
//   name: "John Doe",
//   age: 55,
//   school: "Alvan Ikoku ",
//   address: "Ikenegbu",
//   likes: ["football", "food"],
//   "primary school attended": "Living Faith Pri. SCh.",
//   parent: {
//     mother: "Jane",
//     father: "Bill",
//   },
// };
// console.log(portfolio);

// Dot notation
// Access name

// console.log(portfolio.name);

// const theName = portfolio.name;
// console.log(theName);

// Bracket Notation
// Acces primary school attended

// const priSch = portfolio["primary school attended"];

// console.log(priSch);

// Access father
// const father = portfolio.parent.father;
// console.log(father);

// 3. Arrays
const likes = ["football", "food", "drinks", "reading"];

// console.log(likes[0]);
// console.log(likes[1]);

// Array methods

// 1. Push - Add from the last index
// 2. unshift - Add from the first index
// 3. pop - Remove and return last index
// 4. shift- Remove and return first index

// likes.push("Playing");

// likes.unshift("Dancing");

// const removed = likes.pop();
// console.log(removed);

const removed = likes.shift();

console.log(removed);
console.log(likes);
