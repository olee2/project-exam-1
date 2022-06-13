// A function for posting data to the API
export const postData = async (url, options) => {
  const response = await fetch(url, options);
  if (response.ok) {
    return await response.json();
  }
  console.log(response);
  throw new Error(`${response.status} ${response.statusText}`);
};
