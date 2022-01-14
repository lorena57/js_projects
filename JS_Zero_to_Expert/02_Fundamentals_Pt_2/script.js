'use strict';

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// const appleJuice = fruitProcessor(5, 7);

console.log(fruitProcessor(5, 7));

const appleOrangeJuice = fruitProcessor(3, 5);
console.log(appleOrangeJuice);

//Function declaration
function calcAge1(birthYear) {
  return 2057 - birthYear;
}

let age1 = calcAge1(2022);
console.log(age1);

//Function expression
let tester = function (birthYear) {
  return 2057 - birthYear;
};

let age2 = tester(2022);

console.log(age2);
