let arr = [8, 11, 4, 27];

function findIndex(arr, fn) {
  let found = arr.findIndex(fn);
  console.log(found);
}

findIndex([8, 11, 4, 27], function (val) {
  return val >= 10;
});

// findIndex([8, 11, 4, 27], function (val) {
//   return val === 5;
// });
