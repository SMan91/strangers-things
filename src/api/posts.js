const url = "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft";

export const fetchAllPosts = async () => {
  const response = await fetch(`${url}/posts`);
  const result = await response.json();
  return result;
};

export const fetchAllMessages = async (postId) => {
  const response = await fetch(`${url}/posts/${postId}`);
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
    body: JSON.stringify({
      post: postObj,
    }),
  });
  const result = await response.json();
  return result;
};

// export const fetchPostById = async (id) => {
//   const response = await fetch(`${url}/posts/${id}`);
//   const result = await response.json();
//   return result;
// };

export const deletePost = async (id, token) => {
  const response = await fetch(`${url}/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
};

export const editPost = async (token, id, postObj) => {
  const response = await fetch(`${url}/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: postObj,
    }),
  });

  const result = await response.json();
  return result;
};

export const sendMessage = async (content, token, id) => {
  const response = await fetch(`${url}/posts/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      message: {
        content: content,
      },
    }),
  });
  const result = await response.json();
  return result;
};
