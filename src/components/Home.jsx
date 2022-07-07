import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "api/posts";
import MessageCard from "./MessageCard";
import { useParams } from "react-router-dom";

const Home = ({
  postList,
  messageList,
  setMessageList,
  setPostList,
  currentUser,
}) => {
  const [authoredPosts, setAuthoredPosts] = useState([]);
  const [content, setContent] = useState([]);
  const [author, setAuthor] = useState([]);

  const params = useParams();

  useEffect(() => {
    if (postList.length && currentUser._id) {
      const filteredPostList = postList.filter((post) => {
        console.log("the author id is: ", post.author._id);
        console.log("the current user id is: ", currentUser._id);
        return post.author._id === currentUser._id;
      });
      setAuthoredPosts(filteredPostList);
      console.log("the authored posts are: ", authoredPosts);
      for (let i = 0; i < currentUser.messages.length; i++) {
        let messageContent = currentUser.messages[i].content;
        console.log(messageContent);
        let messageAuthor = currentUser.messages[i].fromUser.username;
        console.log(messageAuthor);
      }

      console.log("the filtered postlist is:", filteredPostList);
    }
  }, [postList, currentUser]);

  return <div></div>;
};

export default Home;
