// 'use strict';
// get the value from browser 
let x = prompt("enter your age")
// console.log(x);
// change the value type
x = Number(x)
console.log(typeof(x));
// calculate barth date
const dateOfBirth = 2025 - x
console.log(dateOfBirth);
// console.log( Boolean(0))

// loosely comparison
console.log(Boolean(x == 2));
//  strict comparison
console.log(Boolean(x === "2"));