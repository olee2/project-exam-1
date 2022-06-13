// A function for getting data from the API
export const getData = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error(`${response.status} ${response.statusText}`);
};
