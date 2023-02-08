"use strict";
function pow(num, degree) {
  if (degree == 1) {
    return num;
  } else {
    return num * pow(num, degree - 1);
  }
}

console.log(pow(5, 3));
console.log(pow(10, 4));
