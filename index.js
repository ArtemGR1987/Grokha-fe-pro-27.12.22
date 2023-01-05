"use striсt";
let userName = prompt("Назвіть ваше ім'я, будь ласка");
let userAge = +prompt("Скільки вам років?");
let userSmoke = confirm("Ви палите?");

if (userAge >= 18 && userSmoke) {
  alert(`Привіт ${userName}, що ж, ти сам обрав цей шлях...`);
} else if (userAge >= 18 && userSmoke === false) {
  alert(`Привіт ${userName}, чудово! Ти мабуть ще й спортом займаєшся!`);
} else if (userAge < 18 && userSmoke) {
  alert(`Привіт ${userName}! A батьки знають про це?`);
} else if (userAge < 18 && userSmoke === false) {
  alert(`Привіт ${userName}! Правильно, зараз головне добре вчитися!`);
}
