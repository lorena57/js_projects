// LECTURE: Values and Variables
let country = 'USA';
let continent = 'North America';
let population = 371107709;

console.log(country, continent, population);

// LECTURE: Data Types
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// LECTURE: let, const and var
language = 'English';
language = 'Spanish';
console.log(language);

// LECTURE: Basic Operators
population += 1;
console.log(population);

const finland = 6000000;
console.log(finland > country);

averagePop = 33000000;

console.log(averagePop < country);

let description =
  'Portugal is in Europe, and its 11 million people speak Portugese';

let newDescription = `${description}`;

console.log(newDescription);

// LECTURE: Taking Decisions: if / else Statements
if (population <= 13) {
  console.log("Portugal's population is above average");
} else {
  console.log("Portugal's population is 22 million below average");
}
