// Exercises 1
// Alright here's an exercise for you, I want you to write a function that takes two
// numbers and returns the maximum of the two. Call that function, give a different
// argument, and make sure it's working properly.

// function maximum(num1, num2) {
//   if (num1 > num2) {
//     prompt("Maximum of the two numbers is " + num1);
//   } else prompt("Maximum of the two numbers is " + num2);
// }

// let first = prompt("Enter first number");
// let second = prompt("Enter second number");

// maximum(first, second);

function maximum(num1, num2) {
  if (num1 > num2) {
    console.log("Maximum of the two numbers is " + num1);
  } else {
    console.log("Maximum of the two numbers is " + num2);
  }
}

maximum(3, 0);
