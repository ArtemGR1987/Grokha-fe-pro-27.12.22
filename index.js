"use strict";
// // Дано масив з елементами різних типів.
// //Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

// function averageSum(arr) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       newArr.push(arr[i]);
//       //   console.log(arr[i]);
//     }
//   }
//   //   console.log(newArr.length);
//   //   console.log(newArr);

//   return newArr.reduce((acc, num) => (acc += num), 0) / newArr.length;
// }

// console.log(averageSum([30, "Hello", null, 20, 30, 40]));

// // Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
// // У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// // Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
// function doMath(x, znak, y) {
//   if (znak === "+") {
//     return `Ваш результат - ${x + y}`;
//   } else if (znak === "-") {
//     return `Ваш результат - ${x - y}`;
//   } else if (znak === "*") {
//     return `Ваш результат - ${x * y}`;
//   } else if (znak === "/") {
//     return `Ваш результат - ${x / y}`;
//   } else if (znak === "%") {
//     return `Ваш результат - ${x % y}`;
//   } else if (znak === "^") {
//     return `Ваш результат - ${x ^ y}`;
//   } else {
//     console.log("Вы ввели неправильный знак");
//   }
// }

// let fistNumber = +prompt("Введите первое число");
// let znak = prompt("Выберите операцию", "- , + , * , / , % , ^");
// let secondNumber = +prompt("Введите второе число");

// console.log(doMath(fistNumber, znak, secondNumber));

// Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.
function newArr(lengthOut, lengthIn, filling) {
  let array = new Array(lengthOut);
  for (let i = 0; i < array.length; i++) {
    array[i] = new Array(lengthIn).fill(filling);
  }
  return array;
}
let arrLengthOut = +prompt("Put the length of out array:");
let arrLengthIn = +prompt("Put the length og inner array:");
let arrFilling = prompt("Put the filling of array:");
console.log(newArr(arrLengthOut, arrLengthIn, arrFilling));
