'use strict';

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// const appleJuice = fruitProcessor(5, 7);

console.log(fruitProcessor(5, 7));

const appleOrangeJuice = fruitProcessor(3, 5);
console.log(appleOrangeJuice);
