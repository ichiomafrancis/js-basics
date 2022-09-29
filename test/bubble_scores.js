let scores = [
  60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
  64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,
];

let costs = [
  0.25, 0.27, 0.25, 0.25, 0.25, 0.25, 0.33, 0.31, 0.25, 0.29, 0.27, 0.22, 0.31,
  0.25, 0.25, 0.33, 0.21, 0.25, 0.25, 0.25, 0.28, 0.25, 0.24, 0.22, 0.2, 0.25,
  0.3, 0.25, 0.24, 0.25, 0.25, 0.25, 0.27, 0.25, 0.26, 0.29,
];

//
// compute the highest score and display results
//
let maxScore = printAndGetMaxScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + maxScore);

//
// compute the best solutions and display
//
let maxIndexes = getMaxIndexes(scores, maxScore);
console.log("Solutions with highest score: " + maxIndexes);

//
// compute the most cost effective of the best solutions
//
let mostCostEffective = getMostCostEffectiveSolution(maxIndexes, costs);
console.log(
  "Bubble Solution #" + mostCostEffective + " is the most cost effective"
);

// // Or use the other function
// let mostCostEffective = getMostCostEffectiveSolution2(scores, costs, maxScore);
// console.log(
//   "Bubble Solution #" + mostCostEffective + " is the most cost effective"
// );

function printAndGetMaxScore(scores) {
  let output;
  let maxScore = 0;
  for (let i = 0; i < scores.length; i++) {
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
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] == maxScore) {
      maxIndexes.push(i);
    }
  }
  return maxIndexes;
}

function getMostCostEffectiveSolution(maxIndexes, costs) {
  var cost = 100;
  var solutionIndex;
  var lowCostIndex;

  for (var i = 0; i < maxIndexes.length; i++) {
    solutionIndex = maxIndexes[i];
    if (cost > costs[solutionIndex]) {
      lowCostIndex = solutionIndex;
      cost = costs[solutionIndex];
    }
  }
  return lowCostIndex;
}

// // Another way to write this is as shown below

// function getMostCostEffectiveSolution2(scores, costs, maxScore) {
//   let cost = 100; // much higher than any of the costs
//   let index;

//   for (let i = 0; i < scores.length; i++) {
//     if (scores[i] == maxScore) {
//       if (cost > costs[i]) {
//         index = i;
//         cost = costs[i];
//       }
//     }
//   }
//   return index;
// }
