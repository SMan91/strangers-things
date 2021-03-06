import React, { useState } from "react";
import { createPost } from "api/posts";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false); //TODO: Default is false, implement further logic
  const navigate = useNavigate();
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await createPost(token, {
            title,
            description,
            price,
            location,
            willDeliver,
          });
          navigate("/posts");
        }}
      >
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <span>Willing to deliver?</span>
        <input
          type="checkbox"
          value={willDeliver}
          onChange={(e) => {
            setWillDeliver(!willDeliver);
          }}
        />
        <button type="submit">
          Submit Valid authenticated totally legit twitter verified Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
