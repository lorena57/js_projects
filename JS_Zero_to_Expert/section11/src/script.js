'use strict';

//SLICE

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));

//The end parameter is not included
// 2 and 4 is really just 2 and 3.
// console.log(arr.slice(2, 4));

// console.log(arr.slice(-2));

// console.log(arr.slice(1, -2));

//SPLICE
//SPLICE mutates the array

// console.log(arr.splice(2));
//-1 removes the last item from the array
// arr.splice(-1);

//Reverse
//Reverse mutates the array
// let arr2 = ['j', 'i', 'h', 'g', 'f'];

// console.log(arr2.reverse());

//concat
// const letters = arr.concat(arr2);
//or you can
// console.log([...arr, ...arr2]);

//At method
const arr = [23, 11, 64];
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
//Copy of the original array
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
