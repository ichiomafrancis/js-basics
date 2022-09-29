// Exercises 3: Demerit Points
// Alright here's another exercise, but this exercise is a little more complicated than
// the earlier exercises. So I want you to implement this function, checkSpeed, this
// function takes a parameter that's the speed of a car. Now in this program, I'm
// assuming that speed limit is 70 km an hour. So if a car is driving under the speed
// limit, we get an Ok message on the console. Similarly if we pass 70 here, so if
// somebody is driving exactly at the speed limit, we're still good. We still get the Ok
// message.
// Now for every five kilometers above the speed limit, they're going to get 1 point.
// So if I drive at 75 km an hour, I get 1 point here. But what if I drive at 72 km an
// hour? I'm still good. So for every 5 km, above the speed limit, we should give the
// driver 1 point. Now as part of calculating the point here, you will have to use one of
// the built in functions in JavaScript that is Math. floor. We can give this function a
// floating point number, like 1.3, let's say 1.3 points, and this will convert that to the
// greatest integer, for example if we go to the console here, and type math.floor of
// 1.3, we get 1. So you will have to use this function as part of your calculations.
// Back to our checkSpeed function, what if you passed 80 here? We should get 2
// points right? So we get 2 points, beautiful. Now what if we drive at 180 km an
// hour? Our license is suspended. So if a driver gets more than 12 points, then their
// license should be suspended.

const speedLimit = 70; // km/hr
const kmPerPoint = 5;

let point;
function checkSpeed(speed) {
  if (speed <= speedLimit) {
    console.log("Ok");
  } else if (speed > speedLimit && speed < speedLimit + kmPerPoint) {
    console.log("Still good");
  } else {
    point = Math.floor((speed - speedLimit) / kmPerPoint);
    if (point <= 12) {
      console.log(point);
    } else {
      console.log(
        "Your points is " +
          point +
          " which is greater than the allowable points (12), therefore your license has been suspended"
      );
    }
  }
}

checkSpeed(180);
