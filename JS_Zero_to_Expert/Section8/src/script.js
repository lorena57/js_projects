'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Mickey';
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Minnie';
// calcAge(1991);

// TDZ (TEMPORAL DEAD ZONE)
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Minnie';
// let job = 'Disneyland';
// const year = 2000;

// console.log(addDelc(2, 3));

// console.log(addExpr(2, 3));

// console.log(addArrow(2, 3));

// function addDelc(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// console.log(numProducts);

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var x = 1;
// let y = 2;
// const x = 3;

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1995);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1995);

// function calcAge(birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// }
// calcAge(1995);

// const minnie = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// minnie.calcAge();

// const minnie = {
//   firstName: 'Minnie',
//   year: 1970,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
//   greet: function () {
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// minnie.greet();

// minnie.calcAge();

// const minnie = {
//   firstName: 'Minnie',
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);

//Solution 1
// const self = this;
// const isMillenial = function () {
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
// };
//Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },
// };

// minnie.calcAge();

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Minnie',
  age: 67,
};

const friend = me;
friend.age = 60;
console.log('Friend', friend);
console.log('Me', me);
