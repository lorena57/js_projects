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

const flight = 'LH234';

const whoAmI = {
  name: 'Minnie Mouse',
  passport: 461484521,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LA123';
  passenger.name = 'Mrs.' + passenger.name;

  if (passenger.passport === 461484521) {
  } else {
    alert('wrong passport!');
  }
};

checkIn(flight, whoAmI);
console.log(flight);
console.log(whoAmI);
