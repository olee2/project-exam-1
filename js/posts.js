import { createCategories, createPostList } from "./components/create-html.js";
import { sortByCategory } from "./components/category.js";
import { morePosts } from "./components/button.js";
import { errorMessage } from "./components/message.js";
import { storage } from "./components/storage.js";

const category = Number(
  new URLSearchParams(document.location.search).get("category")
);
const categorySelect = document.querySelector("#category");
const sortSelect = document.querySelector("#sort");
const postsContainer = document.querySelector(".posts-container");
const button = document.querySelector("button");
const mainContainer = document.querySelector("main");

storage()
  .then(() => {
    const posts = JSON.parse(localStorage.getItem("posts"));
    const categories = JSON.parse(localStorage.getItem("categories"));

    // Keeping track of how many posts are loaded vs how many is left in a given category (1 === all)
    // If there is more posts the more posts btn will show
    let numPosts = 10;
    let numInCategory = sortByCategory(posts, 1).length;
    let currentPosts = posts.slice(0, numPosts);

    categorySelect.innerHTML = createCategories(categories);
    postsContainer.innerHTML = createPostList(currentPosts);

    morePosts(button, numPosts, numInCategory);

    // Logic to handle people using the category link in a post to find other posts in a given category
    // If a category came in as a search query and posts matching that category is found, the page will sort accordingly
    if (category && categories.find((c) => c.id === category)) {
      numPosts = 10;
      currentPosts = sortByCategory(posts, category).slice(0, numPosts);
      postsContainer.innerHTML = createPostList(currentPosts);
      numInCategory = sortByCategory(posts, category).length;
      categorySelect.value = category;
      morePosts(button, numPosts, numInCategory);
    }

    categorySelect.onchange = () => {
      numPosts = 10;
      currentPosts = sortByCategory(posts, categorySelect.value).slice(
        0,
        numPosts
      );
      postsContainer.innerHTML = createPostList(currentPosts);
      numInCategory = sortByCategory(posts, categorySelect.value).length;
      reversed = false;
      morePosts(button, numPosts, numInCategory);
      sortSelect.value = "Newest";
    };

    // Code for handling the sorting by date of puplished
    // Using the reversed variable to verify if the posts are sorted in reverse i.e. from oldest to newest
    let reversed = false;

    sortSelect.onchange = () => {
      if (sortSelect.value === "Newest") {
        if (reversed) {
          postsContainer.innerHTML = createPostList(currentPosts.reverse());
          reversed = false;
        }
      } else {
        if (!reversed) {
          postsContainer.innerHTML = createPostList(currentPosts.reverse());
          reversed = true;
        }
      }
    };

    // Handling the More Posts button
    button.onclick = () => {
      numPosts += 10;
      morePosts(button, numPosts, numInCategory);
      currentPosts = posts.slice(0, numPosts);
      postsContainer.innerHTML = createPostList(currentPosts);
    };
  })
  .catch((error) => {
    mainContainer.innerHTML = errorMessage(error);
    console.log(error);
  });
