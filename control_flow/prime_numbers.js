// METHOD 1

function primeFactorsTo(givenLimit) {
  // Loop through the numbers within the given limit and set their prime status to false
  for (let counter = 0; counter <= givenLimit; counter++) {
    let notPrime = false;
    // console.log(counter);
    if (counter === 0 || counter === 1) {
      continue;
    }

    // Run a loop from 2 to counter to check if the counter is a prime number
    for (let i = 2; i <= counter; i++) {
      // if the number is divisible by i, and the number is not i, then n is not a prime number.
      if ((counter % i === 0) & (i !== counter)) {
        notPrime = true;
      }
    }
    // otherwise, n is prime number.
    if (notPrime === false) {
      console.log(counter);
    }
  }
}
let givenLimit = parseInt(prompt('Enter the given limit'));
console.log(primeFactorsTo(givenLimit));

// METHOD 2

// JavaScript program to display Prime numbers till N

// function to check if a given number is prime
// function isPrime( n)
// {
// 	// since 0 and 1 is not prime return false.
// 	if(n == 1 || n == 0) return false;

// 	// Run a loop from 2 to n-1
// 	for(var i = 2; i < n; i++)
// 	{

// 		// if the number is divisible by i, then n is not a prime number.
// 		if(n % i == 0) return false;
// 	}
// 	// otherwise, n is prime number.
// 	return true;
// }

// // Driver code
// var N = 100;

// // check for every number from 1 to N
// for(var i = 1; i <= N; i++)
// {
// 	// check if current number is prime
// 	if(isPrime(i)) {
// 		console.log( i );
// 	}
// }
