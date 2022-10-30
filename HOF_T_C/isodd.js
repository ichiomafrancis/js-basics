function isOdd(number) {
  if (number !== NaN && number !== 0 && number % 2 !== 0) {
    return true;
  }
  return false;
}

let checkOdd = isOdd(14);
console.log(checkOdd);
