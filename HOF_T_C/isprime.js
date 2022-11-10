/*  
5.	isPrime
Write a function called isPrime which takes in a number and returns true if the number is a prime number (is greater than 1 and can only be divided in whole by itself and 1), otherwise returns false
isPrime(8); // false
isPrime(17); // true

*/

function isPrime(number) {
  if (number === 0 || number === 1) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

//// OR

// function isPrime(value) {
//   for(var i = 2; i <= Math.sqrt(value); i++) {
//       if(value % i === 0) {
//           return false;
//       }
//   }
//   return value > 1;
// }

console.log(isPrime(31));
