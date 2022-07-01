import React from "react";

const SinglePost = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>Decription: {post.description} </p>
      <p>Price: {post.price}</p>
    </div>
  );
};

export default SinglePost;
