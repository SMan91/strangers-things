import React, { useNavigate, useState } from "react";
import { registerUser } from "api/registerUser";

const Register = ({ setToken, setCurrentUser }) => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await registerUser(username);
          const newUser = result.newUser;
          const token = result.token;
          setToken(token);
          setCurrentUser(newUser);
          localStorage.setItem("token", token);
          navigate("/");
        }}
      >
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <input calue={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
