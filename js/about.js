import { storage } from "./components/storage.js";
import { errorMessage } from "./components/message.js";

const article = document.querySelector("article");

storage()
  .then(() => {
    article.innerHTML = JSON.parse(localStorage.getItem("about"))[0].content;
  })
  .catch((error) => {
    article.innerHTML = errorMessage(error);
  });
