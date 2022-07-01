import { fetchAllPosts } from "api/posts";
import React, { useEffect, useState } from "react";
import SinglePost from "./SinglePost";

const Posts = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const result = await fetchAllPosts();
      setPostList(result.data.posts);
    };
    getAllPosts();
  }, []);

  return (
    <div>
      {postList.map((post, index) => {
        return <SinglePost key={`Key: ${index}`} post={post} />;
      })}
    </div>
  );
};
export default Posts;
