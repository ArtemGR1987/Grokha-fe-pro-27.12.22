"use strict";

let userAge = prompt("В каком году вы родились?", "");
if (userAge === null) {
  alert("Жаль, что Вы не захотели ввести свой год рождения");
}
let userCity = prompt("В каком городе вы проживаете?", "");
if (userCity === null) {
  alert("Жаль, что Вы не захотели ввести свой город");
}
let userSport = prompt("Какой ваш любимый вид спорта?");
if (userSport === null) {
  alert("Жаль, что Вы не захотели ввести свой любимый вид спорта");
}
//Страны
const userUkraine = "Украины";
const userUSA = "США";
const userEngland = "Англии";

if (userAge === null && userCity === null && userSport === null) {
  alert("Жаль, что Вы не захотели ответить ни на один вопрос");
}

if (userCity === "Киев") {
  alert(`Ты родился в ${userAge} году / Ты живёшь в столице ${userUkraine}`);
} else if (userCity === "Вашингтон") {
  alert(`Ты родился в ${userAge} году / Ты живёшь в столице ${userUSA}`);
} else if (userCity === "Лондон") {
  alert(`Ты родился в ${userAge} году / Ты живёшь в столице ${userEngland}`);
} else if (userCity === null && userAge === null) {
  alert(`Год рождения не указан / Город не указан`);
} else if (userCity === null) {
  alert(`Ты родился в ${userAge} году / Город не указан`);
} else if (userAge === null) {
  alert(`Год рождения не указан / Ты живёшь в городе ${userCity}`);
} else if (userAge) {
  alert(`Ты родился в ${userAge} году / Ты живёшь в городе ${userCity}`);
}

//Виды спорта и чемпионы
const footballPlayer = "Криштиану Роналду";
const basketballPlayer = "Майкл Джордан";
const hockeyPlayer = "Уэйн Гретцки";

if (userSport === "Футбол") {
  alert(`Любишь футбол! Круто! Хочешь стать как ${footballPlayer}?`);
} else if (userSport === "Баскетбол") {
  alert(`Любишь баскетбол! Круто! Хочешь стать как ${basketballPlayer}?`);
} else if (userSport === "Хоккей") {
  alert(`Любишь хоккей! Круто! Хочешь стать как ${hockeyPlayer}?`);
}
