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

//Enhanced object literal
//You can call the object inside the restaurant object
const specialty = {
  Italian: 'Pizza',
  American: 'Hot Dogs',
};

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
  specialty,
};

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

restaurant.specialty;

//Optional Chaining
//If anything before the ? exists ('mon') then the open property will be read and if it doesn't exist undefined will come up
console.log(restaurant.openingHours.mon?.open);

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
// console.log(true || 0);
// console.log(undefined || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

//---AND-----
//&& short circuits when the 1st operator is true, the last value is returned
// console.log(0 && 'Minnie');
// console.log(7 && 'Minnie');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// I can use the && statement instead of writing an if statement, like the above
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//?? Nullish Coalescing Operator
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
//   // numGuests: 0,
// };

// const rest2 = {
//   name: 'Da Resturant',
//   owner: 'Mike',
// };

//OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//if it is false it will assign 10
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

//AND assignment operator

//if it is truthy it will add anonymous, if it is false it will leave it blank
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

//Optional Chaining

//Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

//Arrays
// const users = [{ name: 'Minnie', email: 'minnie@disney.com' }];
// console.log(users[0]?.name ?? 'The user array is empty');

const weekdays = ['mon', 'tue', 'wed', 'thru', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: { open: 12, close: 22 },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

// Loop through Property Names

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// for (const day of properties) {
//   openStr += `${day},`;
// }
// console.log(openStr);

// Loop through Property Values
// const values = Object.values(openingHours);
// console.log(values);

//Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries)
//   console.log(`On ${key} we open as ${open} and close at ${close}`);

//Object Iteration
// const toDo = {
//   Monday: 'Study',
//   Tuesday: 'Read',
//   Wednesday: 'Notes',
//   Thursday: 'Cram',
//   Friday: 'Pray',
//   Weekend: ['Chow down', 'Drink', 'Sleep'],
// };

// const values = Object.values(toDo);
// console.log(values);

// const testing = Object.entries(toDo);
// console.log(testing);

// for (const [key, activity] of testing)
//   console.log(`On ${key} I need to ${activity}`);

//Sets
//Sets are iterable
// const orderSet = new Set([
//   'Pizza',
//   'Pasta',
//   'Calzone',
//   'Garlic Bread',
//   'Pasta',
//   'Calzone',
// ]);

// orderSet.add('Meatballs');
// orderSet.delete('Pasta');
// orderSet.clear();
// console.log(orderSet);
// console.log(orderSet.size);
// console.log(orderSet.has('Calzone'));
// console.log(orderSet.has('Meatballs'));

// for (const order of orderSet)
//   console.log(
//     `I can't decide what to choose from the menu, which should I choose ${order}?`
//   );

// console.log(new Set('Minnie'));

// const staff = ['Waiter', 'Chef', 'Manager', 'Waiter', 'Chef'];

//use the spread operator to create a new array
// const uniqueStaff = [...new Set(staff)];

// console.log(uniqueStaff);

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Fireenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest);

//sets can be chained
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

//To get the key you use 'get'
console.log(rest.get('name'));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//to see if a map has a key
console.log(rest.has('categories'));
//to delete
rest.delete(2);
//how many items 'keys'
console.log(rest.size);

//To clear out all the contents of a map
// rest.clear()

const arr = [1, 2];
rest.set(arr, 'Test');

console.log(rest.get(arr));

const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Jave'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

console.log(question);

//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));

//Quiz question
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//Convert map to array
console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());

const newMap = new Map([
  [1, 'JavaScript'],
  [2, 'HTML'],
  [3, 'CSS'],
]);

console.log(newMap);

console.log([...newMap]);

console.log(newMap.values());

//Arrays vs Sets
//Arrays
// Use when need ordered list of values
//Use then you need to manipulate data

//Sets
//When you need to work with unique values
//Use when high-performance is really important
//Use to move duplicate from arrays
