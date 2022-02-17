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

// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// let bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(tips);

// const markMillerInfo = {
//   firstName: 'Mark',
//   lastName: 'Miller',
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const johnSmithInfo = {
//   firstName: 'John',
//   lastName: 'Smith',
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
//Original
// if (markMillerInfo.calcBMI() > johnSmithInfo.calcBMI()) {
//   console.log(
//     `Mark Millers BMI ${
//       markMillerInfo.bmi
//     } is higher John Smith's BMI ${johnSmithInfo.calcBMI()}`
//   );
// } else if (johnSmithInfo.calcBMI() > markMillerInfo.calcBMI()) {
//   console.log(
//     `John Smith's BMI ${johnSmithInfo.calcBMI()} is higher than Mark Millers BMI ${markMillerInfo.calcBMI()}`
//   );
// }

// markMillerInfo.calcBMI();
// johnSmithInfo.calcBMI();

// //Refactored
// if (markMillerInfo.bmi > johnSmithInfo.bmi) {
//   console.log(
//     `Mark Millers BMI ${markMillerInfo.bmi} is higher John Smith's BMI ${johnSmithInfo.bmi}`
//   );
// } else if (johnSmithInfo.bmi > markMillerInfo.bmi) {
//   console.log(
//     `John Smith's BMI ${johnSmithInfo.bmi} is higher than Mark Millers BMI ${markMillerInfo.bmi}`
//   );
// }

// markMillerInfo.calcBMI();
// johnSmithInfo.calcBMI();
// console.log(markMillerInfo.bmi);
// console.log(johnSmithInfo.bmi);

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];

// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Create one player array for each team
//Destructure the object to create 2 arrays
const [players1, players2] = game.players;

console.log(players1);
