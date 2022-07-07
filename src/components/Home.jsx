import React, { useEffect } from "react";
import { fetchAllMessages, fetchAllPosts } from "api/posts";
import MessageCard from "./MessageCard";
import { useParams } from "react-router-dom";

const Home = ({
  postList,
  messageList,
  setMessageList,
  setPostList,
  currentUser,
}) => {
  useEffect(() => {
    const getAllPosts = async () => {
      const result = await fetchAllPosts();
      setPostList(result.data.posts);
    };
    getAllPosts();
  }, []);

  // const postId = post._id;
  console.log("PostList from Home", postList);

  const params = useParams();
  console.log("params:", params);
  useEffect(() => {
    const filteredPost = postList.filter((post) => {
      return post._id === params.id;
    });

    //   const getAllMessages = async () => {
    //     const result = await fetchAllMessages();
    //     console.log("result printing: ", result);
    //     setMessageList(result.data.posts);
    //   };
    //   getAllMessages();
  }, []);

  /*
  conditions:
  1)filter for posts we are the author of

  */
  return <div></div>;
};

export default Home;
