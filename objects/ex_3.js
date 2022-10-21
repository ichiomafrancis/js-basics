//Using Constructor Function
function Address() {
  (this.street = 'lawanson'), (this.city = 'lagos'), (this.zipcode = 101384);
}

const address1 = new Address();
const address2 = new Address();

// address2.street = 'ketu';
// address2.city = 'abuja';
// address2.zipcode = 123456;
// console.log(address2);
// TASK 1 - This function checks to see if two objects are equal by checking their properties, we need to make sure that all their properties are equal.
function areEqual(address1, address2) {
  if ((address1 == address2) == new Address()) {
    return true;
  }
  return false;
}

let propertyAndValueEquality = areEqual(address1, address2);
console.log(propertyAndValueEquality);

// TASK 2 -  This function simply tells us if address 1 and address 2 are pointed to the exact same object. In other words,they're referencing the same object.
// METHOD 1
// function areSame(address1, address2) {
//   return address1 == address2 ? true : false;
// }

// let equalityCheck = areSame(address1, address2);
// console.log(equalityCheck);

// METHOD 2
// function areSame(address1, address2) {
//   console.log(address1 == address2 ? true : false);
// }

// areSame(address1, address2);
