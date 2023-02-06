"use strict";

function getAdd() {
  let result = 0;
  return function (number) {
    return (result += number);
  };
}

const sum = getAdd();

console.log(sum(3));
console.log(sum(5));
console.log(sum(7));
console.log(sum(9));
