import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../api/authentication";

export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  let navigate = useNavigate();
  console.log(setToken);

  return (
    <div>
      <h2>Login:</h2>
      {errorMessage ? <h4>{errorMessage}</h4> : null}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await loginUser(username, password);
          if (result.success) {
            setErrorMessage("");
            localStorage.setItem("token", result.data.token);
            setToken(result.data.token);
            setPassword("");
            setUsername("");
            // console.log(localStorage.getItem("token"));
            if (localStorage.getItem("token")) {
              navigate("/home");
            }
          } else {
            const errorMessage = result.error.meesage;
            setErrorMessage(errorMessage);
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
        <button type="submit">Submit!</button>
      </form>
      <span>
        Not already a member? Click <Link to="/register">Here</Link>
      </span>
    </div>
  );
}
