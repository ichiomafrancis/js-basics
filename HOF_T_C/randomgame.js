/*  
2.	randomGame
Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and return the number of tries it took before we found a number greater than .75.

*/

function randomGame() {
  let number;
  let count = 0;
  let intervalID = setInterval(function () {
    number = Math.random();
    count += 1;
    if (number > 0.75) {
      clearInterval(intervalID);
      console.log(number);
      console.log(
        'It took ' +
          count +
          ' try/tries to find a random number greater than 0.75'
      );
    }
  }, 1000);
}

randomGame();
