import React, { useState } from "react";
import { createPost } from "api/posts";

const CreatePost = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(null); //TODO: Default is false, implement further logic

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
        <input
          placeholder="Willing to deliver?"
          value={willDeliver}
          onChange={(e) => setWillDeliver(e.target.value)}
        />
        <button type="submit">
          Submit Valid authenticated totally legit twitter verified Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
