/*  
6.	numberFact
Write a function called numberFact which takes in a number and a callback and returns the result of the callback with the number passed to it
numberFact(59,isEven); // false
numberFact(59,isOdd); // true
numberFact(59,isPrime); // true

*/

function numberFact(number, fn) {
  console.log(fn(number));
}

// numberFact(59, isEven);
// numberFact(59, isOdd);
numberFact(59, isPrime);

function isEven(num) {
  return num !== 0 && num % 2 === 0;
}

function isOdd(num) {
  return num !== 0 && num % 2 !== 0;
}

function isPrime(number) {
  if (number === 0 || number === 1) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}
