let values = [1, 2, 3, 4, 0, NaN, 'boy'];

function countTruthy(array) {
  let store = [];
  for (let value of array) {
    if (value) {
      store.push(value);
    }
  }
  return store.length;
}

console.log(countTruthy(values));

// const array = [0, null, undefined, '', 2, 3];
// console.log(countTruthy(array));

// function countTruthy(array) {
//     let count = 0;

//     for (let item of array) {
//         if (item)
//             count++;
//     }

//     return count;
// }
