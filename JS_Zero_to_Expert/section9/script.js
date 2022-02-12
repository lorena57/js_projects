'use strict';

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// let [main, , secondary] = restaurant.categories;

// console.log(main, secondary);

//Switching arrays Example 1
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Switching arrays example 2
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

//Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [1, 2, [4, 5]];

// const [i, , j] = nested;

// console.log(i, j);

// const newlyNested = ['One', 'Two', 'Three', ['Four', 'Five']];

// const [a, b, , [c, d]] = newlyNested;

// console.log(a, b, c, d);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 14,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ingred1, ingred2, ingred3) {
    console.log(
      `Here is your delicious pasta with ${ingred1}, ${ingred2}, and ${ingred3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

//Destructuring

//Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

//SPREAD, because on the RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

//REST, because on the LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

//EXAMPLE of the REST operator
// const [pizza, risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(1, 4);
// add(1, 2, 3, 4, 5);
// add(9, 8, 7, 6, 5, 4, 3, 2, 1);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via delSole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// Mutating variables
// let a = 111;
// let b = 222;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);

// console.log(a, b);
// console.log(obj);

//Mutating nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;

// console.log(o, c);

//spread operator
// const arr = [7, 8, 9];

// const newArr = [1, 2, 3, 4, 5, 6, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

//copy array
// const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// Iterables: arrays, strings, maps, sets . NOT OBJECTS

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1"),
//   prompt('Ingredient 2'),
//   prompt('Ingredient 3'),
// ];

// restaurant.orderPasta(...ingredients);

//Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurant.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

//-----OR-----
console.log(true || 0);
console.log(undefined || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

//---AND-----
//&& short circuits when the 1st operator is true, the last value is returned
console.log(0 && 'Minnie');
console.log(7 && 'Minnie');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// I can use the && statement instead of writing an if statement, like the above
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
