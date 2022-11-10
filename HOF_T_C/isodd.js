/*  
4.	isOdd
Write a function called isOdd which takes in a number and returns true if the number is odd and returns false if it is not
isOdd(3); // true
isOdd(14); // false

*/

function isOdd(num) {
  return num !== 0 && num % 2 !== 0;
}

console.log(isOdd(0));
