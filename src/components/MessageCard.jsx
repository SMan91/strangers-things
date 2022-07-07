import React from "react";
import { useNavigate } from "react-router-dom";

const MessageCard = ({ message }) => {
  const navigate = useNavigate();

  console.log("message from message card:", message);
  console.log("Object type for message:", typeof message);
  return (
    <div
      onClick={() => {
        navigate(`/posts/${message.post._id}`);
      }}
    >
      {/* < */}
      <p>Message from Post: {message.post.title}</p>
      <p>Author: {message.fromUser.username}</p>
      <p>Message: {message.content} </p>
      <br />
    </div>
  );
};

export default MessageCard;
