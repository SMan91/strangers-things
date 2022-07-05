const url = "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft";

export const fetchAllPosts = async () => {
  const response = await fetch(`${url}/posts`);
  const result = await response.json();
  return result;
};

export const createPost = async (token, postObj) => {
  const response = await fetch(`${url}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(postObj),
  });
  const result = await response.json();
  return result;
};
