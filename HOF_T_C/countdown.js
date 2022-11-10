/* 
1.	countdown
Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log "DONE!" and stop.

countDown(4);
// 3
// 2
// 1
// "DONE!"

*/

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
