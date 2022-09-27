// Exercises 2
// Here is another exercise. I want you to implement this function. Function
// isLandscape, it takes two parameters,width, and height of an image, and returns
// true if the image is landscape, which means width is greater than height, otherwise
// it returns false.

function isLandscape(width, height) {
  if (width > height) {
    return true;
  } else return false;
}

console.log(isLandscape(5, 3));
