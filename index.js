"use strict";

let userAge = +prompt("В каком году вы родились?");
let userCity = prompt("В каком городе вы проживаете?");
let userSport = prompt("Какой ваш любимый вид спорта?");
//Страны
const userUkraine = "Украины";
const userUSA = "США";
const userEngland = "Англии";
//Виды спорта и чемпионы

if ((userCity === "Киев", userSport === "Футбол")) {
  alert(`${userAge} / Ты живёшь в столице ${userUkraine}`);
} else if (userCity === "Вашингтон") {
  alert(`${userAge} / Ты живёшь в столице ${userUSA}`);
} else if (userCity === "Лондон") {
  alert(`${userAge} / Ты живёшь в столице ${userEngland}`);
} else {
  alert(`${userAge} / Ты живёшь в городе ${userCity}`);
}
