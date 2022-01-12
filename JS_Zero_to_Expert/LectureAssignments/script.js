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

// LECTURE: Type Conversion and Coercion
let testOne = '9' - '5';
console.log(String(testOne), testOne);

let testTwo = '19' - '13' - '17';
console.log(testTwo);

let testThree = 5 + 6 + '4' + 9 - 4 - 2;
console.log(testThree);

//

let numNeighbors = prompt(
  'How many neighbors countries does your country have?'
);

if (numNeighbors == 1) {
  console.log('Only 1 border');
} else if (numNeighbors >= 1) {
  console.log('More that 1 border');
}

// LECTURE: The switch Statement

const languageOne = 'spanish';

switch (languageOne) {
  case 'chinese':
    console.log('Most number of native speakers');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too');
}
