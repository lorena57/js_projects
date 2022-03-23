'use strict';

//SLICE

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));

//The end parameter is not included
// 2 and 4 is really just 2 and 3.
// console.log(arr.slice(2, 4));

// console.log(arr.slice(-2));

// console.log(arr.slice(1, -2));

//SPLICE
//SPLICE mutates the array

// console.log(arr.splice(2));
//-1 removes the last item from the array
// arr.splice(-1);

//Reverse
//Reverse mutates the array
// let arr2 = ['j', 'i', 'h', 'g', 'f'];

// console.log(arr2.reverse());

//concat
// const letters = arr.concat(arr2);
//or you can
// console.log([...arr, ...arr2]);

//At method
// const arr = [23, 11, 64];
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]);
//Copy of the original array
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('Minnie'.at(0));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

//forEach
// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// });

//Map forEach
// const currencies = new Map([
//   ['USD', 'Unites States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

//Set (set only prints the unique value)
//Set forEach
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * euroToUsd;
});

console.log(movements);
console.log(movementsUSD);
