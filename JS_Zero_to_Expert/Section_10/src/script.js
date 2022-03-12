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

const delta = {
  airline: 'Delta',
  iataCode: 'DT',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
  },
};

delta.book(123, 'Minnie Mouse');
