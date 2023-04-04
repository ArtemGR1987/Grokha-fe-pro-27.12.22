"use strict";
const form = document.querySelector("#form");
const postContainer = document.querySelector("#post-container");
const commentsBtn = document.querySelector("#comments-btn");
const commentsContainer = document.querySelector("#comments-container");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const postId = event.target.elements.postId.value;
  if (postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((post) => {
        postContainer.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        `;
        commentsBtn.style.display = "block";
      })
      .catch((error) => {
        console.error(error);
        alert(
          "Не удалось загрузить пост. Проверьте правильность ID и соединение с интернетом."
        );
      });
  }
});

commentsBtn.addEventListener("click", () => {
  const postId = document
    .querySelector("#post-container h2")
    .textContent.split(".")[0];
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => response.json())
    .then((comments) => {
      commentsContainer.innerHTML = "";
      comments.forEach((comment) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <h3>${comment.name}</h3>
          <p>${comment.body}</p>
          <cite>${comment.email}</cite>
        `;
        commentsContainer.appendChild(li);
      });
    })
    .catch((error) => {
      console.error(error);
      alert(
        "Не удалось загрузить комментарии. Проверьте соединение с интернетом."
      );
    });
});
