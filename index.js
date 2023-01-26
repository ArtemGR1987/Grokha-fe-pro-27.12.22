"use strict";
const numbers = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

//console.log(numbers);

let positiveSum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positiveSum += numbers[i];
  }
}

console.log("1. Сумма положительных элементов: ", positiveSum);

let positiveNum = numbers.filter(function (num) {
  return num > 0;
});

//console.log("Положительные элементы: ", positiveNum);
console.log("1. Количество положительных элементов: ", positiveNum.length);

const minNumber = Math.min(...numbers);
console.log(
  "2. Минимальный элемент массива: ",
  minNumber,
  "и его порядковый номер: ",
  numbers.indexOf(-63)
);

const maxNumber = Math.max(...numbers);
console.log(
  "3. Максимальный элемент массива: ",
  maxNumber,
  "и его порядковый номер: ",
  numbers.indexOf(76)
);

let negativeNum = numbers.filter(function (num) {
  return num < 0;
});

//console.log("Отрицательные элементы: ", negativeNum);
console.log("4. Количество отрицательных элементов: ", negativeNum.length);

let pairedPosNum = positiveNum.filter((el, index, selfArr) => {
  return selfArr.indexOf(el) !== index;
});
//console.log("Парные положительные элементы: ", pairedPosNum);

const unpairedPosNum = positiveNum.filter((el) => !pairedPosNum.includes(el));
console.log(
  "5. Количество непарных положительных элементов: ",
  unpairedPosNum.length
);

console.log(
  "6. Количество парных положительных элементов: ",
  pairedPosNum.length
);

let pairedPosSum = 0;

for (let i = 0; i < pairedPosNum.length; i++) {
  if (pairedPosNum[i] > 0) {
    pairedPosSum += pairedPosNum[i];
  }
}

console.log("Сумма парных положительных элементов: ", pairedPosSum * 2);
console.log(
  "Сумма непарных положительных элементов: ",
  positiveSum - pairedPosSum * 2
);
