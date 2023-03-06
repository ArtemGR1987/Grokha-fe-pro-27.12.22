"use strict";
const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const container = document.getElementById("container");

let count = 0;

addButton.addEventListener("click", function () {
  const message = document.createElement("div");
  message.id = "message" + count;
  message.innerText = "Новый div " + count;
  container.appendChild(message);
  message.classList.add("newdiv");
  count++;
});

container.addEventListener("click", function (event) {
  if (event.target.id.startsWith("message")) {
    event.target.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
});

removeButton.addEventListener("click", function () {
  const lastMessage = container.lastChild;
  container.removeChild(lastMessage);
  count--;
});
