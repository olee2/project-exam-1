import { postData } from "./post-data.js";

const url = `https://www.oae.one/brain/wp-json/wp/v2/comments`;

// A function to post a comment to the WP API
export const postComment = async (id, name, email, comment) => {
  const data = JSON.stringify({
    post: id,
    author_name: name,
    author_email: email,
    content: comment,
  });

  const result = await postData(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: data,
  });
};
