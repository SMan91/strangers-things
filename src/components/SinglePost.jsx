import React, { useEffect, useState } from "react";
import { deletePost } from "api/posts";
import { useNavigate, useParams } from "react-router-dom";

const SinglePost = ({ postList, currentUser }) => {
  const params = useParams();
  const [post, setPost] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    // async function getPostById() {
    //   const result = await fetchPostById(params.id);
    //   console.log("result", result);
    //   setPost(result);
    // }
    // getPostById();
    const filteredPost = postList.filter((post) => {
      return post._id === params.id;
    });
    console.log(filteredPost);
    setPost(filteredPost[0]);
  }, []);

  console.log("Post", post);
  console.log("The current user is: ", currentUser);
  return (
    <div>
      <h3>{post.title}</h3>
      <p>Decription: {post.description} </p>
      <p>Price: {post.price}</p>
      {console.log("The post is:", post)}
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
