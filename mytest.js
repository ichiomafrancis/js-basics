// function delay(timer) {
//   console.log('Hello after ' + timer + ' seconds');
// }

// setTimeout(delay, 4 * 1000, 4);
// setTimeout(delay, 8 * 1000, 8);

// function printHelloWorld(times) {
//   for (let i = 0; i < times; i++) {
//     setTimeout(() => {
//       console.log('Hello World');
//     }, i * 1000);
//   }
//   console.log('Done');
// }

// printHelloWorld(2);

// function continuosPrint(times) {
//   for (let i = 1; i <= times; i++) {
//     setTimeout(() => {
//       console.log('Hello World ' + i);
//     }, i * 1000);
//   }
// }
// continuosPrint(5);

// const greeting = (delay) =>
//   setTimeout(() => {
//     console.log('Hello World. ' + delay);
//     greeting(delay + 1);
//   }, delay * 1000);
// greeting(1);

function outer(a) {
  return function inner(b) {
    return a + b;
  };
}

// console.log(outer(5)(2));

let laterAdd = outer(10);
console.log(laterAdd(15));
