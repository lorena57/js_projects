'use strict';

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 7);

// console.log(fruitProcessor(5, 7));

// const appleOrangeJuice = fruitProcessor(3, 5);
// console.log(appleOrangeJuice);

//Function declaration
// function calcAge1(birthYear) {
//   return 2057 - birthYear;
// }

// let age1 = calcAge1(2022);
// console.log(age1);

//Function expression
// let tester = function (birthYear) {
//   return 2057 - birthYear;
// };

// let age2 = tester(2022);

// console.log(age2);

//Arrow function
// let calc = (birthYear) => 2037 - birthYear;
// const age3 = calc(2010);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(2015, 'John'));

// function cutFruitPieces(fruit) {
//   return fruit * 2;
// }

// function juiceMaker(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const newJuice = `I made the juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//   return newJuice;
// }

// console.log(juiceMaker(5, 10));

// const newCalcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirementAgain = function (birthYear, firstName) {
//   const eda = newCalcAge(birthYear);
//   const retirement = 65 - eda;
//   return retirement;
// };

// console.log(yearsUntilRetirementAgain(2000, 'Jane'));

//Arrays
// const friends = ['Michael', 'Steven', 'Peter'];

// console.log(friends[friends.length - 1]);

// friends[2] = 'Eddie';

// console.log(friends);

// let variousTypes = ['Smith', 27, true];

// console.log(variousTypes);

// variousTypes[2] = false;

// console.log(variousTypes);

// const newFriend = friends.push('Frank');

// console.log(friends);
// console.log(newFriend);

// friends.unshift('Nancy');

// console.log(friends);

// friends.pop();
// console.log(friends);

// console.log(friends.lastIndexOf('Eddie'));

// if (friends.includes('Eddie')) {
//   console.log('I have a friend named Eddie');
// }

// const yodaArray = ['Baby Yoda', 2569, 'Master Teacher'];

// const babyYoda = {
//   name: 'Baby Yoda',
//   profession: 'Master Teacher',
//   yearBorn: 2569,
// };

// console.log(babyYoda);

// const babyYoda = {
//   name: 'Baby Yoda',
//   profession: 'Master Teacher',
//   yearBorn: 2569,
// };

// console.log(babyYoda.name);

// const interestedIn = prompt(
//   'What information do you want to know about baby Yoda?'
// );
// console.log(babyYoda[interestedIn]);

// babyYoda.shows = 'Mando';
// babyYoda['favoriteToy'] = 'knob';

// console.log(babyYoda);

// const babyYoda = {
//   name: 'Baby Yoda',
//   profession: 'Master Teacher',
//   yearBorn: 3569,

//   calcAge: function (yearBorn) {
//     return yearBorn - 2037;
//   },

//   calcAge: function () {
//     return 4096 - this.yearBorn;
//   },

//   calcAge: function () {
//     this.age = 4096 - this.yearBorn;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.name} is from a galaxy far away.  ${this.name} is a ${
//       this.profession
//     } who has great powers and has lived many years.  ${
//       this.name
//     } is ${this.calcAge()}`;
//   },
// };
// console.log(babyYoda.calcAge());
// console.log(babyYoda.age);
// console.log(babyYoda.getSummary());

// for (let i = 1; i <= 10; i++) {
//   console.log(`tsting ${i}`);
// }

const yodaArray = [
  'Baby Yoda',
  2569,
  'Master Teacher',
  ['Stars', 'Planets', 'Plains'],
];

const types = [];

for (let i = 0; i < yodaArray.length; i++) {
  console.log(yodaArray[i], typeof yodaArray[i]);

  types.push(typeof yodaArray[i]);
  //   types[i] = typeof yodaArray[i];
}
console.log(types);

const years = [1991, 2001, 2011, 2021, 2031];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

for (let i = 0; i < yodaArray.length; i++) {
  if (typeof yodaArray[i] !== 'string') continue;
  console.log(yodaArray[i], typeof yodaArray[i]);
}

for (let i = 0; i < yodaArray.length; i++) {
  if (typeof yodaArray[i] === 'number') break;
  console.log(yodaArray[i], typeof yodaArray[i]);
}
