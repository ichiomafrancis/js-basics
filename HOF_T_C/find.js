function find(array, fn) {
  let found = array.find(fn);
  console.log(found);
}

// find([8, 11, 4, 27], function (val) {
//   return val >= 10;
// });

find([8, 11, 4, 27], function (val) {
  return val === 5;
});
