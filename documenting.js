// const printNumbersForEvery2Sec = (n) => {
//   for (let i = 1; i <= n; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 2000);
//   }
// };
// printNumbersForEvery2Sec(10);

//// Timer Challenge 2
// // Write a script to print the message “Hello World” every second, but only 5 times. After 5 times, the script should print the message “Done” and let the Node process exit.

// // Constraints: You cannot use a setTimeout call for this challenge.

// function printHelloWorld(times) {
//   let intervalID = setInterval(() => {
//     if (times > 0) {
//       console.log('Hello World');
//       times--;
//     } else {
//       console.log('Done');
//       clearInterval(intervalID);
//     }
//   }, 1000);
// }

// printHelloWorld(2);

// // Timers Challenge #3
// // Write a script to continuously print the message “Hello World” with varying delays. Start with a delay of 1 second and then increment the delay by 1 second each time. The second time will have a delay of 2 seconds. The third time will have a delay of 3 seconds, and so on.

// // Include the delay in the printed message. Expected output looks like:

// // Hello World. 1
// // Hello World. 2
// // Hello World. 3
// // ...
// // Constraints: You can only use const to define variables. You can’t use let or var.

// function greeting(delay) {
//   setTimeout(() => {
//     console.log('Hello World. ' + delay);
//     greeting(delay + 1);
//   }, delay * 1000);
// }

// greeting(1);

// Timers Challenge #4
// Write a script to continuously print the message “Hello World” with the same varying delays concept as challenge #3, but this time, in groups of 5 messages per main-delay interval. Starting with a delay of 100ms for the first 5 messages, then a delay of 200ms for the next 5 messages, then 300ms, and so on.

// Here’s how the script should behave:

// At the 100ms point, the script will start printing “Hello World” and do that 5 times with an interval of 100ms. The 1st message will appear at 100ms, 2nd message at 200ms, and so on.
// After the first 5 messages, the script should increment the main delay to 200ms. So 6th message will be printed at 500ms + 200ms (700ms), 7th message will be printed at 900ms, 8th message will be printed at 1100ms, and so on.
// After 10 messages, the script should increment the main delay to 300ms. So the 11th message should be printed at 500ms + 1000ms + 300ms (18000ms). The 12th message should be printed at 21000ms, and so on.
// Continue the pattern forever.
// Include the delay in the printed message. The expected output looks like this (without the comments):

// Hello World. 100  // At 100ms
// Hello World. 100  // At 200ms
// Hello World. 100  // At 300ms
// Hello World. 100  // At 400ms
// Hello World. 100  // At 500ms
// Hello World. 200  // At 700ms
// Hello World. 200  // At 900ms
// Hello World. 200  // At 1100ms
// ...
// Constraints: You can use only setInterval calls (not setTimeout) and you can use only ONE if statement.

// Solution
// Because we can only use setInterval calls, we’ll need recursion here as well to increment the delay of the next setInterval call. In addition, we need an if statement to control doing that only after 5 calls of that recursive function.

// Here’s one possible solution:

let lastIntervalId,
  counter = 5;
const greeting = (delay) => {
  if (counter === 5) {
    clearInterval(lastIntervalId);
    lastIntervalId = setInterval(() => {
      console.log('Hello World. ', delay);
      greeting(delay + 100);
    }, delay);
    counter = 0;
  }
  counter += 1;
};
greeting(100);
