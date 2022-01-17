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

// let dolphins = (96 + 108 + 89) / 3;
// let koalas = (88 + 91 + 110) / 3;

// My solution:
// if (dolphins > koalas) {
//   console.log('Dolphis win');
// } else if (dolphins == koalas) {
//   console.log('we have a draw');
// }

// if (dolphins > koalas) {
//   console.log('Dolphis win');
// } else if (koalas > dolphins) {
//   console.log('we have a draw');
// } else if (dolphins === koalas) {
//   console.log('we have a draw');
// }

// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `The bill was $${bill}, the tip was $${tip}, and the total value $${
//     bill + tip
//   }`
// );

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const dolphinsScore = calcAverage(44, 23, 71);
// const koalasScore = calcAverage(65, 54, 49);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Dolphins win ${avgKoalas} vs ${avgDolphins}`);
//   } else {
//     console.log('no team wins');
//   }
// }

// console.log(checkWinner(dolphinsScore, koalasScore));

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

let bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);
