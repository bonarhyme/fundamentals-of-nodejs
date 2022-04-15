// Functions in JS/NodeJs

const firstName = "Ikenna";
const lastName = "Uche";
const age = 50;

// Concatenation in JS/NodeJs
const getUserDetails = firstName + " " + lastName + " is " + age;
// console.log(getUserDetails);

function generateUser(firstName, lastName, age) {
  return firstName + " " + lastName + " is " + age;
}

const chidi = generateUser("Chidiebere", "Okeke", 47);
const ebuka = generateUser("Ebuka", "Ben", 76);
// console.log(ebuka);

const addTwoNumbers = 1 + 2;
// console.log(addTwoNumbers);

function addTwoNum(num1, num2) {
  return num1 + num2;
}

const exam1 = addTwoNum(10, 67);
// console.log(exam1);

const exam2 = addTwoNum(-5, 0.78);
// console.log(exam2);

function powerful(name, num1, num2) {
  const theQuestion =
    name + " asks the value of " + num1 + " multiplying " + num2;

  return theQuestion;
}

console.log(powerful("Ikenna", 3, 18));

//Note:  Keywords in js e.g let, const, var, function, class, for, forEach, return etc
