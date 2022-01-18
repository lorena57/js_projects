// LECTURE: Values and Variables
// let country = 'USA';
// let continent = 'North America';
// let population = 371107709;
// let population = 10;

// console.log(country, continent, population);

// LECTURE: Data Types
// let isIsland = false;
// let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// LECTURE: let, const and var
// language = 'English';
// language = 'Spanish';
// console.log(language);

// LECTURE: Basic Operators
// population += 1;
// console.log(population);

// const finland = 6000000;
// console.log(finland > country);

// averagePop = 33000000;

// console.log(averagePop < country);

// let description =
//   'Portugal is in Europe, and its 11 million people speak Portugese';

// let newDescription = `${description}`;

// console.log(newDescription);

// LECTURE: Taking Decisions: if / else Statements
// if (population <= 13) {
//   console.log("Portugal's population is above average");
// } else {
//   console.log("Portugal's population is 22 million below average");
// }

// LECTURE: Type Conversion and Coercion
// let testOne = '9' - '5';
// console.log(String(testOne), testOne);

// let testTwo = '19' - '13' - '17';
// console.log(testTwo);

// let testThree = 5 + 6 + '4' + 9 - 4 - 2;
// console.log(testThree);

// //

// let numNeighbors = prompt(
//   'How many neighbors countries does your country have?'
// );

// if (numNeighbors == 1) {
//   console.log('Only 1 border');
// } else if (numNeighbors >= 1) {
//   console.log('More that 1 border');
// }

// LECTURE: The switch Statement

// const languageOne = 'spanish';

// switch (languageOne) {
//   case 'chinese':
//     console.log('Most number of native speakers');
//     break;
//   case 'spanish':
//     console.log('2nd place in number of native speakers');
//     break;
//   case 'english':
//     console.log('3rd place');
//     break;
//   case 'hindi':
//     console.log('number 4');
//     break;
//   case 'arabic':
//     console.log('5th most spoken language');
//     break;
//   default:
//     console.log('Great language too');
//}

// LECTURE: The Conditional (Ternary) Operator
// const currentPop =
//   population >= 33000000
//     ? "Portugal's population is above average"
//     : "Portugal's population is below average";

// console.log(currentPop);

// LECTURE: Functions;
// function describeCountry(country, population, capitalCity) {
//   const countryInfo = `${country} has ${population} and its capital city is ${capitalCity}`;
//   return countryInfo;
// }

// let scenerioOne = describeCountry('United States', '33 million', 'Sacramento');
// console.log(scenerioOne);

// LECTURE: Function Declarations vs. Expressions

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

let lies = percentageOfWorld1(33000000000);

console.log(lies);

// let anotherOne = function (population) {
//   return (population / 7900) * 100;
// };
// let anotherTwo = anotherOne(33000000057);

// console.log(anotherTwo);

// LECTURE: Arrow Functions

// const percentageOfWorld3 = (population) => (population / 7900) * 100;
// const testOneTwo = percentageOfWorld3(33555555555999997);
// console.log(testOne);

// LECTURE: Functions Calling Other Functions
// function describePopulation(country, population) {
//   const newTstFunction = percentageOfWorld1(population);
//   const description = `${country} has ${population} million people, which is ${newTstFunction}  of the world`;
//   console.log(description);
// }

// console.log(describePopulation('USA', 2));

// let populations = [15, 30, 1000, 5000];

// console.log(populations.length === 4);

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];

// console.log(percentages);

// LECTURE: Introduction to Objects
let myCountry = {
  country: 'United States',
  capital: 'Washington D.C',
  language: 'English',
  population: 331002651,
};

// console.log(myCountry);

// LECTURE: Dot vs. Bracket Notation

let countryInfo = `${myCountry.country} capital is ${myCountry.capital}, as of today the ${myCountry.country} has a population of ${myCountry.population}`;
console.log(countryInfo);

myCountry.population = 332002651;
console.log(myCountry);

myCountry['population'] = 331002651;
console.log(myCountry);
