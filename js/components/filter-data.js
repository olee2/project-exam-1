import { getData } from "./get-data.js";

// Removing line breaks from the content
export const cleanContent = (content) => {
  return content.replace(/\n/g, "");
};

// Removing the titles from the beginning of the excerpts
export const cleanExcerpt = (excerpt, title) => {
  return excerpt.replace(title, "");
};

// Filtering out the needed data from the posts
export const filterPosts = async (about = false) => {
  const posts = await getData(
    `https://oae.one/brain/wp-json/wp/v2/posts?per_page=20`
  );

  const filtered = posts.map((post) => {
    return {
      title: post.title.rendered,
      date: new Date(post.date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      id: post.id,
      categories: post.categories,
      excerpt: post.excerpt.rendered,
      content: cleanContent(post.content.rendered),
    };
  });

  if (!about) return filtered.filter((post) => post.title !== "About");
  return filtered.filter((post) => post.title === "About");
};

// Filtering out the needed data from the list of categories
export const filterCategories = async () => {
  const categories = await getData(
    `https://oae.one/brain/wp-json/wp/v2/categories`
  );

  const filtered = categories.map((cat) => {
    const { id, name, link } = cat;
    return { id, name, link };
  });
  return filtered.filter((cat) => cat.name !== "Pages");
};

//Filtering out the needed data from the list of comments
export const filterComments = async (id) => {
  const comments = await getData(
    `https://oae.one/brain/wp-json/wp/v2/comments?post=${id}`
  );

  const filtered = comments.map((comment) => {
    return {
      name: comment.author_name,
      date: new Date(comment.date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      content: comment.content.rendered,
    };
  });

  return filtered;
};
