import { filterPosts, filterCategories } from "./filter-data.js";

// Storing all posts in local storage
const storePosts = async (posts) => {
  try {
    const posts = await filterPosts();
    localStorage.setItem("posts", JSON.stringify(posts));
  } catch (error) {
    console.log(error);
  }
};

// Storing all categories in local storage
const storeCategories = async () => {
  try {
    const categories = await filterCategories();
    localStorage.setItem("categories", JSON.stringify(categories));
  } catch (error) {
    console.log(error);
  }
};

// Storing the about page in local storage
const storeAbout = async () => {
  try {
    const categories = await filterPosts(true);
    localStorage.setItem("about", JSON.stringify(categories));
  } catch (error) {
    console.log(error);
  }
};

// A function to check if posts and categories are in local storage and, if not, collect and store them
// The function is used to make sure the data is available before the html for the index slider and posts page is created
export const storage = async () => {
  try {
    if (
      !localStorage.getItem("posts") &
      !localStorage.getItem("categories") &
      !localStorage.getItem("about")
    ) {
      await storePosts();
      await storeCategories();
      await storeAbout();
    }
  } catch (error) {
    return error;
  }
};
