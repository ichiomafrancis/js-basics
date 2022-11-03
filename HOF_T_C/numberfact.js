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
