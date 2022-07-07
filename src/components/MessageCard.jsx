import React from "react";
import { useNavigate } from "react-router-dom";

const MessageCard = ({ message }) => {
  const navigate = useNavigate();

  console.log("message:", message);
  return (
    <div
      onClick={() => {
        navigate(`${message._id}`);
      }}
    >
      {/* <h3>{message.post}</h3> */}
      <p>Decription: {message.content} </p>
    </div>
  );
};

export default MessageCard;
