"use strict";
let answerUser = prompt("Що ви хочете зробити(add, sub, mult,div)?");
let firstNumber = +prompt("Введіть перше число");
let secondNumber = +prompt("Введіть друге число");
let add = firstNumber + secondNumber;
let sub = firstNumber - secondNumber;
let mult = firstNumber * secondNumber;
let div = firstNumber / secondNumber;
if (answerUser === "add") {
  alert(`${firstNumber} + ${secondNumber} = ${add}`);
} else if (answerUser === "sub") {
  alert(`${firstNumber} - ${secondNumber} = ${sub}`);
} else if (answerUser === "mult") {
  alert(`${firstNumber} * ${secondNumber} = ${mult}`);
} else if (answerUser === "div") {
  alert(`${firstNumber} / ${secondNumber} = ${div}`);
}
