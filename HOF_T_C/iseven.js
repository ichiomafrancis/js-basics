function isEven(number) {
  if (number !== NaN && number !== 0 && number % 2 === 0) {
    return true;
  }
  return false;
}

let checkEven = isEven(3);
console.log(checkEven);
