// // Practice question 1 - each, from Higher order functions

// function each(array, fn) {
//   for (let val of array) {
//     fn(val);
//   }
// }

// // each([1, 2, 3, 4], function (val) {
// //   console.log(val);
// // });

// // console.log(result);

// each([1, 2, 3, 4], function (val) {
//   console.log(val * 2);
// });

// // Practice question 2 - map, from Higher order functions

// function map(array, fn) {
//   let fresh = [];
//   for (let val of array) {
//     fn(val);
//     fresh.push(fn(val));
//   }
//   console.log(fresh);
// }

// map([1, 2, 3, 4], function (val) {
//   return val * 2;
// });

// Practice question 3 - reject, from Higher order functions

// Method 1
function reject(array, fn) {
  let filtered = new Set(array.filter(fn));
  let rejected = array.filter((num) => !filtered.has(num));
  console.log(rejected);
}

// reject([1, 2, 3, 4], function (val) {
//   return val > 2;
// });

reject([2, 3, 4, 5], function (val) {
  return val % 2 === 0;
});

// // If I have this array:
// var myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// // and this one:
// var toRemove = ['b', 'c', 'g'];

// myArray = myArray.filter(function (el) {
//   return toRemove.indexOf(el) < 0;
// });

// //OR

// myArray = myArray.filter(function (el) {
//   return !toRemove.includes(el);
// });
