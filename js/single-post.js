import { postComment } from "./components/comments.js";
import { filterComments } from "./components/filter-data.js";
import { createComments, createPost } from "./components/create-html.js";
import { messageSent } from "./components/message.js";
import { valEmail, valName, valMessage } from "./components/validation.js";
import { categoryName } from "./components/category.js";

const id = Number(new URLSearchParams(document.location.search).get("id"));
const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const comment = document.querySelector("#comment");
const commentContainer = document.querySelector(".comments-container");
const numCommentsContainer = document.querySelector(".num-comments");
const container = document.querySelector("article");
const posts = JSON.parse(localStorage.getItem("posts"));
const post = posts.find((post) => post.id === id);
const category = categoryName(post.categories.find((cat) => cat !== 1));

container.innerHTML = createPost(post, category);
document.title = `The Brain Attic | ${
  posts.find((post) => post.id === id).title
}`;

const comments = async () => {
  //Getting and adding all comments, adding number of comments and loading form validation
  const filtered = await filterComments(id);
  commentContainer.innerHTML = createComments(filtered);
  const numComments = document.querySelectorAll(".comment");
  numCommentsContainer.innerText = `${numComments.length} Comment(s)`;
  valEmail(email);
  valName(name, 2);
  valMessage(comment, 5);
};

comments();

form.onsubmit = async (e) => {
  e.preventDefault();
  try {
    await postComment(id, name.value, email.value, comment.value);
    await comments();
    messageSent("Thanks for your comment");
    form.reset();
  } catch (error) {
    console.log(error);
    messageSent(`An error occured. Please try again later.`);
  }
};
