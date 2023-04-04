"use strict";
const form = document.querySelector(".form");
const box = document.querySelector(".post__box");
const commentWrapp = document.querySelector(".comment__wrapp");
const btnComment = document.querySelector(".btn__comment");
const input = document.querySelector(".id__input");
const requesrURL = "https://jsonplaceholder.typicode.com/";

const createPostContainer = (title, body) => {
  const postContainer = document.createElement("div");
  postContainer.innerHTML = `
            <h2> Title is - ${title}</h2>
            <p> Body is - ${body}</p>
        `;
  //   btnComment.classList.add("btn__comment-active");

  return postContainer;
};

const createPost = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    box.innerHTML = "";
    commentWrapp.innerHTML = "";
    if (!input.value) return;
    fetch(`${requesrURL}posts/${input.value}`)
      .then((res) => {
        if (res.status <= 400) {
          return res.json();
        }
        return res.json().then((err) => {
          const e = new Error("Something wrong");
          e.data = err;
          const error = document.createElement("div");
          error.innerHTML = `
            <h2> Ошибка - введенный номер должен быть от 1 до 100</h2>
            `;
          btnComment.classList.remove("btn__comment-active");
          box.appendChild(error);
          throw e;
        });
      })
      .then((post) => {
        const postDiv = createPostContainer(post.title, post.body);
        box.appendChild(postDiv);
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

createPost();

const createCommentsContainer = (name, body) => {
  const commentBox = document.createElement("div");
  commentBox.innerHTML = `
        <h2> Comment: ${name}</h2>
        <p> Comment body: ${body}</p>
    `;

  return commentBox;
};

const createComments = () => {
  btnComment.addEventListener("click", () => {
    commentWrapp.innerHTML = "";
    fetch(`${requesrURL}posts/${input.value}/comments`)
      .then((res) => {
        return res.json();
      })
      .then((comments) => {
        comments.forEach((comment) => {
          const commentBox = createCommentsContainer(
            comment.name,
            comment.body
          );
          commentWrapp.appendChild(commentBox);
        });
        btnComment.classList.add("btn__comment-active"); // добавить эту строку
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

createComments();
