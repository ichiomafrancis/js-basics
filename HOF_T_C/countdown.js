//// Wrong Solution
// let countdown = (num) => {
//   while (num > 0) {
//     console.log(num);
//     num--;
//   }
//   console.log('DONE!');
// };

// let intervalID = setInterval(countdown, 1000, 9);

// setTimeout(function () {
//   clearInterval(intervalID);
// }, 2000);

// // Correct Solution
// function countDown(time) {
//   var intervalID = setInterval(function () {
//     time--;
//     if (time <= 0) {
//       clearInterval(intervalID);
//       console.log('DONE!');
//     } else {
//       console.log(time);
//     }
//   }, 1000);
// }

function countDown(time) {
  let intervalID = setInterval(function () {
    time--;
    if (time > 0) console.log(time);
    else {
      clearInterval(intervalID);
      console.log('DONE!');
    }
  }, 1000);
}

countDown(4);
