/* 
3.	isEven
Write a function called isEven which takes in a number and returns true if the number is even and returns false if it is not
isEven(2); // true
isEven(3); // false

*/

// function isEven(number) {
//   if (number !== NaN && number !== 0 && number % 2 === 0) {
//     return true;
//   }
//   return false;
// }

// let checkEven = isEven(3);
// console.log(checkEven);

function isEven(num) {
  return num !== 0 && num % 2 === 0;
}

console.log(isEven(72));
