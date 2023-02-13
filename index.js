"use strict";
// Дано масив з елементами різних типів.
//Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function averageSum(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      newArr.push(arr[i]);
      //   console.log(arr[i]);
    }
  }
  //   console.log(newArr.length);
  //   console.log(newArr);

  return newArr.reduce((acc, num) => (acc += num), 0) / newArr.length;
}

console.log(averageSum([30, "Hello", null, 20, 30, 40]));
