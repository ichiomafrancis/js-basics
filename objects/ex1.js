let address = { street: "lawanson", city: "lagos", zipcode: 101384 };

function showAddress(address) {
  for (let key in address) {
    console.log(key, ": " + address[key]);
    // console.log(address);
  }
}

showAddress(address);
