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

//Arrow function
let calc = (birthYear) => 2037 - birthYear;
const age3 = calc(2010);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2015, 'John'));
