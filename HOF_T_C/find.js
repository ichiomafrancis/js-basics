let arr = [8, 11, 4, 27];

function find(arr, fn) {
  let found = arr.find(fn);
  console.log(found);
}

find(arr, function (val) {
  return val >= 10;
});

// find(arr, function (val) {
//   return val === 5;
// });
