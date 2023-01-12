"use strict";

let userAge = +prompt("В каком году вы родились?");
let userCity = prompt("В каком городе вы проживаете?");
let userSport = prompt("Какой ваш любимый вид спорта?");
//Страны
const userUkraine = "Украины";
const userUSA = "США";
const userEngland = "Англии";

if (userAge === null) {
  alert("Жаль, что Вы не захотели ввести свой год рождения");
}

if (userCity === "Киев") {
  alert(`${userAge} / Ты живёшь в столице ${userUkraine}`);
} else if (userCity === "Вашингтон") {
  alert(`${userAge} / Ты живёшь в столице ${userUSA}`);
} else if (userCity === "Лондон") {
  alert(`${userAge} / Ты живёшь в столице ${userEngland}`);
} else {
  alert(`${userAge} / Ты живёшь в городе ${userCity}`);
}

//Виды спорта и чемпионы
const footballPlayer = "Криштиану Роналду";
const basketballPlayer = "Майкл Джордан";
const hockeyPlayer = "Уэйн Гретцки";

if (userSport === "Футбол") {
  alert(`Круто! Хочешь стать как ${footballPlayer}?`);
} else if (userSport === "Баскетбол") {
  alert(`Круто! Хочешь стать как ${basketballPlayer}?`);
} else if (userSport === "Хоккей") {
  alert(`Круто! Хочешь стать как ${hockeyPlayer}?`);
}
