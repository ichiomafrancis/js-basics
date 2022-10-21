//Using Factory Function
function address() {
  return {
    street: 'lawanson',
    city: 'lagos',
    zipcode: 101384,
  };
}

const address1 = address();
const address2 = address();

console.log(address1);
console.log(address2);

//Using Constructor Function
function Address() {
  (this.street = 'lawanson'), (this.city = 'lagos'), (this.zipcode = 101384);
}

const address3 = new Address();
const address4 = new Address();

console.log(address3);
console.log(address4);
// address1.country = 'Nigeria';
// console.log(address3);
