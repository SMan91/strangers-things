import { fetchAllPosts } from "api/posts";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";
import SinglePost from "./SinglePost";

const Posts = ({ postList, setPostList }) => {
  useEffect(() => {
    const getAllPosts = async () => {
      const result = await fetchAllPosts();
      setPostList(result.data.posts);
    };
    getAllPosts();
  }, []);

  return (
    <div>
      {localStorage.getItem("token") ? (
        <Link to="/createpost">Create A Post</Link>
      ) : null}

      {postList.map((post, index) => {
        return <PostCard key={`Key: ${index}`} post={post} />;
      })}
    </div>
  );
};
export default Posts;
