// let firstName = 'Lorena';
// console.log(firstName);

// let javaScriptIsHard = true;
// console.log(javaScriptIsHard);

// javaScriptIsHard = "I'm here to learn!";
// console.log(javaScriptIsHard);

// let year;
// console.log(year);

// year = 2022;
// console.log(year);

// let age = 18;
//let variable are mutable
// age = 19;
// console.log(age);

// const birthYear = 1957;
//const variable are immutable
// birthYear = 1975;

// const presentYear = 2037;

// const ageLenny = presentYear - 1980;
// console.log(ageLenny);

// const lastName = 'Smith';
// const firstName = 'Lenny';

// console.log(lastName + ' ' + firstName);

// let x = 10 + 5;
// x += 10; //+= is adding what is to the right of the operator, 25
// console.log(x);

// const firstName = 'Lenny';
// const lastName = 'Smith';
// const birthYear = 1980;
// const presentYear = 2057;

// const yourSelf = `I'm ${firstName} ${lastName} and I was born in ${birthYear} which makes me ${
//   presentYear - birthYear
// } years old.`;
// console.log(yourSelf);

// const presentAge = 15;

// const isOldEnough = presentAge >= 18;

// if (presentAge >= 18) {
//   console.log('Todd can start diving');
// } else {
//   const yearsLeft = 18 - presentAge;
//   console.log(`Todd is too young.  Wait another ${yearsLeft} years`);
// }

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);

// console.log(String(23), 23);

// console.log('23' - '10' - 3);
// console.log('23' + '10' + 3);
// console.log('23' * 3);

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

//Five falsy values: 0 , '' , undefined, null, NaN

// const money = 0;

// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log('You should get a job');
// }

// let height;
// if (height) {
//   console.log('Yay, Height is defined');
// } else {
//   console.log('Height is undefined');
// }

// const age = 21;

// if (age === 18) {
//   console.log('You can register to vote');
// } else {
//   console.log('You can now visit your local bar');
// }

// const favorite = Number(prompt("What's your favorite number?"));

// if (favorite === 7) {
//   console.log('Cool, you picked the right number');
// } else if (favorite === 5) {
//   console.log('You are on mark, you picked the right number');
// } else {
//   console.log('better luck next time');
// }

let hasDriversLicense = true;
let hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log('Sarah is able to drive');
} else {
  console.log('Someone else should drive');
}
