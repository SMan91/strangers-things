import React, { useState } from "react";
import { registerUser } from "api/authentication";
import { useNavigate } from "react-router-dom";

export default function Register({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  return (
    <div>
      <h2>Register: </h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await registerUser(username, password);

          const token = result.data.token;
          setToken(token);

          localStorage.setItem("token", token);
          setPassword("");
          setUsername("");
          if (localStorage.getItem("token")) {
            navigate("/home");
          }
        }}
      >
        <input
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          value={password}
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
