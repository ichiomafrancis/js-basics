var scores = [
  60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
  64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,
];

// console.log(scores.length);
function printAndGetMaxScore(scores) {
  let output;
  let maxScore = 0;
  for (let i = 0; i <= scores.length - 1; i++) {
    output = "Bubble Solution #" + i + " score: " + scores[i];
    console.log(output);
    if (scores[i] > maxScore) {
      maxScore = scores[i];
    }
  }
  return maxScore;
}

function getMaxIndexes(scores, maxScore) {
  let maxIndexes = [];
  for (let i = 0; i <= scores.length - 1; i++) {
    if (scores[i] == maxScore) {
      maxIndexes.push(i);
    }
  }
  return maxIndexes;
}

let maxScore = printAndGetMaxScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + maxScore);

let maxIndexes = getMaxIndexes(scores, maxScore);
console.log("Solutions with highest score: " + maxIndexes);

// Similiar solution using while loop

// var output;
//  var i = 0;
//  while (i < scores.length) {
//  output = "Bubble solution #" + i + " score: " + scores[i];
//  console.log(output);
//  i = i + 1;
// console.log(output);
// if (scores[i] > max) {
//   max = scores[i];
// }
// }
// console.log("Bubbles tests: " + scores.length);
// console.log("Highest bubble score: " + max);

// console.log("Solutions with highest score: " + "#" + highestScore);
