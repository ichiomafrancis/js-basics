//// METHOD 1
function find(arr, fn) {
  for (let val of arr) {
    if (fn(val)) return val;
  }
}

//// METHOD 2
// function find(arr, fn) {
//   for (var i = 0; i < arr.length; i++) {
//     if (fn(arr[i])) return arr[i];
//   }
// }

//// METHOD 3
// function find(array, fn) {
//   let found = array.find(fn);
//   console.log(found);
// }

let found = find([8, 11, 4, 27], function (val) {
  return val >= 10;
});

// let found = find([8, 11, 4, 27], function (val) {
//   return val === 5;
// });

console.log(found);
