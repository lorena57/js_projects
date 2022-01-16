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

function cutFruitPieces(fruit) {
  return fruit * 2;
}

function juiceMaker(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const newJuice = `I made the juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return newJuice;
}

console.log(juiceMaker(5, 10));

const newCalcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirementAgain = function (birthYear, firstName) {
  const eda = newCalcAge(birthYear);
  const retirement = 65 - eda;
  return retirement;
};

console.log(yearsUntilRetirementAgain(2000, 'Jane'));
