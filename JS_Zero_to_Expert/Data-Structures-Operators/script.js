'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

console.log(restaurant.order(2, 0));
// To destructure do the following:

// starter is the 2nd item from the array and 0 is the 1st item from the array;
const [starter, mainMeal] = restaurant.order(2, 0);
console.log(starter, mainMeal);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// const [x, y, z] is not an array, It's just a destructuring assignment
//  = arr is the array from which I want to get the data from
const [x, y, z] = arr;
// console.log(x, y, z);

// the multiple commas in the constant allows me to retrieve  the specific item from the array (I can skip items)

// main is Italian and secondary is Vegetarian (the , skips an object)
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switches variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//
