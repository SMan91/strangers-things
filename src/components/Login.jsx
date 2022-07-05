import React, { useState } from "react";
import { Link } from "react-router-dom";

import { loginUser } from "../api/authentication";

export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2>Login:</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await loginUser(username, password);
          localStorage.setItem("token", result.data.token);
          setToken(result.data.token);
          setPassword("");
          setUsername("");
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
        <button type="submit">Submit!</button>
      </form>
      <span>
        Not already a member? Click <Link to="/register">Here</Link>
      </span>
    </div>
  );
}
