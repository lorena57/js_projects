'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//   numPassengers = numPassengers || 1;
//   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   console.log(bookings);
//   bookings.push(booking);
// };

// createBooking('MC123');
// createBooking('123456');
// createBooking('ABCDEF');

// const flight = 'LH234';

// const whoAmI = {
//   name: 'Minnie Mouse',
//   passport: 461484521,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LA123';
//   passenger.name = 'Mrs.' + passenger.name;

//   if (passenger.passport === 461484521) {
//   } else {
//     alert('wrong passport!');
//   }
// };

// checkIn(flight, whoAmI);
// console.log(flight);
// console.log(whoAmI);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(whoAmI);
// checkIn(flight, whoAmI);

//Difference between first-class and higher order functions

//Call back functions

// const oneWord = function (str) {
//   return str.replace(/ /g, ' ').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer("I'm the best!", upperFirstWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

//greetHey is the function inside of greet
//Call the function below to understand

// const greetHey = greet('Hey');

// greetHey('Minnie');
// greetHey('Mickey');

//Arrow function example 1
// const regreet = (greeting) => {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };

//Arrow function example 2
// const regreet = (greeting) => (name) => console.log(`${greeting} ${name}`);

// const greetHey = regreet('Hey');

// greetHey('Minnie');
// greetHey('Mickey');

// const delta = {
//   airline: 'Delta',
//   iataCode: 'DT',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: ` ${this.iataCode}${flightNum}`, name });
//   },
// };

// delta.book(123, 'Minnie Mouse');
// delta.book(123, 'Mickey Mouse');

// console.log(delta.bookings);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = delta.book;

//Does NOT work
//book(23, 'Sarah Williams')

//Call method
// book.call(eurowings, 23, 'Sarah Williams');

// console.log(eurowings);

//Bind method
// const bookEW = book.bind(eurowings);
// const bookDT = book.bind(delta);

// bookEW(753, 'Nancy Williams');
// bookDT(951, 'Chance Smith');

// const bookWE58 = book.bind(eurowings, 99);
// bookWE58('Martha Stewart');
// bookWE58('Rocky Balboa');

//partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));

//Immediately invoked function expressions (IIFE)
// const runOnce = function () {
//   console.log('This will never run again');
// };

// runOnce();

//Immediately invoked function expressions (IIFE)
//The function is wrapped in parenthesis and is called after the bracket

//Regular IIFE
// (function () {
//   console.log('This will never run again');
// })();

//Arrow function IIEF
// (() => console.log('This will never run again'))();
