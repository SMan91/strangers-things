import React, { useEffect, useState } from "react";
import { deletePost, editPost } from "api/posts";
import { useNavigate, useParams } from "react-router-dom";

const SinglePost = ({ post, setPost, postList, currentUser }) => {
  const params = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    const filteredPost = postList.filter((post) => {
      return post._id === params.id;
    });
    // console.log(filteredPost);
    setPost(filteredPost[0]);
  }, []);

  // console.log("Post", post);
  // console.log("The current user is: ", currentUser);
  return (
    <div>
      <h3>{post.title}</h3>
      <p>Decription: {post.description} </p>
      <p>Price: {post.price}</p>
      {/* {console.log("The post is:", post)} */}

      {post?.author?._id === currentUser._id ? (
        <button
          onClick={async () => {
            // await editPost(localStorage.getItem("token"), post._id, post);
            navigate("/editpost");
          }}
        >
          Edit Post
        </button>
      ) : null}

      {post?.author?._id === currentUser._id ? (
        <button
          onClick={async () => {
            await deletePost(post._id, localStorage.getItem("token"));
            navigate("/posts");
          }}
        >
          Delete Post
        </button>
      ) : null}
    </div>
  );
};

export default SinglePost;
