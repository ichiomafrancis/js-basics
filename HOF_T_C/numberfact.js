function numberFact(number, fn) {
  console.log(fn(number));
}

// numberFact(59, isEven);
// numberFact(59, isOdd);
numberFact(59, isPrime);

function isEven(number) {
  if (number !== NaN && number !== 0 && number % 2 === 0) {
    return true;
  }
  return false;
}

function isOdd(number) {
  if (number !== NaN && number !== 0 && number % 2 !== 0) {
    return true;
  }
  return false;
}

function isPrime(number) {
  if (number === 0 || number === 1) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}
