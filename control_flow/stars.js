// Exercises 4: Stars
// This exercise is a very popular exercise for junior programmers. So, we have this
// function, showStars, with a parameter called rows. So when we call this function
// and pass 5, see what we get on the console. We get 5 rows, in each row we have
// a star, and the number of stars in that row, depends on the row we are in. So in
// the first row we have one star, in the second row we have 2 stars, and so on. If
// you call this function pass 1, get only a single star, if we pass 2, we get 2 rows, if
// we pass 10, you got the point.

function showStars(rows) {
  str = "*";
  let i = 1;
  while (rows >= i) {
    console.log(str.repeat(i));
    i++;
  }
}

showStars(20);
