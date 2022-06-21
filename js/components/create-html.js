import { categoryName } from "./category.js";
import { cleanExcerpt } from "./filter-data.js";

// Creating the option tags for the category select
export const createCategories = (categories) => {
  return categories
    .map(
      (cat) =>
        `<option class="category-option" value="${cat.id}">${cat.name}</option>`
    )
    .join("");
};

// Creating HTML for each of the posts to be displayed on the posts.html page and returning a joined array of all posts.
export const createPostList = (posts) => {
  return posts
    .map((post, index) => {
      // Removing the All category (id 1) to display only the specific
      const category = categoryName(post.categories.find((cat) => cat !== 1));

      // Removing the title from the beginning of the excerpt
      const excerpt = cleanExcerpt(post.excerpt, post.title);

      // Adding the class for grey background to every other post
      const background = index % 2 !== 1 ? "background-grey" : "";

      return ` <a href="post.html?id=${post.id}" class="background-width ${background}">
                    <div class="posts-width post">
                        <div class="meta"><span class="category">${category.name}</span> | <span class="date">${post.date}</span></div>
                        <div class="flex justify-between align-items-center">
                            <h2>${post.title}</h2>
                            <p class="read-post">Read Post</p>
                        </div>
                        ${excerpt}
                    </div>
                </a>`;
    })
    .join(" ");
};

export const createSliderPosts = (posts) => {
  return posts
    .map((post, index) => {
      // Removing the All category (id 1) to display only the specific
      const category = categoryName(post.categories.find((cat) => cat !== 1));

      // Removing the title from the beginning of the excerpt
      const excerpt = cleanExcerpt(post.excerpt, post.title);

      return ` <div class="s-container slide">
                        <a href="post.html?id=${post.id}" class="background-grey">
                            <div class="posts-width post">
                                <div class="meta"><span class="category">${category.name}</span> | <span class="date">${post.date}</span></div>
                                <div class="flex justify-between align-items-center">
                                    <h3>${post.title}</h3>
                                    <p class="read-post">Read Post</p>
                                </div>
                                ${excerpt}
                            </div>
                        </a>
                    </div>`;
    })
    .join(" ");
};

// Creating html for the comments in the posts
export const createComments = (comments) => {
  return comments
    .map((comment) => {
      return `<div class="comment">
                <p class="comment-name">${comment.name} (<span class="comment-date">${comment.date}</span>)</p>
                <p class="comment-message">${comment.content}</p>
            </div>`;
    })
    .join("");
};

// Creating html for the posts
export const createPost = (post, category) => {
  return `<article>
                <div class="meta"><a href="posts.html?category=${category.id}" class="category">${category.name}</a> | <span class="date">${post.date}</span></div>
                ${post.content}
            </article>`;
};
