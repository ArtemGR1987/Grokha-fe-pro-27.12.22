"use strict";

const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
  return array.filter(function (element) {
    return element != item;
  });
}
console.log(array);
console.log(removeElement(array, 3));
