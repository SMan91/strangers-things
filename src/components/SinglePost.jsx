import React, { useEffect, useState } from "react";
import { fetchPostById } from "api/posts";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const params = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    async function getPostById() {
      const result = await fetchPostById(params._id);
      console.log("result", result);
      setPost(result);
    }
    getPostById();
  }, []);

  console.log("Post", post);
  return (
    <div>
      <h3>{post.title}</h3>
      <p>Decription: {post.description} </p>
      <p>Price: {post.price}</p>
    </div>
  );
};

export default SinglePost;
