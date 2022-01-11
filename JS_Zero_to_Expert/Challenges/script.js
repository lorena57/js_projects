// console.log('testing');

// let markMass = 78;
// let johnMass = 92;

// let markHeight = 1.69;
// let johnHeight = 1.95;

// const markBMI = markMass / (markHeight * markHeight);
// const johnBMI = johnMass / (johnHeight * johnHeight);

// console.log(markBMI);
// console.log(johnBMI);

// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI ${markBMI} is higher than John's`);
// } else {
//   console.log(`John's BMI ${johnBMI} is higher than Mark's`);
// }

let dolphins = (96 + 108 + 89) / 3;
let koalas = (88 + 91 + 110) / 3;

// My solution:
// if (dolphins > koalas) {
//   console.log('Dolphis win');
// } else if (dolphins == koalas) {
//   console.log('we have a draw');
// }

if (dolphins > koalas) {
  console.log('Dolphis win');
} else if (koalas > dolphins) {
  console.log('we have a draw');
} else if (dolphins === koalas) {
  console.log('we have a draw');
}
