console.log('testing');

let markMass = 78;
let johnMass = 92;

let markHeight = 1.69;
let johnHeight = 1.95;

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);

console.log(markBMI);
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
