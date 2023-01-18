"use strict";
let num = prompt("Введите число");
for (let i = 1; i <= 100; i++) {
  if (i * i <= num) {
    console.log(i);
  }
}
