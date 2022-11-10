/*
8.	findIndex
Write a function called findIndex. It should take in an array and a callback and return the index of first value found in the array that matches the condition.
// returns 1 (index of the first value greater than or equal to 10)
findIndex([8,11,4,27], function(val){return val >= 10});

findIndex([8,11,4,27], function(val){return val === 7}); // undefined

*/

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
