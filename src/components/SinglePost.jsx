import React, { useEffect, useState } from "react";
import { deletePost, sendMessage } from "api/posts";
import { useNavigate, useParams } from "react-router-dom";

const SinglePost = ({ post, setPost, postList, currentUser, token }) => {
  const params = useParams();
  let navigate = useNavigate();
  const [content, setContent] = useState("");
  console.log("PostList from singlePost:", postList);

  useEffect(() => {
    const filteredPost = postList.filter((post) => {
      return post._id === params.id;
    });
    // console.log(filteredPost);
    setPost(filteredPost[0]);
  }, [postList]);
  console.log("the token is: ", token);
  console.log("Post", post);
  // console.log("The current user is: ", currentUser);
  if (post) {
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

        {post?.author?._id !== currentUser._id && token ? (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const result = await sendMessage(content, token, post._id);
              setContent("");
            }}
          >
            <input
              placeholder="Type your message here"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">Send a message</button>
          </form>
        ) : null}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default SinglePost;
