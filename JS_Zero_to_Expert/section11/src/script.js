'use strict';

//SLICE

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));

//The end parameter is not included
// 2 and 4 is really just 2 and 3.
console.log(arr.slice(2, 4));

console.log(arr.slice(-2));

console.log(arr.slice(1, -2));

//SPLICE
//SPLICE mutates the array

console.log(arr.splice(2));
//-1 removes the last item from the array
arr.splice(-1);
