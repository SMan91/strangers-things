import React from "react";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
  // console.log(post);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`${post._id}`);
      }}
    >
      <h3>{post.title}</h3>
      <p>Decription: {post.description} </p>
      <p>Price: {post.price}</p>
    </div>
  );
};

export default PostCard;
