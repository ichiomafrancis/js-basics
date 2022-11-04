//// METHOD 1
function findIndex(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i])) return i;
  }
}

//// METHOD 2
// function findIndex(arr, fn) {
//   let found = arr.findIndex(fn);
//   console.log(found);
// }

// let found = findIndex([8, 11, 4, 27], function (val) {
//   return val >= 10;
// });

let found = findIndex([8, 11, 4, 27], function (val) {
  return val === 5;
});

console.log(found);
