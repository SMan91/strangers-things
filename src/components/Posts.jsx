import { fetchAllPosts } from "api/posts";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";
import SinglePost from "./SinglePost";

const Posts = ({ postList, setPostList }) => {
  const [searchTerm, setSearchTerm] = useState("");

  function postMatches(post, text) {
    if (post.title.includes(text)) {
      return true;
    }
    return false;
  }

  const filteredPosts = postList.filter((post) =>
    postMatches(post, searchTerm)
  );
  const postsToDisplay = searchTerm.length ? filteredPosts : postList;
  console.log("posts:");
  console.log(postsToDisplay);

  return (
    <div>
      {localStorage.getItem("token") ? (
        <Link to="/createpost">Create A Post</Link>
      ) : null}
      <div>
        <input
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
      </div>

      {postsToDisplay.map((post, index) => {
        return <PostCard key={`Key: ${index}`} post={post} />;
      })}
    </div>
  );
};
export default Posts;
